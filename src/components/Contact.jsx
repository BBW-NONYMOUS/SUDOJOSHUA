import React, { useEffect } from 'react'
import AOS from 'aos'

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true })
  }, [])

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        className="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-slate-950/50 backdrop-blur sm:rounded-3xl sm:p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8"
        data-aos="fade-up"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300 sm:tracking-[0.4em]">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Ready for the next build</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            I am open to school projects, portfolio collaborations, landing pages, and front-end build work.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <a
            href="mailto:Joshualegada14@gmail.com?subject=Project%20Inquiry%20from%20Portfolio"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
          >
            Send email
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582357361273"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
          >
            Message on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
