import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

export default function ScrollView() {
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
