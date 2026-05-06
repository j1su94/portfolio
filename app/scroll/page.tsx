'use client'

import { useState } from 'react'
import LoginScreen from '@/components/login/LoginScreen'
import ScrollView from '@/components/portfolio/ScrollView'

export default function ScrollPage() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />
  }

  return <ScrollView />
}
