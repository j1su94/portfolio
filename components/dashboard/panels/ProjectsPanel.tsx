import { projects } from '@/lib/content'

export default function ProjectsPanel() {
  return (
    <div className="p-8">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-1">user.projects</div>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-bg-primary border border-border rounded-lg p-5 hover:border-accent-blue transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-bold text-sm">{project.title}</h3>
              {project.isSideProject && (
                <span className="text-xs border border-purple-400 text-purple-400 px-2 py-0.5 rounded font-mono flex-shrink-0">
                  Side
                </span>
              )}
            </div>
            <div className="font-mono text-xs text-text-secondary mb-3">{project.period}</div>
            <p className="text-text-secondary text-xs mb-3">{project.description}</p>
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
                  className="bg-bg-secondary border border-border text-text-secondary text-xs px-2 py-0.5 rounded font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
