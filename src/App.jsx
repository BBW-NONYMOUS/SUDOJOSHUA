import React from 'react'
import './style/input.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Beliefs from './components/Beliefs.jsx'
import Skills from './components/Skills.jsx'
import QualificationsEducation from './components/QualificationsEducation.jsx'
import Training from './components/Training.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'





function App() {
  return (
    <div className='bg-slate-800'>
        <Navbar />
        <Main />
        <About />
        <Beliefs />
        <Skills />
        <QualificationsEducation />
        <Training />
        <Experience />
        <Projects />
        <Contact />
        <Footer/>

    </div>
  )
}

export default App
