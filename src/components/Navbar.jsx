import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#About' },
  { label: 'Beliefs', href: '#beliefs' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
        hasScrolled ? 'bg-slate-950/90 shadow-lg shadow-slate-950/50 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" data-aos="fade-right">
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400 sm:text-xs sm:tracking-[0.4em]">
              Portfolio
            </span>
            <span className="truncate text-sm font-semibold text-white sm:text-lg">Joshua Legada</span>
          </div>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-medium tracking-wider xl:flex 2xl:gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="group relative text-slate-200 transition hover:text-white">
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 transform bg-gradient-to-r from-indigo-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="#projects"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            Explore work
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582357361273"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5"
          >
            Add Me
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          data-aos="fade-left"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`absolute inset-x-0 top-full origin-top transform bg-slate-950/95 shadow-2xl shadow-slate-950/60 backdrop-blur-lg transition-all duration-300 xl:hidden ${
          isOpen
            ? 'pointer-events-auto visible translate-y-0 scale-y-100 opacity-100'
            : 'pointer-events-none invisible -translate-y-2 scale-y-95 opacity-0'
        }`}
      >
        <div className="max-h-[calc(100vh-72px)] space-y-3 overflow-y-auto px-4 py-5 text-center text-lg text-white sm:px-6 sm:py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="block rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  )
}
