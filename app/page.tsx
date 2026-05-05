'use client'

import { useState } from 'react'
import Link from 'next/link'
import LoginScreen from '@/components/login/LoginScreen'
import Navbar from '@/components/portfolio/Navbar'
import About from '@/components/portfolio/About'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import Contact from '@/components/portfolio/Contact'

type Mode = 'select' | 'scroll'

export default function Home() {
  const [mode, setMode] = useState<Mode>('select')
  const [loggedIn, setLoggedIn] = useState(false)

  if (mode === 'select') {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center font-mono p-6">
        <div className="text-text-secondary text-xs tracking-widest mb-2">YANG.JISU SYSTEM</div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">포트폴리오 버전 선택</h1>
        <p className="text-text-secondary text-sm mb-10 text-center">
          두 가지 버전으로 확인하실 수 있습니다
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
          <button
            onClick={() => setMode('scroll')}
            className="flex-1 bg-bg-secondary border border-border hover:border-accent-blue rounded-lg p-6 text-left transition-colors cursor-pointer"
          >
            <div className="text-accent-blue font-bold mb-1 text-sm">버전 B</div>
            <div className="text-text-primary text-base font-bold mb-2">스크롤 포트폴리오</div>
            <div className="text-text-secondary text-xs leading-relaxed">
              로그인 Hero → 위에서 아래로 스크롤하는 전통적 레이아웃
            </div>
          </button>
          <Link
            href="/dashboard"
            className="flex-1 bg-bg-secondary border border-border hover:border-accent-green rounded-lg p-6 text-left transition-colors"
          >
            <div className="text-accent-green font-bold mb-1 text-sm">버전 A</div>
            <div className="text-text-primary text-base font-bold mb-2">대시보드 레이아웃</div>
            <div className="text-text-secondary text-xs leading-relaxed">
              로그인 → 사이드바 + 메인 패널 구조
            </div>
          </Link>
        </div>
      </div>
    )
  }

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
