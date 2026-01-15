import React from 'react';
import { motion } from 'framer-motion';

// Helper to generate random positions for the "scatter" effect
const getRandomPos = () => {
    return {
        x: Math.random() * 800 - 400, // Random X between -400 and 400
        y: Math.random() * 600 - 300, // Random Y between -300 and 300
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

const About = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans">

            {/* --- NAVIGATION BAR --- */}

            {/* --- DECORATIVE TAGS --- */}
            <div className="absolute top-28 left-8 text-xs text-gray-500 font-mono z-20">(ABOUT.)</div>
            <div className="absolute top-28 right-8 text-xs text-gray-500 font-mono z-20">[ N.002 ]</div>

            {/* Vertical Line Marker */}
            <div className="absolute top-36 right-8 h-12 w-[1px] bg-gray-600 z-20"></div>


            {/* --- MAIN CONTENT CONTAINER --- */}
            <div className="relative w-full h-screen flex flex-col items-center justify-center">

                {/* --- BACKGROUND ANIMATED TEXT --- */}
                {/* We split this into two blocks to mimic the layout in the screenshot 
            "FUNDAMENTALS" (Top Leftish) and "OF WEB DEVELOPMENT" (Bottom Rightish) 
            But based on the video, it flows behind. Let's make it one giant block behind. */}

                <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-20">
                    <div className="flex flex-col items-center justify-center w-full px-4">
                        {/* Huge Text Block */}
                        <ScatterText
                            text="FUNDAMENTALS"
                            className="text-[12vw] font-bold text-zinc-500 mix-blend-overlay tracking-tighter"
                        />
                        <div className="h-[20vh]"></div> {/* Spacer for image */}
                        <ScatterText
                            text="OF WEB DEVELOPMENT"
                            className="text-[12vw] font-bold text-zinc-500 mix-blend-overlay tracking-tighter text-center"
                        />
                    </div>
                </div>


                {/* --- CENTER IMAGE --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-64 h-80 md:w-80 md:h-96 bg-black border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden"
                >
                    {/* Placeholder for the portrait */}
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                        alt="Portrait"
                        className="object-cover w-full h-full opacity-80"
                    />
                </motion.div>


                {/* --- BOTTOM DESCRIPTION --- */}
                <div className="absolute bottom-20 w-full flex justify-center z-20 px-4">
                    <div className="flex flex-row items-end justify-between w-full max-w-6xl">

                        {/* Left Line Decoration */}
                        <div className="hidden md:block w-12 h-[2px] bg-zinc-700 mb-4"></div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-center md:max-w-xl"
                        >
                            <h3 className="text-white text-sm md:text-base font-medium leading-relaxed uppercase tracking-wide">
                                Hi, I'm Max - A Creative Frontend Developer.<br />
                                My focus is on building sleek, animated, and immersive experiences
                                that transform simple websites into something extraordinary.
                            </h3>
                        </motion.div>

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