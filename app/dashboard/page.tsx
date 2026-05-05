'use client'

import { useState } from 'react'
import LoginScreen from '@/components/login/LoginScreen'
import DashboardView from '@/components/dashboard/DashboardView'

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />
  }

  return <DashboardView onLogout={() => setLoggedIn(false)} />
}
