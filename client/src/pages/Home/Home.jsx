import React, { useEffect, useState } from 'react'
import heroRock from '../../assets/intro-bg.mp4'

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

    const textTransform = {
        transform: `translate3d(${offset.x * 0.3}px, ${offset.y * 0.3}px, 0)`,
        transition: 'transform 0.12s ease-out'
    }

    const navTransform = {
        transform: `translate3d(${offset.x * 0.15}px, ${offset.y * 0.15}px, 0)`,
        transition: 'transform 0.16s ease-out'
    }

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#848f77] text-white">
            {/* Background gradient plane */}
            {/* Background Video with subtle parallax */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0" style={bgTransform}>
                    <video
                        src={heroRock}
                        // autoPlay
                        loop
                        muted
                        // playsInline
                        className="h-full w-full object-cover"
                    />
                </div>
                {/* Optional dark overlay to ensure text readability if video is bright */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Top navigation */}
            <header
                className="relative z-20 flex items-center justify-between px-10 pt-4 text-[0.55rem] tracking-[0.32em] uppercase text-neutral-100/80"
                style={navTransform}
            >
                <span className="font-semibold">MAX MILKIN</span>
                <nav className="flex items-center gap-8">
                    {['About', 'Awards', 'Works', 'Expertise', 'Contact'].map((item) => (
                        <button
                            key={item}
                            className="transition-colors duration-150 hover:text-white/100 text-[0.52rem] tracking-[0.3em]"
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </header>

            {/* Centered quote */}
            <section className="relative z-20 flex min-h-screen items-center justify-center">
                <div
                    className="text-center text-[0.55rem] tracking-[0.35em] uppercase text-neutral-100/85 leading-relaxed"
                    style={textTransform}
                >
                    <p>MINIMALISM IS NOT EMPTINESS,</p>
                    <p>IT'S</p>
                    <p>ESSENCE.</p>
                </div>
            </section>
        </main>
    )
}

export default Home
