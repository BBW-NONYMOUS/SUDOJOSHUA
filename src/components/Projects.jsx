import React, { useEffect } from 'react'
import AOS from 'aos'
import MusicStepImage from '../assets/projects/musicstep.svg'
import TaskMateImage from '../assets/projects/taskmate-preview.jpg'
import MosqueInfoImage from '../assets/projects/mosqueinfo.svg'
import TriTrackImage from '../assets/projects/tritrack.svg'
import FarmStockImage from '../assets/projects/farmstock.svg'
import KmpdoArchiveImage from '../assets/projects/kmpdoarchive.svg'
import BoarderTrackImage from '../assets/projects/boardertrack.svg'
import ScanAttendImage from '../assets/projects/scanattend.svg'

const projects = [
  {
    title: 'MusicStep',
    type: 'Music Platform',
    status: 'Done',
    summary:
      'A live music-focused web project with a clean interface for exploring and managing music content.',
    stack: ['Web App', 'Responsive UI', 'Live Site'],
    result: 'Published online',
    url: 'https://musicstep.sitebox.tech/',
    image: MusicStepImage,
    featured: true,
  },
  {
    title: 'TaskMate',
    type: 'Mobile App',
    status: 'Done',
    summary:
      'A BornQuality mobile project for students to manage tasks, assignments, deadlines, calendars, and reviewer files.',
    stack: ['Mobile App', 'Task Management', 'Student Tool'],
    result: 'Student productivity app',
    url: '#contact',
    image: TaskMateImage,
    imageFit: 'contain',
  },
  {
    title: 'MosqueInfo',
    type: 'Community Information',
    status: 'Done',
    summary:
      'A community information system built to make mosque-related details easier to access online.',
    stack: ['Information System', 'Responsive UI', 'Live Site'],
    result: 'Public web access',
    url: 'https://mosqueinfo.sitebox.tech/',
    image: MosqueInfoImage,
  },
  {
    title: 'TriTrack',
    type: 'Tracking System',
    status: 'Done',
    summary:
      'A tracking-focused project designed to organize records, activity, and progress in one web interface.',
    stack: ['Dashboard', 'Tracking', 'Live Site'],
    result: 'Operational tracker',
    url: 'https://tritrack.sitebox.tech/',
    image: TriTrackImage,
  },
  {
    title: 'FarmStock',
    type: 'Inventory System',
    status: 'Done',
    summary:
      'An agriculture inventory project for monitoring farm stock, supplies, and resource movement.',
    stack: ['Inventory', 'Dashboard', 'Live Site'],
    result: 'Farm stock visibility',
    url: 'https://farmstock.sitebox.tech/',
    image: FarmStockImage,
  },
  {
    title: 'KMPDO Archive',
    type: 'Archive System',
    status: 'Done',
    summary:
      'A secure archive portal for organizing office records and providing structured login-based access.',
    stack: ['Archive', 'Authentication', 'Live Site'],
    result: 'Protected records portal',
    url: 'https://kmpdoarchive.sitebox.tech/login',
    image: KmpdoArchiveImage,
  },
  {
    title: 'BoarderTrack',
    type: 'Boarding Management',
    status: 'Done',
    summary:
      'A boarder management and tracking project for keeping resident information easier to monitor.',
    stack: ['Management System', 'Tracking', 'Live Site'],
    result: 'Organized boarder records',
    url: 'https://boardertrack.sitebox.tech/',
    image: BoarderTrackImage,
  },
  {
    title: 'ScanAttend',
    type: 'Attendance System',
    status: 'Done',
    summary:
      'A scan-based attendance project created to speed up attendance capture and record checking.',
    stack: ['Attendance', 'Scanning', 'Live Site'],
    result: 'Faster attendance flow',
    url: 'https://scanattend.io/',
    image: ScanAttendImage,
  },
]

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:tracking-[0.4em]">Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">All Done Projects</h2>
            <p className="mt-4 text-slate-300">
              Completed work and build concepts that show how I turn ideas into clear, usable digital experiences.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan-300 hover:text-white sm:w-fit"
          >
            Discuss a project
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" data-aos="fade-up">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-slate-950/50 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-300/50 ${
                project.featured ? 'md:col-span-2 xl:col-span-2' : ''
              }`}
            >
              <div className={`relative grid min-h-full ${project.featured ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''}`}>
                <div
                  className={`relative overflow-hidden bg-slate-950/70 ${
                    project.featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-full' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className={`h-full w-full transition duration-700 group-hover:scale-105 ${
                      project.imageFit === 'contain' ? 'bg-white object-contain' : 'object-cover'
                    }`}
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                    0{index + 1}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-100 backdrop-blur">
                    {project.status}
                  </div>
                </div>

                <div className="flex min-h-full min-w-0 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:tracking-[0.35em]">
                    {project.type}
                  </p>
                  <h3 className="mt-3 break-words text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="border-t border-white/10 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Result</p>
                      <p className="mt-2 text-sm font-semibold text-cyan-200">{project.result}</p>
                    </div>

                    <a
                      href={project.url}
                      target={project.url.startsWith('#') ? undefined : '_blank'}
                      rel={project.url.startsWith('#') ? undefined : 'noreferrer'}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5"
                    >
                      View live project
                    </a>
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
