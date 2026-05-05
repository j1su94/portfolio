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
      <div className="space-y-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-bg-primary border border-border rounded-lg p-4 hover:border-accent-blue transition-colors"
          >
            <div className="flex gap-4">
              {/* 썸네일 (있을 때만) */}
              {project.images && project.images.length > 0 && (
                <button
                  onClick={() => setModal({ images: project.images!, index: 0 })}
                  className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded overflow-hidden bg-bg-secondary border border-border group cursor-zoom-in"
                  aria-label={`${project.title} 스크린샷 ${project.images.length}장 보기`}
                >
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes="96px"
                    className="object-cover object-top group-hover:scale-[1.05] transition-transform"
                  />
                  {project.images.length > 1 && (
                    <div className="absolute bottom-0 right-0 bg-bg-primary/90 text-text-primary text-[10px] font-mono px-1.5 py-0.5 rounded-tl">
                      +{project.images.length - 1}
                    </div>
                  )}
                </button>
              )}

              {/* 본문 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-sm leading-snug">{project.title}</h3>
                  {project.isSideProject && (
                    <span className="text-xs border border-purple-400 text-purple-400 px-2 py-0.5 rounded font-mono flex-shrink-0">
                      Side
                    </span>
                  )}
                </div>
                <div className="font-mono text-xs text-text-secondary mb-2">{project.period}</div>
                <p className="text-text-secondary text-xs leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.map(s => (
                    <span
                      key={s}
                      className="bg-bg-secondary border border-border text-text-secondary text-[10px] px-2 py-0.5 rounded font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-text-secondary text-xs flex gap-2">
                      <span className="text-accent-blue flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
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
