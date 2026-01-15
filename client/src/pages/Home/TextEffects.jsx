import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom function to split text into chars, mimicking basic SplitText functionality
const splitTextToChars = (element) => {
    const text = element.textContent;
    element.innerHTML = '';
    const chars = [];

    // Simple split by character
    text.split('').forEach(char => {
        const span = document.createElement('div');
        span.textContent = char;
        // Mimic the class names GSAP SplitText might use or just keep them generic
        span.style.position = 'relative';
        span.style.display = 'inline-block';
        if (char === ' ') {
            span.style.width = '0.3em'; // preserve space width
        }

        element.appendChild(span);
        chars.push(span);
    });

    return { chars, revert: () => { element.textContent = text; } };
};

const Shuffle = ({
    text,
    className = '',
    style = {},
    shuffleDirection = 'right',
    duration = 0.35,
    maxDelay = 0,
    ease = 'power3.out',
    threshold = 0.1,
    rootMargin = '-100px',
    tag = 'p',
    textAlign = 'center',
    onShuffleComplete,
    shuffleTimes = 1,
    animationMode = 'evenodd',
    loop = false,
    loopDelay = 0,
    stagger = 0.03,
    scrambleCharset = 'ABCXYZ123!@#',
    colorFrom,
    colorTo,
    triggerOnce = true,
    respectReducedMotion = true,
    triggerOnHover = true
}) => {
    const ref = useRef(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [ready, setReady] = useState(false);

    const splitRef = useRef(null);
    const wrappersRef = useRef([]);
    const tlRef = useRef(null);
    const playingRef = useRef(false);
    const hoverHandlerRef = useRef(null);

    useEffect(() => {
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => setFontsLoaded(true));
        } else {
            setFontsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!ref.current || !text || !fontsLoaded) return;
        if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            if (onShuffleComplete) onShuffleComplete();
            return;
        }

        const el = ref.current;

        const startPct = (1 - threshold) * 100;
        // Parse rootMargin if needed, simplified here
        const start = `top ${startPct}%`;

        const removeHover = () => {
            if (hoverHandlerRef.current && ref.current) {
                ref.current.removeEventListener('mouseenter', hoverHandlerRef.current);
                hoverHandlerRef.current = null;
            }
        };

        const teardown = () => {
            if (tlRef.current) {
                tlRef.current.kill();
                tlRef.current = null;
            }
            if (wrappersRef.current.length) {
                // Revert splitting hack
                // In a real scenario we'd swap nodes back, but here we can just reset textContent
                // if we want to be destructive. 
                // However, the original code tried to be smart about swapping wrappers.
                // For simplicity with our custom splitter:
                // We will rely on splitRef.revert() if it exists.
            }
            if (splitRef.current && splitRef.current.revert) {
                splitRef.current.revert();
            }
            wrappersRef.current = [];
            splitRef.current = null;
            playingRef.current = false;
        };

        const build = () => {
            teardown();

            // Custom Split
            splitRef.current = splitTextToChars(el);
            const chars = splitRef.current.chars;
            wrappersRef.current = [];

            const rolls = Math.max(1, Math.floor(shuffleTimes));
            const rand = (set) => set.charAt(Math.floor(Math.random() * set.length)) || '';

            chars.forEach(ch => {
                // ch is the SPAN containing the character
                const parent = ch.parentElement; // should be 'el'

                // We need to wrap 'ch' in a overflow-hidden container
                const w = ch.getBoundingClientRect().width;
                // If char is space, w might be small. 

                const wrap = document.createElement('span');
                wrap.className = 'inline-block overflow-hidden align-baseline text-left';
                wrap.style.width = w + 'px';
                wrap.style.verticalAlign = 'bottom'; // Fix alignment helpful for shuffle

                const inner = document.createElement('span');
                inner.className = 'inline-block whitespace-nowrap will-change-transform origin-left';

                // Insert wrap where ch is
                parent.insertBefore(wrap, ch);
                wrap.appendChild(inner);

                // Original Char (Fixed)
                const firstOrig = ch.cloneNode(true);
                firstOrig.style.width = w + 'px';

                // Now we fill 'inner' with [Scramble, Scramble, ..., Original]
                // The animations usually slide the 'inner' strip up or down or left/right.
                // The provided code did X translation.

                // ch is currently empty or just removed? 
                // Wait, 'ch' was appended to 'inner' in the original code.
                // Let's replicate logic:

                // 1. firstOrig goes in
                // 2. Random chars go in
                // 3. The actual 'ch' goes in (as the final visible one)

                inner.appendChild(firstOrig);

                for (let k = 0; k < rolls; k++) {
                    const c = ch.cloneNode(true);
                    if (scrambleCharset) c.textContent = rand(scrambleCharset);
                    c.style.width = w + 'px';
                    inner.appendChild(c);
                }
                inner.appendChild(ch); // The final one is the original DOM node

                // Physics / Layout
                const steps = rolls + 1;
                let startX = 0;
                let finalX = -steps * w;

                if (shuffleDirection === 'right') {
                    // If right, we probably want to slide from Left to Right?
                    // Original code:
                    // if (shuffleDirection === 'right') { ... reorder children ... }
                    const firstCopy = inner.firstElementChild;
                    const real = inner.lastElementChild;
                    if (real) inner.insertBefore(real, inner.firstChild);
                    if (firstCopy) inner.appendChild(firstCopy);
                    startX = -steps * w;
                    finalX = 0;
                }

                gsap.set(inner, { x: startX, force3D: true });
                if (colorFrom) inner.style.color = colorFrom;

                inner.setAttribute('data-final-x', finalX);
                inner.setAttribute('data-start-x', startX);

                wrappersRef.current.push(wrap);
            });
        };

        const inners = () => wrappersRef.current.map(w => w.firstElementChild);

        const randomizeScrambles = () => {
            if (!scrambleCharset) return;
            wrappersRef.current.forEach(w => {
                const strip = w.firstElementChild;
                if (!strip) return;
                const kids = Array.from(strip.children);
                // Middle children are the scrambles
                for (let i = 1; i < kids.length - 1; i++) {
                    kids[i].textContent = scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length));
                }
            });
        };

        const play = () => {
            const strips = inners();
            if (!strips.length) return;

            playingRef.current = true;

            const tl = gsap.timeline({
                onComplete: () => {
                    playingRef.current = false;
                    if (!loop) {
                        // Cleanup to just show text? 
                        // For now keep it as is, or use internal cleanup logic
                        if (onShuffleComplete) onShuffleComplete();
                        armHover();
                    }
                }
            });

            const addTween = (targets, at) => {
                tl.to(
                    targets,
                    {
                        x: (i, t) => parseFloat(t.getAttribute('data-final-x') || '0'),
                        duration,
                        ease,
                        stagger: animationMode === 'evenodd' ? stagger : 0
                    },
                    at
                );
                if (colorFrom && colorTo) tl.to(targets, { color: colorTo, duration, ease }, at);
            };

            if (animationMode === 'evenodd' || true) {
                // Simple stagger
                addTween(strips, 0);
            }

            tlRef.current = tl;
        };

        const armHover = () => {
            if (!triggerOnHover || !ref.current) return;
            removeHover();
            const handler = () => {
                if (playingRef.current) return;
                build();
                // Quick randomize
                // randomizeScrambles(); 
                play();
            };
            hoverHandlerRef.current = handler;
            // The user wants HOVER effect. 
            // We attach to the wrapper (ref.current)
            ref.current.addEventListener('mouseenter', handler);
        };

        const create = () => {
            build();
            play(); // initial play
            armHover();
            setReady(true);
        };

        // Since we want manual hover control, maybe we don't need ScrollTrigger for the hover part?
        // But the original code used it for entry.
        // Let's just run create immediately if we want standard behavior
        create();

        return () => {
            removeHover();
            teardown();
            setReady(false);
        };
    }, [text, fontsLoaded, triggerOnHover, shuffleDirection, duration]);

    const Tag = tag;

    return (
        <Tag ref={ref} className={`${className} ${ready ? 'opacity-100' : 'opacity-0'}`} style={{ textAlign, ...style }}>
            {text}
        </Tag>
    );
};

export default Shuffle;
