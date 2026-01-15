// import React, { useState, useEffect } from "react";
// import { motion, useAnimate, stagger } from "framer-motion";

// // --- CONFIGURATION ---
// const BACKGROUND_COLOR = "#B5C8B8"; // Sage Green
// const TEXT_COLOR = "#1A1A1A";

// // The concentric ring data
// const RINGS = [
//   { text: "WORDPRESS  BLENDER  THREE.JS ", radius: 220 },
//   { text: "REACT  FRONTEND  DEVELOPER ", radius: 150 },
//   { text: "CREATIVE  DESIGN ", radius: 95 },
// ];

// const Intro = ({ onComplete }) => {
//   const [scope, animate] = useAnimate();
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const sequence = async () => {
//       // 1. Counter Animation (0 -> 100)
//       // Runs in parallel with the letters
//       const counterAnimation = animate(0, 100, {
//         duration: 2.5,
//         ease: "circOut",
//         onUpdate: (latest) => setCount(Math.round(latest)),
//       });

//       // 2. The "Magnetic Snap" Animation
//       // We animate the SPANs. The DIV wrappers handle the circular layout.
//       await animate(
//         "span.letter",
//         {
//           x: 0, 
//           y: 0, 
//           opacity: 1, 
//           scale: 1, 
//           filter: "blur(0px)",
//           rotate: 0, // Resets any random rotation from initial
//         },
//         {
//           duration: 2.2,
//           delay: stagger(0.015, { from: "random" }), // Fast, organic ripple
//           ease: [0.25, 0.1, 0.25, 1], // The "Snap" physics
//         }
//       );

//       // Ensure counter is exactly 100
//       counterAnimation.stop();
//       setCount(100);

//       // 3. Brief hold (0.5s) to admire the rings
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       // 4. Exit Animation (Implode/Fade out)
//       await animate(
//         scope.current,
//         { opacity: 0, filter: "blur(10px)", scale: 0.95 },
//         { duration: 0.8, ease: "easeInOut" }
//       );

//       // 5. Trigger completion
//       if (onComplete) {
//         onComplete();
//       }
//     };

//     sequence();
//   }, [animate, onComplete]);

//   return (
//     <div
//       ref={scope}
//       className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden font-sans font-bold"
//       style={{ backgroundColor: BACKGROUND_COLOR, color: TEXT_COLOR }}
//     >
//       {/* Central Counter */}
//       <div className="absolute z-10 flex items-center justify-center pointer-events-none">
//         <span className="text-xs tracking-widest">{count}%</span>
//       </div>

//       {/* RINGS CONTAINER */}
//       {/* We center this container so all absolute children pivot from the middle of screen */}
//       <div className="relative flex items-center justify-center w-[600px] h-[600px]">
//         {RINGS.map((ring, ringIndex) => (
//           <RingGroup key={ringIndex} text={ring.text} radius={ring.radius} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Helper component to calculate geometry for a single ring
// const RingGroup = ({ text, radius }) => {
//   const chars = text.split("");
//   const totalChars = chars.length;
//   const degreesPerChar = 360 / totalChars;

//   return (
//     <>
//       {chars.map((char, i) => {
//         // GEOMETRY CALCULATION
//         // This places the "Wrapper" in the perfect circle spot.
//         const angle = i * degreesPerChar;
        
//         return (
//           <div
//             key={i}
//             className="absolute flex items-center justify-center"
//             style={{
//               width: "20px", // arbitrary small size
//               height: "20px",
//               // CSS logic: Rotate to angle -> Push out by radius -> Rotate 90deg to stand upright
//               transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(90deg)`,
//               transformOrigin: "center center",
//               left: "50%",
//               top: "50%",
//               marginTop: "-10px", // Center correction based on height
//               marginLeft: "-10px", // Center correction based on width
//             }}
//           >
//             {/* MOTION SPAN 
//                This is what moves! It starts somewhere else and snaps to (0,0) 
//                inside the wrapper we calculated above.
//             */}
//             <motion.span
//               className="letter block text-[14px] uppercase"
//               initial={{
//                 x: (Math.random() - 0.5) * 600, // Random Scatter X
//                 y: (Math.random() - 0.5) * 600, // Random Scatter Y
//                 opacity: 0,
//                 scale: 0.5,
//                 filter: "blur(12px)", // Start blurry
//                 rotate: (Math.random() - 0.5) * 200, // Random spin
//               }}
//               // Note: 'animate' is handled by the parent useAnimate scope
//             >
//               {char}
//             </motion.span>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Intro;

import React, { useState, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

// --- CONFIGURATION ---
const BACKGROUND_COLOR = "#B5C8B8"; // Sage Green
const TEXT_COLOR = "#1A1A1A";

// The concentric ring data
const RINGS = [
  { text: "WORDPRESS  BLENDER  THREE.JS ", radius: 220 },
  { text: "REACT  FRONTEND  DEVELOPER ", radius: 150 },
  { text: "CREATIVE  DESIGN ", radius: 95 },
];

const Intro = ({ onComplete }) => {
  const [scope, animate] = useAnimate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // --- PHASE 1: ENTER (IMPLOSION) ---
      
      // 1. Counter Animation (0 -> 100)
      const counterAnimation = animate(0, 100, {
        duration: 2.5,
        ease: "circOut",
        onUpdate: (latest) => setCount(Math.round(latest)),
      });

      // 2. Letters Animation (Scatter -> Snap to Rings)
      await animate(
        "span.letter",
        {
          x: 0, 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px)",
          rotate: 0,
        },
        {
          duration: 2.2,
          delay: stagger(0.015, { from: "random" }),
          ease: [0.25, 0.1, 0.25, 1], // Magnetic Snap
        }
      );

      counterAnimation.stop();
      setCount(100);

      // --- PHASE 2: HOLD ---
      await new Promise((resolve) => setTimeout(resolve, 800)); // Hold for 0.8s

      // --- PHASE 3: EXIT (EXPLOSION / REVERSE) ---

      // 1. Fade out the counter immediately
      animate("div.counter-text", { opacity: 0, y: -20 }, { duration: 0.5 });

      // 2. Explode the letters back out!
      // We manually select them to give each one a UNIQUE random exit direction
      const letterNodes = scope.current.querySelectorAll("span.letter");
      
      const exitPromises = Array.from(letterNodes).map((node) => {
        // Generate random destination for "Explosion"
        const randomX = (Math.random() - 0.5) * 800; // Fly left/right
        const randomY = (Math.random() - 0.5) * 800; // Fly up/down
        const randomRotate = (Math.random() - 0.5) * 360; // Spin wildy

        return animate(
          node,
          {
            x: randomX,
            y: randomY,
            opacity: 0,
            scale: 0.5,
            filter: "blur(12px)", // Becomes blurry again
            rotate: randomRotate,
          },
          {
            duration: 1.2,
            ease: "backIn", // Start slow, fly away fast
            delay: Math.random() * 0.2, // Slight organic variance
          }
        );
      });

      // Wait for all letters to fly away
      await Promise.all(exitPromises);

      // --- PHASE 4: FINAL CLEANUP ---
      if (onComplete) {
        onComplete();
      }
    };

    sequence();
  }, [animate, onComplete]);

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden font-sans font-bold"
      style={{ backgroundColor: BACKGROUND_COLOR, color: TEXT_COLOR }}
    >
      {/* Central Counter */}
      <div className="counter-text absolute z-10 flex items-center justify-center pointer-events-none">
        <span className="text-xs tracking-widest">{count}%</span>
      </div>

      {/* RINGS CONTAINER */}
      <div className="relative flex items-center justify-center w-[600px] h-[600px]">
        {RINGS.map((ring, ringIndex) => (
          <RingGroup key={ringIndex} text={ring.text} radius={ring.radius} />
        ))}
      </div>
    </div>
  );
};

const RingGroup = ({ text, radius }) => {
  const chars = text.split("");
  const totalChars = chars.length;
  const degreesPerChar = 360 / totalChars;

  return (
    <>
      {chars.map((char, i) => {
        const angle = i * degreesPerChar;
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              width: "20px", 
              height: "20px",
              transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(90deg)`,
              transformOrigin: "center center",
              left: "50%",
              top: "50%",
              marginTop: "-10px", 
              marginLeft: "-10px", 
            }}
          >
            <motion.span
              className="letter block text-[14px] uppercase"
              initial={{
                x: (Math.random() - 0.5) * 600, 
                y: (Math.random() - 0.5) * 600, 
                opacity: 0,
                scale: 0.5,
                filter: "blur(12px)", 
                rotate: (Math.random() - 0.5) * 200, 
              }}
            >
              {char}
            </motion.span>
          </div>
        );
      })}
    </>
  );
};

export default Intro;