import React from 'react'
import PaperBg from '../../assets/Paper-bg.jpeg'

const budgets = ['5K - 10K', '10K - 20K', 'more']

const Contact = () => {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-[#c2cab8] text-black">
            {/* Marble-ish background overlay */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
                <div
                    className="absolute inset-0 mix-blend-multiply opacity-[0.22] bg-cover bg-center"
                    style={{ backgroundImage: `url(${PaperBg})` }}
                />
            </div>

            {/* Content wrapper */}
            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-lg flex-col items-center px-6 pb-12 pt-12">
                {/* Small index + label */}
                <div className="mb-6 text-center text-[0.6rem] uppercase tracking-[0.3em] text-black/60">
                    <p></p>
                    <p className="mt-3">( CONTACT FORM )</p>
                </div>

                {/* Title */}
                <h1 className="mb-3 text-center text-sm md:text-base tracking-[0.25em] uppercase text-black">
                    LETS MAKE YOUR PROJECT SPECIAL
                </h1>
                <div className="mb-50 h-px w-16 bg-black" />

                {/* Form */}
                <form className="w-full space-y-3 text-[0.7rem] uppercase tracking-[0.2em] text-black/70">
                    <div>
                        <label className="block text-[0.6rem] mb-3">YOUR NAME*</label>
                        <input
                            type="text"
                            className="w-full border-b border-black/60 bg-transparent pb-2 text-[0.7rem] tracking-[0.15em] outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="block text-[0.6rem] mb-3">YOUR EMAIL*</label>
                        <input
                            type="email"
                            className="w-full border-b border-black/60 bg-transparent pb-2 text-[0.7rem] tracking-[0.15em] outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="block text-[0.6rem] mb-3">YOUR MESSAGE*</label>
                        <textarea
                            rows={3}
                            className="w-full resize-none border-b border-black/60 bg-transparent pb-2 text-[0.7rem] tracking-[0.15em] outline-none focus:border-black"
                        />
                    </div>

                    <div className="pt-4">
                        <label className="block text-[0.6rem] mb-4">YOUR BUDGET (INR)</label>
                        <div className="flex flex-wrap items-center gap-6 text-[0.65rem] tracking-[0.2em]">
                            {budgets.map((item, index) => (
                                <button
                                    key={item}
                                    type="button"
                                    className={`rounded-full border px-6 py-2 transition-colors duration-150 ${index === 0
                                        ? 'border-black bg-black text-[#c2cab8] shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
                                        : 'border-black/40 bg-transparent text-black/80 hover:border-black hover:bg-black hover:text-[#c2cab8]'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-full border border-black px-12 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-black hover:bg-black hover:text-[#c2cab8] transition-colors duration-150"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </section>

            {/* Identity / footer section */}
            <section className="relative z-10 w-full border-t border-black/10 px-6 pb-16 pt-16">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
                    {/* Top nav labels */}
                    <nav className="mb-10 flex flex-wrap items-center justify-center gap-10 text-[0.6rem] uppercase tracking-[0.28em] text-black/70">
                        <span>About</span>
                        <span>Awards</span>
                        <span>Works</span>
                        <span>Expertise</span>
                    </nav>

                    {/* Name headline */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-[0.18em] text-black">
                        ASJID VASEEM
                    </h2>

                    {/* Social links */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-[0.65rem] uppercase tracking-[0.26em] text-black/75">
                       <a
  href="https://www.linkedin.com/in/your-username/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border-b border-black/40 pb-0.5">
    LinkedIn
  </button>
</a>

                        {/* <button className="border-b border-black/40 pb-0.5">Telegram</button> */}
                    <a
  href="https://wa.me/918921982338"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border-b border-black/40 pb-0.5">
    WhatsApp
  </button>
</a>

                    </div>

                    {/* Email */}
                    <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black">
                        ASJIDVASEEM10@GMAIL.COM
                    </p>

                    {/* Big role title */}
                    <div className="mt-16 w-full text-left pl-26 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-black/90">
                        <h3 className="leading-tight">CREATIVE DIGITAL MARKETER</h3>
                    </div>

                    {/* Bottom meta row */}
                    <div className="mt-16 flex w-full flex-col items-center justify-between gap-6 text-[0.55rem] uppercase tracking-[0.18em] text-black/60 sm:flex-row">
                        <div className="text-left max-w-xs">
                            <p>2026. All rights reserved. ASJID VASEEM.</p>
                            <p>Any reproduction, distribution, or use of the materials without permission is prohibited.</p>
                        </div>

                        <div className="text-center">
                            <span>WEBSITE DESIGN - </span>
                            <a
                                href="#"
                                className="border-b border-black/40 pb-0.5 text-black hover:border-black hover:text-black"
                            >
                                WWW.ASJIDVASEEM.COM
                            </a>
                        </div>

                        <div className="flex justify-end w-full sm:w-auto">
                            {/* <button className="rounded-full border border-black/60 px-6 py-1.5 text-[0.55rem] tracking-[0.22em] uppercase text-black/80 hover:bg-black hover:text-[#c2cab8]">
                                DEV BY SUFAIL
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact