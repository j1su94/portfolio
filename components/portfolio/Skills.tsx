import { skills } from '@/lib/content'

const CATEGORIES = [
  { key: 'backend' as const, label: 'Backend', color: 'text-accent-green' },
  { key: 'devops' as const, label: 'DevOps', color: 'text-accent-blue' },
  { key: 'frontend' as const, label: 'Frontend', color: 'text-purple-400' },
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ ls skills/</div>
      <h2 className="text-2xl font-bold text-text-primary mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {CATEGORIES.map(({ key, label, color }) => (
          <div key={key} className="bg-bg-secondary border border-border rounded-lg p-5">
            <h3 className={`font-mono text-sm font-bold mb-4 ${color}`}>{label}</h3>
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
    </section>
  )
}
