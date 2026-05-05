import Image from 'next/image'
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
            className="bg-bg-primary border border-border rounded-lg overflow-hidden hover:border-accent-blue transition-colors"
          >
            {project.images && project.images.length > 0 && (
              <div className={`grid ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-px bg-border`}>
                {project.images.map((img, k) => (
                  <a
                    key={k}
                    href={img.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video bg-bg-primary overflow-hidden group"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform"
                    />
                  </a>
                ))}
              </div>
            )}
            <div className="p-5">
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
          </div>
        ))}
      </div>
    </div>
  )
}
