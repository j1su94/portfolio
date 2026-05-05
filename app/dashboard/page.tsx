'use client'

import { useState } from 'react'
import LoginScreen from '@/components/login/LoginScreen'
import Sidebar from '@/components/dashboard/Sidebar'
import ProfilePanel from '@/components/dashboard/panels/ProfilePanel'
import SkillsPanel from '@/components/dashboard/panels/SkillsPanel'
import CareerPanel from '@/components/dashboard/panels/CareerPanel'
import ProjectsPanel from '@/components/dashboard/panels/ProjectsPanel'
import ContactPanel from '@/components/dashboard/panels/ContactPanel'

type PanelId = 'profile' | 'skills' | 'career' | 'projects' | 'contact'

const PANELS: Record<PanelId, React.ComponentType> = {
  profile: ProfilePanel,
  skills: SkillsPanel,
  career: CareerPanel,
  projects: ProjectsPanel,
  contact: ContactPanel,
}

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [activePanel, setActivePanel] = useState<PanelId>('profile')

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />
  }

  const Panel = PANELS[activePanel]

  return (
    <div className="flex h-screen overflow-hidden animate-fadeIn">
      <Sidebar
        active={activePanel}
        onSelect={(id) => setActivePanel(id as PanelId)}
        onLogout={() => setLoggedIn(false)}
      />
      <main className="flex-1 overflow-y-auto">
        <Panel />
      </main>
    </div>
  )
}
