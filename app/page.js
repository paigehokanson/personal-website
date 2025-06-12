'use client'

import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import AnimatedGraphBackground from '../components/AnimatedGraphBackground'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedGraphBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
} 