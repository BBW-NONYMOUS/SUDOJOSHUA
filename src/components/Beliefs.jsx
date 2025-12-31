import React, { useEffect } from 'react'
import AOS from 'aos'

const beliefs = [
  {
    title: 'Lifelong Learning',
    description:
      'Technology evolves every day, so I treat every project as a chance to learn, iterate, and experiment responsibly.',
  },
  {
    title: 'User-First Thinking',
    description:
      'Design decisions start with empathy. I focus on accessibility, clarity, and purposeful interactions that help real people.',
  },
  {
    title: 'Craftsmanship',
    description:
      'Readable code, thoughtful naming, and testable architecture are the habits that turn a deliverable into maintainable software.',
  },
  {
    title: 'Collaborative Growth',
    description:
      'True progress happens when teams openly share knowledge, pair often, and celebrate everyone’s contributions.',
  },
]

export default function Beliefs() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])

  return (
    <section
      id="beliefs"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 -bottom-12 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">Beliefs</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            What Guides My Work
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Principles that keep me grounded, curious, and intentional no matter the stack or deadline.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
          {beliefs.map((belief, index) => (
            <article
              key={belief.title}
              className="group relative h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-900/40 backdrop-blur-lg transition duration-500 hover:-translate-y-1 hover:border-indigo-400/60"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-80 group-hover:from-indigo-500/10 group-hover:to-cyan-500/5" />
              <div className="relative flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.5em] text-indigo-300">
                  0{index + 1}
                </span>
                <span className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              </div>
              <h3 className="relative text-2xl font-semibold text-white mb-4">{belief.title}</h3>
              <p className="relative text-slate-300 leading-relaxed">{belief.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
