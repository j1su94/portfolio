'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/content'
import ImageModal from './ImageModal'

type ModalState = {
  images: { src: string; alt: string }[]
  index: number
} | null

export default function Projects() {
  const [modal, setModal] = useState<ModalState>(null)

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ git log --oneline</div>
      <h2 className="text-2xl font-bold text-text-primary mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-bg-secondary border border-border rounded-lg overflow-hidden hover:border-accent-blue transition-colors flex flex-col"
          >
            {project.images && project.images.length > 0 && (
              <div className={`grid ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-px bg-border`}>
                {project.images.map((img, k) => (
                  <button
                    key={k}
                    onClick={() => setModal({ images: project.images!, index: k })}
                    className="relative aspect-video bg-bg-primary overflow-hidden group cursor-zoom-in"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="p-5 flex-1 flex flex-col">
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
              <ul className="space-y-1 mb-4 flex-1">
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
    </section>
  )
}
