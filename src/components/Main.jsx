import React, { useEffect } from 'react'
import AOS from 'aos'
import Profile from '../assets/images/ll.jpg'
import HeroScene from './HeroScene.jsx'


export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 2,
      once: true,
    })
  }, [])

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-slate-950 px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-36"
    >
      <HeroScene />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div
        className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:min-h-[720px] lg:flex-row lg:items-center lg:gap-16"
        data-aos="fade-up"
      >
        <div className="w-full space-y-8 text-center lg:w-[54%] lg:text-left">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-300/20 bg-slate-950/55 px-4 py-2 shadow-lg shadow-cyan-500/10 backdrop-blur sm:px-5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 motion-safe:animate-pulse" />
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100 sm:text-xs sm:tracking-[0.35em]">
              Portfolio for Web, Mobile, and Client Projects
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Joshua Legada</p>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:mx-0 lg:text-6xl">
              I build polished digital products that clients can trust.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:mx-0 lg:text-xl">
              From landing pages to tracking systems and mobile app concepts, I turn real problems into clean,
              responsive, client-ready experiences.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5"
            >
              View client work
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/85 backdrop-blur transition hover:border-cyan-300 hover:text-white"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-[46%] lg:justify-end">
          <div className="relative w-full max-w-[19rem] sm:max-w-sm lg:max-w-md">
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-slate-950/50 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-slate-900">
                <img src={Profile} alt="Joshua Legada portrait" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Programmer Profile</p>
                  <h2 className="mt-2 text-2xl font-black text-white">SudoJoshua</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Focused on dependable UI, organized systems, and fast project delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
