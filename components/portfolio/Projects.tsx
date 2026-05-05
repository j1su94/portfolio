import { projects } from '@/lib/content'

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ git log --oneline</div>
      <h2 className="text-2xl font-bold text-text-primary mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-bg-secondary border border-border rounded-lg p-5 hover:border-accent-blue transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-text-primary font-bold text-sm leading-snug">{project.title}</h3>
              {project.isSideProject && (
                <span className="text-xs border border-purple-400 text-purple-400 px-2 py-0.5 rounded font-mono flex-shrink-0">
                  Side
                </span>
              )}
            </div>
            <div className="font-mono text-xs text-text-secondary mb-3">{project.period}</div>
            <p className="text-text-secondary text-sm mb-4">{project.description}</p>
            <ul className="space-y-1 mb-4">
              {project.highlights.map((h, j) => (
                <li key={j} className="text-text-secondary text-xs flex gap-2">
                  <span className="text-accent-blue flex-shrink-0">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map(s => (
                <span
                  key={s}
                  className="bg-bg-primary border border-border text-text-secondary text-xs px-2 py-0.5 rounded font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
