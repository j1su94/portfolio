'use client'

import { useState, useEffect } from 'react'
import LoginScreen from '@/components/login/LoginScreen'
import DashboardView from '@/components/dashboard/DashboardView'
import ScrollView from '@/components/portfolio/ScrollView'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />
  }

  if (isDesktop === null) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center font-mono text-text-secondary text-xs">
        loading...
      </div>
    )
  }

  return isDesktop ? (
    <DashboardView onLogout={() => setLoggedIn(false)} />
  ) : (
    <ScrollView />
  )
}
