'use client'

import { useState } from 'react'
import LoginScreen from '@/components/login/LoginScreen'
import Navbar from '@/components/portfolio/Navbar'
import About from '@/components/portfolio/About'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import Contact from '@/components/portfolio/Contact'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />
  }

  return (
    <main className="animate-fadeIn">
      <Navbar />
      <div className="pt-14">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <footer className="border-t border-border py-8 text-center font-mono text-text-secondary text-xs">
          © 2026 Yang Jisu · Built with Next.js
        </footer>
      </div>
    </main>
  )
}
