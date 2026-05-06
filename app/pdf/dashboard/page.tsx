'use client'

import LoginScreenStatic from '@/components/login/LoginScreenStatic'
import Sidebar from '@/components/dashboard/Sidebar'
import ProfilePanel from '@/components/dashboard/panels/ProfilePanel'
import SkillsPanel from '@/components/dashboard/panels/SkillsPanel'
import CareerPanel from '@/components/dashboard/panels/CareerPanel'
import ProjectsPanel from '@/components/dashboard/panels/ProjectsPanel'
import ContactPanel from '@/components/dashboard/panels/ContactPanel'

const PANELS = [
  { id: 'profile', label: 'Profile', Component: ProfilePanel },
  { id: 'skills', label: 'Skills', Component: SkillsPanel },
  { id: 'career', label: 'Career', Component: CareerPanel },
  { id: 'projects', label: 'Projects', Component: ProjectsPanel },
  { id: 'contact', label: 'Contact', Component: ContactPanel },
]

export default function PdfLandscape() {
  return (
    <div className="pdf-landscape">
      <div className="pdf-cover">
        <LoginScreenStatic />
      </div>
      {PANELS.map(({ id, Component }) => (
        <div key={id} className="pdf-dashboard-page">
          <div className="flex h-screen overflow-hidden">
            <Sidebar active={id} onSelect={() => {}} onLogout={() => {}} />
            <main className="flex-1 overflow-y-auto">
              <Component />
            </main>
          </div>
        </div>
      ))}
    </div>
  )
}
