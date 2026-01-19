import React from 'react';
import { motion } from 'framer-motion';

const Bio = () => {
    const textContent = [
        "I don’t believe in ordinary marketing.",
        "I believe in building brands,",
        "creating influence,",
        "and driving real business growth.",
        "BY",
        "ASJID VASEEM"
    ];

    // 1. Text Container: Controls the staggering of the lines
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12, // Slightly slower stagger for readability
                delayChildren: 0.3,    // Short delay before starting
            },
        },
    };

    // 2. Text Lines: The "Slide Up + Fade" effect
    const childVariants = {
        hidden: {
            opacity: 0,
            y: 25, // Start slightly lower 
            filter: "blur(5px)" // Adds the subtle softness seen in video
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.0,
                // This bezier curve creates that "premium" slow-settle stop
                ease: [0.33, 1, 0.68, 1]
            },
        },
    };

    // 3. Signature: Draws self after text is done
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                // Delay calculated to start exactly when text finishes
                // (6 lines * 0.12 stagger + 0.3 delay + buffer)
                delay: 1.4,
                duration: 2.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        // Updated Colors to match Video: Light Sage Background, Dark Text
        <motion.div
            className="relative w-full h-[140vh] text-[#1a1a1a] font-sans overflow-hidden flex flex-col justify-center items-center selection:bg-black selection:text-[#A9BFA8]"
            style={{ backgroundImage: "linear-gradient(to bottom, #5d685c, #c2caba)" }}
        >

            {/* --- 3D Gradient Top Effect --- */}
            <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-[#978859]/40 via-[#5d685c]/20 to-transparent blur-3xl pointer-events-none z-0" />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 2 }}
                className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,_rgba(194,202,186,0.3)_0%,_transparent_70%)] blur-[100px] pointer-events-none z-0 mix-blend-overlay"
            />

            {/* --- Corner Floating Elements --- */}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ amount: 0.8 }}
                className="absolute top-110 left-8 text-xs font-mono"
            >

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                className="absolute top-110 right-8"
            >
                {/* Updated button styling to match video contrast */}
                <button className="border border-black/20 rounded-full px-4 py-1 text-xs hover:bg-black hover:text-[#A9BFA8] transition-colors duration-300">
                    Marketer &gt;
                </button>
            </motion.div>

            {/* --- Main Content --- */}
            <div className="relative z-10 max-w-2xl w-full px-8 mt-40 md:mt-80">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-10%" }}
                    className="flex flex-col gap-1 text-lg md:text-xl font-medium leading-relaxed tracking-wide"
                >
                    {textContent.map((line, index) => (
                        <motion.div key={index} variants={childVariants} className="w-full relative">
                            {/* Layout Logic */}
                            {index === 1 ? (
                                <div className="flex justify-between w-[60%]">
                                    <span>I STRIVE</span>
                                    <span>TO KEEP ONLY</span>
                                </div>
                            ) : index === 4 || index === 5 ? (
                                <div className="flex justify-end w-full text-right">
                                    {line}
                                </div>
                            ) : (
                                <div className="text-left">{line}</div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- Signature --- */}
                <div className="absolute right-10 -bottom-32 w-48 h-32 pointer-events-none">
                    <svg viewBox="0 0 400 120" className="w-full h-full">
                        <motion.path
                            d="
                            M20 80
                            Q30 40 50 70
                            Q65 95 80 70
                            Q95 45 110 70

                            M120 70
                            Q135 40 150 70
                            Q165 95 180 70

                            M195 40
                            L195 90

                            M210 70
                            Q230 40 255 65
                            Q280 90 305 70
                            Q330 45 350 65
                            "
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="2" // Slightly thinner for elegance
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={pathVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }}
                        />
                    </svg>
                </div>
            </div>

            {/* --- Bottom Elements --- */}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-8 left-8"
            >
                <div className="relative w-12 h-12 flex items-center justify-center">
                    {/* <motion.svg
                        viewBox="0 0 100 100"
                        className="w-full h-full opacity-60"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray="180 250" />
                    </motion.svg> */}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-8 right-8 text-[10px] font-mono tracking-widest"
            >
                {/* BY SUFAIL */}
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
        </motion.div>
    );
};

export default Bio;