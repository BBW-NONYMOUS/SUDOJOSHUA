import React, { useEffect } from 'react'
import AOS from 'aos'

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces that balance performance, accessibility, and aesthetics.',
    items: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion / AOS'],
  },
  {
    title: 'Backend & APIs',
    description: 'Robust services with predictable contracts and smart data modelling.',
    items: ['Node.js', 'Express',  'MongoDB / MySQL'],
  }
]

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center">
        <div className="h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300 sm:tracking-[0.4em]">Skills</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">What I Bring to the Table</h2>
          </div>
          <p className="text-slate-300 max-w-xl">
            Workflow automation so teams can ship
            with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2" data-aos="fade-up">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/40 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="absolute inset-x-6 -top-4 flex justify-start">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  {group.title}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-6">{group.title}</h3>
              <p className="text-slate-300 mt-3 text-sm leading-relaxed">{group.description}</p>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center text-slate-100 text-sm">
                    <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300" />
                    {item}
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
