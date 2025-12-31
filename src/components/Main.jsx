import React, { useEffect } from 'react'
import AOS from 'aos'
import Profile from '../assets/images/ll.jpg'



export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 2,
      once: true,
    })
  })
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20">
      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div
        className="relative container mx-auto flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 shadow-lg shadow-indigo-500/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Future Developer</p>
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Joshua Legada
              
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
              I’m  blending software craftsmanship and product thinking to craft
              experiences that feel intentional and alive. Every build is anchored in empathy, speed, and clarity.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5"
            >
              Let’s build together
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#skills"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              View my toolkit
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-cyan-500/20 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-900/70 backdrop-blur-xl">
              <div className="aspect-square w-64 sm:w-72 md:w-80 lg:w-96 rounded-[28px] bg-gradient-to-b from-slate-800 to-slate-900 p-2">
                <div className="relative h-full w-full rounded-[24px] bg-slate-950 overflow-hidden ">
                  <div className="absolute inset-x-8 top-6 flex justify-between text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    <span>Focus</span>
                    <span>Craft</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 blur-3xl opacity-50" />
                      <img
                        src={Profile}
                        alt="Joshua Legada portrait"
                        className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-900 shadow-[0_10px_40px_rgba(15,23,42,0.8)]"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-x-10 bottom-6 flex items-center justify-between text-xs text-slate-400">
                    <span>Code</span>
                    <span>Design</span>
                    <span>Ship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
