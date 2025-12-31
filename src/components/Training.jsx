import React, { useEffect } from 'react'
import AOS from 'aos'
import NodeCert from '../assets/achivements/nodecert.jpg'
import PythonCert from '../assets/achivements/PythonCert.jpg'
import DictCert from '../assets/achivements/DICTcert.jfif'
import MysqlCert from '../assets/achivements/mysqlcert.jfif'
import PhotoCert from '../assets/achivements/photocert.jpg'

const trainings = [
  {
    name: 'Node.js Backend Certification',
    provider: 'Sultan Kudarat State University x ICT Academy',
    focus: 'Mastered event-driven architecture, Express services, and deployment-ready REST APIs tailored to campus projects.',
    year: '2024',
    certificate: NodeCert,
    certificateLabel: 'Node.js Foundations',
  },
  {
    name: 'Python Programming Essentials',
    provider: 'DICT Digital Transformation Center',
    focus: 'Completed a government-led program on Python fundamentals, automation scripts, and problem-solving challenges.',
    year: '2024',
    certificate: PythonCert,
    certificateLabel: 'Python Programming',
  },
  {
    name: 'DICT ICT Innovation Program',
    provider: 'Department of Information and Communications Technology',
    focus: 'Immersive mentorship on innovation frameworks, digital governance, and national ICT best practices.',
    year: '2023',
    certificate: DictCert,
    certificateLabel: 'DICT Accreditation',
  },
  {
    name: 'MySQL Database Specialist',
    provider: 'Oracle + MySQL Academy',
    focus: 'Deep dive into relational modelling, stored procedures, and performance tuning for production workloads.',
    year: '2023',
    certificate: MysqlCert,
    certificateLabel: 'MySQL Masterclass',
  },
  {
    name: 'Photography & Visual Storytelling',
    provider: 'Creative Innovators PH',
    focus: 'Hands-on training in lighting, composition, and narrative building to elevate design deliverables.',
    year: '2022',
    certificate: PhotoCert,
    certificateLabel: 'Photography Summit',
  },
]

export default function Training() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true })
  }, [])

  return (
    <section
      id="training"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-300">Training</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Ongoing Upskilling</h2>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            I regularly join intensive workshops that pressure-test my skills against modern tooling and expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {trainings.map((training) => (
            <article
              key={training.name}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/40 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-transparent to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-80 group-hover:from-indigo-500/10 group-hover:to-cyan-500/5" />
              <div className="relative flex flex-col gap-4">
                {training.certificate ? (
                  <figure className="relative overflow-hidden rounded-2xl border border-white/10 shadow-inner shadow-slate-900/40">
                    <img
                      src={training.certificate}
                      alt={training.certificateLabel || `${training.name} certificate`}
                      className="h-40 w-full object-cover"
                    />
                    {training.certificateLabel ? (
                      <figcaption className="absolute bottom-2 left-3 text-xs font-semibold uppercase tracking-[0.3em] text-white drop-shadow">
                        {training.certificateLabel}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : null}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{training.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{training.year}</span>
                </div>
                <p className="text-indigo-200 text-sm">{training.provider}</p>
                <p className="text-slate-200 text-sm leading-relaxed">{training.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
