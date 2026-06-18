import React, { useEffect } from 'react'
import AOS from 'aos'
import NodeJs from '../assets/images/Nodejs.png'
import ReactJs from '../assets/images/ReactJs.png'
import Tailwind from '../assets/images/Tailwind.png'
import MongoDb from '../assets/images/MongoDb.png'
import Mysql from '../assets/images/Mysql.png'
import Html from '../assets/images/Html.png'

export default function About() {
  const cards = [
    {
      title: 'NodeJs',
      description: 'Event-driven backend services, REST APIs, and real-time collaboration layers.',
      image: NodeJs,
    },
    {
      title: 'ReactJs',
      description: 'Component systems, state orchestration, and delightful interface patterns.',
      image: ReactJs,
    },
    {
      title: 'Tailwind',
      description: 'Design tokens, rapid prototyping, and production-ready styles.',
      image: Tailwind,
    },
    {
      title: 'MongoDB',
      description: 'Schema design for flexibility and blazing-fast document queries.',
      image: MongoDb,
    },
    {
      title: 'Mysql Workbench',
      description: 'Relational modelling, SQL optimizations, and secure migrations.',
      image: Mysql,
    },
    {
      title: 'HTML',
      description: 'Semantic structure and accessibility-first markup.',
      image: Html,
    },
  ]

  const highlights = [
    'Human-centered builder who loves pairing design critique with code reviews.',
    'Obsessed with systemizing UI so teams can scale quickly and stay consistent.',
    'Comfortable leading end-to-end delivery: discovery, prototyping, build, and launch.',
  ]

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    })
  })

  return (
    <section
      id="About"
      className="relative mt-16 overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4 py-14 sm:mt-24 sm:rounded-[40px] sm:px-6 sm:py-16 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-10 left-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl space-y-14">
        <header className="text-center space-y-6">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300 sm:px-5 sm:tracking-[0.4em]">
            About Me
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Multi-disciplinary dev crafting immersive digital systems
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              I fuse backend logic, front-end aesthetics, and product intuition to build experiences that make teams more
              effective and customers more delighted.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur sm:p-5">
                <p className="text-sm text-slate-200 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" data-aos="fade-up">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-slate-900/40 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5" />
              <div className="relative flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <img src={card.image} alt={card.title} className="h-full w-full object-contain p-6" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-300">Stack</p>
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-slate-300 flex-1 leading-relaxed">{card.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs uppercase tracking-[0.4em] text-slate-400">In toolbox</span>
                    <span className="inline-flex items-center text-sm font-semibold text-indigo-300 group-hover:text-white">
                      Learn more <span className="ml-1">↗</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
