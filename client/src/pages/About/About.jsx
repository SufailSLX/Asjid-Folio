import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Helper to generate random positions for the "scatter" effect
const getRandomPos = () => {
    return {
        x: Math.random() * 1000 - 500, // Random X between -500 and 500
        y: Math.random() * 800 - 400, // Random Y between -400 and 400
        rotate: Math.random() * 360,  // Random rotation
        opacity: 0,
    };
};

const ScatterText = ({ text, className }) => {
    return (
        <div className={`flex flex-wrap max-w-6xl justify-center leading-none select-none ${className}`}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={getRandomPos()}
                    animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1], // Custom bezier for that smooth "snap" feel
                        delay: i * 0.02, // Stagger effect
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
};

const ScrollChar = ({ char, progress, index, total, origin }) => {
    // Determine the time window for this character's animation
    // Example: Animation happens between scroll progress 0.1 and 0.8
    const rangeStart = 0.1;
    const rangeEnd = 0.9;
    const range = rangeEnd - rangeStart;

    const charProgressReq = rangeStart + (index / total) * range;

    const startMove = Math.max(0, charProgressReq - 0.15);
    const endMove = Math.min(1, charProgressReq);

    const x = useTransform(progress, [startMove, endMove], [origin.x, 0]);
    const y = useTransform(progress, [startMove, endMove], [origin.y, 0]);
    const opacity = useTransform(progress, [startMove, endMove], [0, 1]);
    const rotate = useTransform(progress, [startMove, endMove], [origin.rotate, 0]);

    const displayChar = char === " " ? "\u00A0" : char;

    return (
        <motion.span style={{ x, y, opacity, rotate }} className="inline-block relative">
            {displayChar}
        </motion.span>
    );
};

const ScrollScatterText = ({ text, progress, className }) => {
    // Generate static origins once so they don't jump on re-renders
    const origins = useMemo(() => {
        return text.split("").map(() => ({
            x: (Math.random() - 0.5) * 1500, // Wide spread X
            y: (Math.random() - 0.5) * 1500, // Wide spread Y
            rotate: Math.random() * 360
        }));
    }, [text]);

    return (
        <div className={`flex flex-wrap justify-center ${className}`}>
            {text.split("").map((char, i) => (
                <ScrollChar
                    key={i}
                    char={char}
                    progress={progress}
                    index={i}
                    total={text.length}
                    origin={origins[i]}
                />
            ))}
        </div>
    );
};

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress for buttery animation
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div id="about" ref={containerRef} className="relative w-full min-h-[300vh] bg-[#0a0a0a] text-white font-sans">

            {/* Sticky Container - Pins content to view while scrolling happens */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* --- DECORATIVE TAGS --- */}
                <div className="absolute top-16 left-4 md:top-28 md:left-8 text-xs text-gray-500 font-mono z-20">(ABOUT.)</div>
                <div className="absolute top-16 right-4 md:top-28 md:right-8 text-xs text-gray-500 font-mono z-20"></div>

                {/* Vertical Line Marker */}
                <div className="absolute top-36 right-8 h-12 w-[1px] bg-gray-600 z-20"></div>

                {/* --- BACKGROUND ANIMATED TEXT --- */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-20">
                    <div className="flex flex-col items-center justify-center w-full px-4">
                        <ScatterText
                            text="FUNDAMENTALS"
                            className="text-[12vw] font-bold text-zinc-500 mix-blend-overlay tracking-tighter"
                        />
                        <div className="h-[20vh]"></div>
                        <ScatterText
                            text="OF MARKETING"
                            className="text-[12vw] font-bold text-zinc-500 mix-blend-overlay tracking-tighter text-center"
                        />
                    </div>
                </div>

                {/* --- CENTER IMAGE --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-64 h-80 md:w-80 md:h-96 grayscale hover:grayscale-0 transition-all duration-500 "
                >
                    <img
                        src="/images/asjid.png"
                        alt="Portrait"
                        className="object-cover w-full h-82"
                    />
                </motion.div>

                {/* --- BOTTOM DESCRIPTION (SCROLL ANIMATED) --- */}
                <div className="absolute bottom-16 md:bottom-20 w-full flex justify-center z-20 px-4">
                    <div className="flex flex-row items-end justify-between w-full max-w-6xl">

                        {/* Left Line Decoration */}
                        <div className="hidden md:block w-12 h-[2px] bg-zinc-700 mb-4"></div>

                        {/* Text Content */}
                        <div className="text-center md:max-w-xl">
                            <h3 className="text-white text-sm md:text-base font-medium leading-relaxed uppercase tracking-wide flex flex-col items-center">
                                <ScrollScatterText
                                    text="I’m Asjid VAZEEM. I’m a digital marketer and brand strategist."
                                    progress={smoothProgress}
                                    className="mb-1"
                                />
                                <ScrollScatterText
                                    text="specializing in helping businesses grow through performance marketing, creative content, and smart online strategies. I work with brands to build strong digital presence and convert attention into real customers."
                                    progress={smoothProgress}
                                    className=""
                                />
                            </h3>
                        </div>

                        {/* Right Tag */}
                        <div className="hidden md:block text-xs text-gray-500 font-mono mb-4"></div>
                    </div>
                </div>

                {/* --- BOTTOM BUTTON --- */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-6 px-8 py-3 rounded-full border border-zinc-700 text-xs text-zinc-400 uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                    About Me
                </motion.button>

            </div>
        </div>
    );
};

export default About;