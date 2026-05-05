'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/content'
import ImageModal from '@/components/portfolio/ImageModal'

type ModalState = {
  images: { src: string; alt: string }[]
  index: number
} | null

export default function ProjectsPanel() {
  const [modal, setModal] = useState<ModalState>(null)

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
              <div
                className={`grid gap-px bg-border ${
                  project.images.length === 1
                    ? 'grid-cols-1'
                    : project.images.length === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-3'
                }`}
              >
                {project.images.map((img, k) => (
                  <button
                    key={k}
                    onClick={() => setModal({ images: project.images!, index: k })}
                    className={`relative bg-bg-primary overflow-hidden group cursor-zoom-in ${
                      project.images!.length >= 3 ? 'aspect-[3/4]' : 'aspect-video'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform"
                    />
                  </button>
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

      {modal && (
        <ImageModal
          images={modal.images}
          startIndex={modal.index}
          onClose={() => setModal(null)}
          onIndexChange={(index) => setModal({ ...modal, index })}
        />
      )}
    </div>
  )
}
