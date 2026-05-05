import { experiences } from '@/lib/content'

export default function CareerPanel() {
  return (
    <div className="p-8">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-1">user.career</div>
      <h2 className="text-2xl font-bold mb-6">Career</h2>
      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-bg-primary border border-border rounded-lg p-5">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <div>
                <span className="font-bold">{exp.company}</span>
                <span className="text-text-secondary text-sm ml-2">/ {exp.team}</span>
              </div>
              <span className="font-mono text-xs text-text-secondary border border-border px-2 py-0.5 rounded">
                {exp.period}
              </span>
            </div>
            <div className="text-accent-blue text-sm font-mono mb-3">
              {exp.role} · {exp.duration}
            </div>
            <p className="text-text-secondary text-sm mb-3">{exp.description}</p>
            <ul className="space-y-1">
              {exp.highlights.map((h, j) => (
                <li key={j} className="text-text-secondary text-sm flex gap-2">
                  <span className="text-accent-green flex-shrink-0">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
