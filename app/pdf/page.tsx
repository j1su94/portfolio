import LoginScreenStatic from '@/components/login/LoginScreenStatic'
import About from '@/components/portfolio/About'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import Contact from '@/components/portfolio/Contact'

export default function PdfPortrait() {
  return (
    <div className="pdf-portrait">
      <div className="pdf-cover">
        <LoginScreenStatic />
      </div>
      <main className="pdf-content">
        <div className="pdf-section"><About /></div>
        <div className="pdf-section"><Skills /></div>
        <div className="pdf-section"><Experience /></div>
        <div className="pdf-section"><Projects /></div>
        <div className="pdf-section"><Contact /></div>
      </main>
    </div>
  )
}
