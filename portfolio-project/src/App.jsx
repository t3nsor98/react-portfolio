import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  )
}
