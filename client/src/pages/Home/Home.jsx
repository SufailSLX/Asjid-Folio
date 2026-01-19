import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const heroRock = '/images/intro-img1.jpg'

import Shuffle from './TextEffects'

const Home = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (e) => {
            const { innerWidth, innerHeight } = window
            const xNorm = e.clientX / innerWidth - 0.5
            const yNorm = e.clientY / innerHeight - 0.5

            // larger movement for the background rock plane, subtle so it feels cinematic
            const x = xNorm * 40
            const y = yNorm * 24

            setOffset({ x, y })
        }

        window.addEventListener('mousemove', handleMove)
        return () => window.removeEventListener('mousemove', handleMove)
    }, [])

    const bgTransform = {
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.03)`,
        transition: 'transform 0.08s ease-out'
    }

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#848f77] text-white">
            {/* Background Image with subtle parallax */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0" style={bgTransform}>
                    <img
                        src={heroRock}
                        alt="Background"
                        className="h-full w-full object-cover"
                    />
                </div>
                {/* Optional dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Top navigation */}
            <header
                className="fixed top-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-4 md:pt-6 text-[0.55rem] tracking-[0.32em] uppercase text-neutral-100/80 transition-all duration-300"
            >
                <div className="font-semibold mb-4 md:mb-0" style={{ display: 'inline-block' }}>
                    <Shuffle text="ASJID VASEEM" className="text-[0.6rem] hover:scale-110 transition-transform duration-300 cursor-default font-black" />
                </div>

                <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-18 md:mr-22">
                    {['About', 'Works', 'Projects', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                const sectionId = item.toLowerCase();
                                const element = document.getElementById(sectionId);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="transition-colors duration-150 hover:text-white/100 text-[0.6rem] md:text-[0.7rem] tracking-[0.3em] group"
                        >
                            <span className="md:hidden">{item}</span>
                            <Shuffle text={item} className="hidden md:block group-hover:scale-110 transition-transform duration-300 cursor-pointer" />
                        </button>
                    ))}
                </nav>
            </header>

            {/* Centered quote */}
            <section className="relative z-20 flex min-h-screen items-center justify-center">
                <div
                    className="text-center tracking-[0.35em] uppercase text-neutral-100/85 leading-relaxed flex flex-col items-center gap-2"
                >
                    <Shuffle text="MINIMALISM IS NOT EMPTINESS," className="text-[0.65rem] hover:scale-110 transition-transform duration-300 cursor-default" />
                    <Shuffle text="IT'S" className="text-[0.65rem] hover:scale-110 transition-transform duration-300 cursor-default" />
                    <Shuffle text="ESSENCE." className="text-[0.65rem] hover:scale-110 transition-transform duration-300 cursor-default" />
                </div>
            </section>

            {/* Dark overlay for smooth transition */}
            <motion.div
                initial={{ opacity: 5 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 6.2, ease: "easeOut" }}
                className="fixed inset-0 z-[100] bg-black pointer-events-none"
            />
        </main>
    )
}

export default Home
