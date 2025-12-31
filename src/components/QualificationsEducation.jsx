import React, { useEffect } from 'react'
import AOS from 'aos'

const milestones = [
  {
    title: 'Bachelor of Science in Computer Science',
    org: 'Sultan Kudarat State University',
    period: '1st Year',
    details: 'College student focusing on BSCS core fundamentals and software engineering foundations.',
    badge: 'Student',
  }
]

export default function QualificationsEducation() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true })
  }, [])

  return (
    <section
      id="qualifications"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/10" />
      <div className="relative max-w-5xl mx-auto">
        <header className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">Education & Qualifications</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Foundation and Formal Training
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Academic rigor and curated certifications ensure I can bridge theory with hands-on execution.
          </p>
        </header>
        <div className="relative border-l border-white/10 pl-6" data-aos="fade-up">
          <div className="absolute left-[-2px] top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-cyan-400 to-fuchsia-400 rounded-full" />
          {milestones.map((milestone, index) => (
            <article key={milestone.title} className="mb-10 last:mb-0">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 ring-2 ring-indigo-400 text-xs font-semibold text-white">
                {index + 1}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/60 backdrop-blur">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white">{milestone.title}</h3>
                  {milestone.badge ? (
                    <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200 border border-indigo-400/40">
                      {milestone.badge}
                    </span>
                  ) : null}
                </div>
                <p className="text-indigo-300 text-sm mt-1">{milestone.org}</p>
                <p className="text-slate-400 text-xs uppercase tracking-widest mt-2">{milestone.period}</p>
                <p className="text-slate-300 mt-4 leading-relaxed">{milestone.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
