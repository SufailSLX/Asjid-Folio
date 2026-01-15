import React from 'react'

const awards = [
    { times: '2X', org: 'AWWWARDS', desc: 'SITE OF THE DAY' },
    { times: '1X', org: 'AWWWARDS', desc: 'DEVELOPER AWARD' },
    { times: '1X', org: 'AWWWARDS', desc: 'PORTFOLIO HONORS' },
    { times: '2X', org: 'AWWWARDS', desc: 'HONORABLE MENTION' },
    { times: '2X', org: 'FWA', desc: 'SITE OF THE DAY' },
    { times: '4X', org: 'GSAP', desc: 'SITE OF THE DAY' },
    { times: '1X', org: 'CSS DESIGN AWARDS', desc: 'SITE OF THE DAY' },
    { times: '1X', org: 'CODROPS', desc: 'CASE STUDY ARTICLE' },
    { times: '2X', org: 'MUZLI', desc: 'TOP 100 PORTFOLIOS OF 2024, 2025' },
    { times: '1X', org: 'MUZLI', desc: 'WEB DESIGN TRENDS 2025' },
    { times: '1X', org: 'WD AWARDS', desc: 'SITE OF THE DAY' }
]

const Projects = () => {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#c2cab8] text-black">
            {/* Giant 18 background mark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.13]">
                <div className="relative w-[70vw] max-w-5xl">
                    <span className="select-none text-[32rem] leading-none font-semibold tracking-tight text-white">
                        18
                    </span>
                </div>
            </div>

            {/* Main content */}
            <section className="relative z-20 mx-auto mt-20 grid w-full max-w-6xl gap-10 px-10 pb-20 md:grid-cols-2">
                {/* Left heading */}
                <div>
                    <p className="mb-4 text-[0.6rem] tracking-[0.3em] uppercase text-black/60"></p>
                    <h1 className="text-[2.4rem] leading-tight font-semibold tracking-tight text-black">
                        MY PROJECTS
                    </h1>
                    <h1 className="text-[2.4rem] leading-tight font-semibold tracking-tight text-black">
                        HAVE RECEIVED
                    </h1>
                    <h1 className="text-[2.4rem] leading-tight font-semibold tracking-tight text-black">
                        INTERNATIONAL RECOGNITION
                    </h1>
                </div>

                {/* Right content: Table and Text */}
                <div className="flex flex-col gap-10 mt-50 -ml-30">
                    {/* Awards table */}
                    <div className="text-[0.7rem] tracking-[0.14em] uppercase">
                        <div className="border-y border-black/15">
                            {awards.map((item, index) => (
                                <div
                                    key={`${item.org}-${index}`}
                                    className="grid grid-cols-[60px_minmax(0,1fr)_minmax(0,1.4fr)] items-center border-b border-black/12 py-2 last:border-b-0"
                                >
                                    <span className="px-2 text-black/75">{item.times}</span>
                                    <span className="px-2 text-black/75">{item.org}</span>
                                    <span className="px-2 text-black/75">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom copy block */}
                    <div className="flex justify-start">
                        <p className="max-w-xs text-[0.65rem] leading-relaxed tracking-[0.18em] uppercase text-black/75">
                            AWARDS ARE PART OF THE SUCCESS
                            <br />
                            I SHARE WITH MY CLIENTS
                            <br />
                            THROUGH WEBSITES BUILT TO WIN
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Projects