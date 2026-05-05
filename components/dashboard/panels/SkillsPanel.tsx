import { skills } from '@/lib/content'

const CATEGORIES = [
  { key: 'backend' as const, label: 'Backend', color: 'text-accent-green' },
  { key: 'devops' as const, label: 'DevOps', color: 'text-accent-blue' },
  { key: 'frontend' as const, label: 'Frontend', color: 'text-purple-400' },
]

export default function SkillsPanel() {
  return (
    <div className="p-8">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-1">user.skills</div>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="space-y-6">
        {CATEGORIES.map(({ key, label, color }) => (
          <div key={key}>
            <h3 className={`font-mono text-sm font-bold mb-3 ${color}`}>{label}</h3>
            <div className="flex flex-wrap gap-2">
              {skills[key].map(skill => (
                <span
                  key={skill}
                  className="bg-bg-primary border border-border text-text-secondary text-xs px-2 py-1 rounded font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
