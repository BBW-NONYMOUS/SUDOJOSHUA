import React, { useEffect } from 'react'
import AOS from 'aos'

const experiences = [
  {
    role: 'Marketing Specialist',
    company: 'Lumanaire',
    period: '2025',
    highlights: [
      'Orchestrated cross-channel campaigns, blending product storytelling with data-backed iteration cycles.',
      'Partnered with engineering to translate product releases into compelling launch narratives and landing pages.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Lumanaire',
    period: '2024',
    highlights: ['Led the rebuild of the marketing site using React + Vite, cutting load time by 42%.'],
  },
]

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-[120px]" />
      <div className="relative max-w-5xl mx-auto">
        <div className="mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Hands-On Impact
          </h2>
          <p className="text-slate-300 mt-4 max-w-3xl">
            Each role sharpened a different part of my toolkit—from crafting component systems to scaling backend services.
          </p>
        </div>
        <div className="space-y-8" data-aos="fade-up">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/60 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-80 bg-gradient-to-br from-indigo-500/10 to-sky-500/5" />
              <div className="relative flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                  <p className="text-indigo-300 text-sm">{experience.company}</p>
                </div>
                <p className="text-xs uppercase tracking-widest text-slate-400">{experience.period}</p>
              </div>
              <ul className="relative mt-5 space-y-2">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex text-slate-100 text-sm leading-relaxed">
                    <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
