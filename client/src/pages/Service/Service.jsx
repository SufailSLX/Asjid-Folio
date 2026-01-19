import React, { useEffect, useState } from 'react'

const clients = [
    { id: 1, label: 'SOCIAL MEDIA MARKETING', align: 'left', position: 'top' },
    { id: 2, label: 'SEO', align: 'right', position: 'top' },
    { id: 3, label: 'PERFOMANCE MARKETING', align: 'left', position: 'middle' },
    { id: 4, label: 'WEB DESIGN', align: 'right', position: 'middle' },
    { id: 5, label: 'BRANDING & CREATIVES', align: 'center', position: 'bottom' }
]

const Service = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMove = (e) => {
            const { innerWidth, innerHeight } = window
            const xNorm = e.clientX / innerWidth - 0.5
            const yNorm = e.clientY / innerHeight - 0.5

            const x = xNorm * 26
            const y = yNorm * 18

            setOffset({ x, y })
        }

        window.addEventListener('mousemove', handleMove)
        return () => window.removeEventListener('mousemove', handleMove)
    }, [])

    const rockTransform = {
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.1s ease-out'
    }

    const navTransform = {
        transform: `translate3d(${offset.x * 0.12}px, ${offset.y * 0.12}px, 0)`,
        transition: 'transform 0.15s ease-out'
    }

    const textTransform = {
        transform: `translate3d(${offset.x * 0.18}px, ${offset.y * 0.18}px, 0)`,
        transition: 'transform 0.16s ease-out'
    }

    const renderClient = (client) => {
        const base =
            'absolute text-[0.6rem] tracking-[0.22em] uppercase text-white/80 flex flex-col items-center gap-2 whitespace-nowrap'

        if (client.position === 'top' && client.align === 'left') {
            return (
                <div key={client.id} className={`${base} left-[12%] top-[30%]`} style={textTransform}>
                    <span>{client.label}</span>
                    <span className="h-px w-32 bg-white/60" />
                </div>
            )
        }

        if (client.position === 'top' && client.align === 'right') {
            return (
                <div key={client.id} className={`${base} right-[12%] top-[30%] items-end`} style={textTransform}>
                    <span>{client.label}</span>
                    <span className="h-px w-32 bg-white/60" />
                </div>
            )
        }

        if (client.position === 'middle' && client.align === 'left') {
            return (
                <div key={client.id} className={`${base} left-[12%] top-[52%]`} style={textTransform}>
                    <span>{client.label}</span>
                    <span className="h-px w-40 bg-white/40" />
                </div>
            )
        }

        if (client.position === 'middle' && client.align === 'right') {
            return (
                <div key={client.id} className={`${base} right-[12%] top-[52%] items-end`} style={textTransform}>
                    <span>{client.label}</span>
                    <span className="h-px w-40 bg-white/40" />
                </div>
            )
        }

        if (client.position === 'bottom' && client.align === 'center') {
            return (
                <div key={client.id} className={`${base} left-1/2 bottom-[14%] -translate-x-1/2`} style={textTransform}>
                    <span>{client.label}</span>
                    <span className="h-px w-40 bg-white/40" />
                </div>
            )
        }

        return null
    }

    return (
        <main id="works" className="relative min-h-screen w-full overflow-hidden bg-[#060607] text-white">
            {/* Textured dark background gradient */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#181818,_#050506)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.85),_transparent_45%,_rgba(0,0,0,0.95))] mix-blend-multiply" />
            </div>

            {/* SERVICE label / hero context */}
            <div className="relative z-20 mt-6 flex justify-center text-[0.55rem] tracking-[0.3em] uppercase text-white/60">
                ( SERVICE. )
            </div>

            {/* Hero block for existing clients layout */}
            <section className="relative z-10 mt-10 h-screen">
                {/* Caption under (imaginary) rock */}
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 text-center text-[0.55rem] tracking-[0.28em] uppercase text-white/70"
                    style={textTransform}
                >
                    <p>SOME OF THE LATEST</p>
                    <p>SERVICE'S</p>
                </div>

                {/* Client labels with lines */}
                <div className="pointer-events-none absolute inset-0">
                    {clients.map((client) => renderClient(client))}
                </div>
            </section>

            {/* Expertise section (new UI) */}
            <section className="relative z-20 px-10 pb-32 pt-24">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
                    {/* Top row: (EXPERTISE.) label and index */}
                    <div className="mb-16 flex w-full items-center justify-between text-[0.55rem] uppercase tracking-[0.3em]">
                        <span className="text-white/55">( EXPERTISE. )</span>
                        <span className="text-white/55"></span>
                    </div>

                    {/* Disciplines row */}
                    <div className="mb-16 flex flex-wrap items-center justify-center gap-6 text-center text-[0.6rem] uppercase tracking-[0.26em] text-white/80">
                        <span>/ SMM</span>
                        <span className="text-white/40">•</span>
                        <span>/ WEB DESIGN</span>
                        <span className="text-white/40">•</span>
                        <span>/ DEVELOPMENT</span>
                        <span className="text-white/40">•</span>
                        <span>/ PERFOMANCE MARKETING</span>
                    </div>

                    {/* Category pills */}
                    <div className="flex flex-col items-center gap-3 text-[0.55rem] uppercase tracking-[0.26em]">
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white/85">
                                / LANDING PAGES
                            </span>
                            <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white/85">
                                / CORPORATE WEBSITES
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white/85">
                                / PERSONAL BRAND SITES
                            </span>
                            <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white/85">
                                / E-COMMERCE / ONLINE STORES
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white/85">
                                / SHOWCASE / AWARD WEBSITES
                            </span>
                            <span className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-white/85">
                                / NEWS & COMMUNITIES
                            </span>
                        </div>
                    </div>

                    {/* Stack of tools / technologies */}
                    <div className="mt-20 flex justify-center">
                        <ul className="space-y-1 text-center text-[0.55rem] uppercase tracking-[0.22em] text-white/60">
                            <li>GOOGLE ADS</li>
                            <li>META ADS</li>
                            <li>SHOPIFY</li>
                            <li>CANVA</li>
                            <li>WORDPRESS</li>
                        </ul>
                    </div>

                    {/* Tiny corner stars */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-between px-6 text-xs text-white/60">
                        <span>✶</span>
                        <span>✶</span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Service