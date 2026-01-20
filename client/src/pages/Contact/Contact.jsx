// import React, { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'
// import toast from 'react-hot-toast'
// const PaperBg = '/images/Paper-bg.jpeg'

// const budgets = ['5K - 10K', '10K - 20K', 'more']

// const Contact = () => {
//     const form = useRef();
//     const [selectedBudget, setSelectedBudget] = useState(budgets[0]);
//     const [loading, setLoading] = useState(false);

//     const sendEmail = (e) => {
//         e.preventDefault();
//         setLoading(true);

//         const SERVICE_ID = 'service_o2m8wil';
//         const TEMPLATE_ID = 'template_xasembu';
//         const PUBLIC_KEY = 'zwktRyB2xpsPkR0Us';

//         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
//             .then((result) => {
//                 console.log(result.text);
//                 toast.success("Message Confirmed! We will get back to you soon.");
//                 e.target.reset();
//             }, (error) => {
//                 console.log(error.text);
//                 toast.error("Failed to send message. Please check your configuration or try again later.");
//             })
//             .finally(() => setLoading(false));
//     };

//     return (
//         <main id="contact" className="relative min-h-screen w-full overflow-hidden bg-[#c2cab8] text-black">
//             {/* Marble-ish background overlay */}
//             <div className="pointer-events-none absolute inset-0">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
//                 <div
//                     className="absolute inset-0 mix-blend-multiply opacity-[0.22] bg-cover bg-center"
//                     style={{ backgroundImage: `url(${PaperBg})` }}
//                 />
//             </div>

//             {/* Content wrapper */}
//             <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-lg flex-col items-center px-6 pb-12 pt-12">
//                 {/* Small index + label */}
//                 <div className="mb-6 text-center text-[0.6rem] uppercase tracking-[0.3em] text-black/60">
//                     <p></p>
//                     <p className="mt-3">( CONTACT FORM )</p>
//                 </div>

//                 {/* Title */}
//                 <h1 className="mb-3 text-center text-sm md:text-base tracking-[0.25em] uppercase text-black">
//                     LETS MAKE YOUR PROJECT SPECIAL
//                 </h1>
//                 <div className="mb-12 md:mb-50 h-px w-16 bg-black" />

//                 {/* Form */}
//                 <form ref={form} onSubmit={sendEmail} className="w-full space-y-3 text-[0.7rem] uppercase tracking-[0.2em] text-black/70">
//                     <input type="hidden" name="to_name" value="Asjid Vazeem" />
//                     <div>
//                         <label className="block text-[0.6rem] mb-3">YOUR NAME*</label>
//                         <input
//                             required
//                             name="from_name"
//                             type="text"
//                             className="w-full border-b border-black/60 bg-transparent pb-2 text-[0.7rem] tracking-[0.15em] outline-none focus:border-black"
//                             placeholder="Your Name"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-[0.6rem] mb-3">YOUR EMAIL*</label>
//                         <input
//                             required
//                             name="from_email"
//                             type="email"
//                             className="w-full border-b border-black/60 bg-transparent pb-2 text-[0.7rem] tracking-[0.15em] outline-none focus:border-black"
//                             placeholder="youmail@gmail.com"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-[0.6rem] mb-3">YOUR MESSAGE*</label>
//                         <textarea
//                             required
//                             name="message"
//                             rows={3}
//                             className="w-full resize-none border-b border-black/60 bg-transparent pb-2 text-[0.7rem] tracking-[0.15em] outline-none focus:border-black"
//                             placeholder="How can we help you?"
//                         />
//                     </div>

//                     <div className="pt-4">
//                         <label className="block text-[0.6rem] mb-4">YOUR BUDGET (INR)</label>
//                         <input type="hidden" name="budget" value={selectedBudget} />
//                         <div className="flex flex-wrap items-center gap-6 text-[0.65rem] tracking-[0.2em]">
//                             {budgets.map((item) => (
//                                 <button
//                                     key={item}
//                                     type="button"
//                                     onClick={() => setSelectedBudget(item)}
//                                     className={`rounded-full border px-6 py-2 transition-colors duration-150 ${selectedBudget === item
//                                         ? 'border-black bg-black text-[#c2cab8] shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
//                                         : 'border-black/40 bg-transparent text-black/80 hover:border-black hover:bg-black hover:text-[#c2cab8]'
//                                         }`}
//                                 >
//                                     {item}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="pt-6 flex justify-center">
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="rounded-full border border-black px-12 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-black hover:bg-black hover:text-[#c2cab8] transition-colors duration-150 disabled:opacity-50"
//                         >
//                             {loading ? 'Sending...' : 'Confirm'}
//                         </button>
//                     </div>
//                 </form>
//             </section>

//             {/* Identity / footer section */}
//             <section className="relative z-10 w-full border-t border-black/10 px-6 pb-16 pt-16">
//                 <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">


//                     {/* Name headline */}
//                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-[0.18em] text-black">
//                         ASJID VAZEEM
//                     </h2>

//                     {/* Social links */}
//                     <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-[0.65rem] uppercase tracking-[0.26em] text-black/75">
//                         <a
//                             href="https://www.linkedin.com/in/asjid-VAZEEM-6a956a371/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <button className="border-b border-black/40 pb-0.5">
//                                 LinkedIn
//                             </button>
//                         </a>

//                         {/* <button className="border-b border-black/40 pb-0.5">Telegram</button> */}
//                         <a
//                             href="https://wa.me/918921982338"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <button className="border-b border-black/40 pb-0.5">
//                                 WhatsApp
//                             </button>
//                         </a>

//                     </div>

//                     {/* Email */}
//                     <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black">
//                         ASJIDVAZEEM10@GMAIL.COM
//                     </p>

//                     {/* Big role title */}
//                     <div className="mt-16 w-full text-left px-4 md:pl-26 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[0.08em] text-black/90">
//                         <h3 className="leading-tight">CREATIVE DIGITAL MARKETER</h3>
//                     </div>

//                     {/* Bottom meta row */}
//                     <div className="mt-16 flex w-full flex-col items-center justify-center gap-6 text-[0.55rem] uppercase tracking-[0.18em] text-black/60">
//                         <div className="text-center">
//                             <p>2026. All rights reserved. ASJID VAZEEM.</p>
//                             <p>Any reproduction, distribution, or use of the materials without permission is prohibited.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     )
// }

// export default Contact

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const PaperBg = '/images/Paper-bg.jpeg'
const budgets = ['5K - 10K', '10K - 20K', 'more']

const Contact = () => {
    const form = useRef()

    const [selectedBudget, setSelectedBudget] = useState(budgets[0])
    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        const SERVICE_ID = 'service_o2m8wil'
        const TEMPLATE_ID = 'template_xasembu'
        const PUBLIC_KEY = 'zwktRyB2xpsPkR0Us'

        const templateParams = {
            to_name: "Asjid Vazeem",
            from_name: userName,    
            from_email: userEmail,  
            name: userName,           
            email: userEmail,         
            budget: selectedBudget,
            time: new Date().toLocaleString(),
            message: form.current.message.value,
        }

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                toast.success('Message sent successfully!')
                e.target.reset()
                setUserName('')
                setUserEmail('')
                setSelectedBudget(budgets[0])
            })
            .catch(() => {
                toast.error('Failed to send message. Try again later.')
            })
            .finally(() => setLoading(false))
    }

    return (
        <main id="contact" className="relative min-h-screen w-full overflow-hidden bg-[#c2cab8] text-black">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
                <div
                    className="absolute inset-0 mix-blend-multiply opacity-[0.22] bg-cover bg-center"
                    style={{ backgroundImage: `url(${PaperBg})` }}
                />
            </div>

            {/* Form Section */}
            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-lg flex-col items-center px-6 pb-12 pt-12">
                <h1 className="mb-8 text-center text-sm tracking-[0.25em] uppercase">
                    LET’S MAKE YOUR PROJECT SPECIAL
                </h1>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full space-y-4 text-[0.7rem] uppercase tracking-[0.2em]"
                >

                    <div>
                        <label className="block mb-2">Your Name *</label>
                        <input
                            required
                            name="from_name" // Matches Template Body {{from_name}}
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full border-b border-black/60 bg-transparent pb-2 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Your Email *</label>
                        <input
                            required
                            name="from_email"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full border-b border-black/60 bg-transparent pb-2 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Message *</label>
                        <textarea
                            required
                            name="message"
                            rows={3}
                            className="w-full resize-none border-b border-black/60 bg-transparent pb-2 outline-none"
                        />
                    </div>

                    <div className="pt-4">
                        <label className="block mb-3">Budget (INR)</label>
                        <div className="flex flex-wrap gap-4">
                            {budgets.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setSelectedBudget(item)}
                                    className={`rounded-full border px-5 py-2 transition ${selectedBudget === item
                                        ? 'bg-black text-[#c2cab8]'
                                        : 'border-black/40'
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
                            disabled={loading}
                            className="rounded-full border border-black px-10 py-2 tracking-[0.22em] transition hover:bg-black hover:text-[#c2cab8] disabled:opacity-50"
                        >
                            {loading ? 'Sending...' : 'Confirm'}
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Contact
