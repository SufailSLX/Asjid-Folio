import React from 'react'

const awards = [
    { org: 'Digital Marketing Campaigns', desc: 'LEAD GENERATION' },
    { org: 'GYMKHAANA', desc: 'Social Media Management' },
    { org: 'DBC Corporations', desc: 'Branding & Creatives' },
    { org: 'SHOEVERSE', desc: 'SPOIFY WEB' },
    { org: 'BOLSHEVICS', desc: 'WOO-COMMERCE' },
    { org: 'ALACLUB', desc: 'SHOPIFY WEB' },
]

const Projects = () => {
    return (
        <main id="projects" className="relative min-h-screen w-full overflow-hidden bg-[#c2cab8] text-black">
            {/* Giant 18 background mark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.13]">
                <div className="relative w-[70vw] max-w-5xl text-center">
                    <span className="select-none text-[20vw] md:text-[32rem] leading-none font-semibold tracking-tight text-white">
                        18
                    </span>
                </div>
            </div>

            {/* Main content */}
            <section className="relative z-20 mx-auto mt-20 grid w-full max-w-6xl gap-10 px-6 md:px-10 pb-20 md:grid-cols-2">
                {/* Left heading */}
                <div>
                    <p className="mb-4 text-[0.6rem] tracking-[0.3em] uppercase text-black/60"></p>
                    <h1 className="text-[2.4rem] leading-tight font-semibold tracking-tight text-black">
                        MY PROJECTS
                    </h1>
                    <h1 className="text-[2.4rem] leading-tight font-semibold tracking-tight text-black">
                        {/* HAVE RECEIVED */}
                    </h1>
                    <h1 className="text-[2.4rem] leading-tight font-semibold tracking-tight text-black">
                        {/* INTERNATIONAL RECOGNITION */}
                    </h1>
                </div>

                {/* Right content: Table and Text */}
                <div className="flex flex-col gap-10 mt-10 md:mt-50 md:-ml-30">
                    {/* Awards table */}
                    <div className="text-[0.6rem] md:text-[0.7rem] tracking-[0.14em] uppercase">
                        <div className="border-y border-black/15">
                            {awards.map((item, index) => (
                                <div
                                    key={`${item.org}-${index}`}
                                    className="grid grid-cols-[40px_minmax(0,1fr)_minmax(0,1.4fr)] md:grid-cols-[60px_minmax(0,1fr)_minmax(0,1.4fr)] items-center border-b border-black/12 py-2 last:border-b-0"
                                >
                                    <span className="px-1 md:px-2 text-black/75">0{index + 1}</span>
                                    <span className="px-1 md:px-2 text-black/75">{item.org}</span>
                                    <span className="px-1 md:px-2 text-black/75">{item.desc}</span>
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