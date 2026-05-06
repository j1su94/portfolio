'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import LoginScreen from '@/components/login/LoginScreen'
import ScrollView from '@/components/portfolio/ScrollView'

function ScrollPageInner() {
  const params = useSearchParams()
  const skipLogin = params.get('direct') === '1'
  const [loggedIn, setLoggedIn] = useState(skipLogin)

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />
  }

  return <ScrollView hideNav={skipLogin} />
}

export default function ScrollPage() {
  return (
    <Suspense fallback={null}>
      <ScrollPageInner />
    </Suspense>
  )
}
