import { experiences } from '@/lib/content'

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ cat career.log</div>
      <h2 className="text-2xl font-bold text-text-primary mb-8">Experience</h2>
      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border hidden md:block" />
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="md:pl-10 relative">
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-bg-secondary border-2 border-accent-blue hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-blue" />
              </div>
              <div className="bg-bg-secondary border border-border rounded-lg p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="text-text-primary font-bold">{exp.company}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
