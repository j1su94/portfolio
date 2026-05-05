'use client'

import { useEffect } from 'react'
import Image from 'next/image'

type Props = {
  images: { src: string; alt: string }[]
  startIndex: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export default function ImageModal({ images, startIndex, onClose, onIndexChange }: Props) {
  const current = images[startIndex]
  const hasPrev = startIndex > 0
  const hasNext = startIndex < images.length - 1

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onIndexChange(startIndex - 1)
      if (e.key === 'ArrowRight' && hasNext) onIndexChange(startIndex + 1)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [startIndex, hasPrev, hasNext, onClose, onIndexChange])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-bg-secondary border border-border text-text-primary hover:border-accent-blue transition-colors font-mono text-lg"
        aria-label="Close"
      >
        ✕
      </button>

      {/* 이전 버튼 */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onIndexChange(startIndex - 1) }}
          className="absolute left-2 sm:left-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-bg-secondary border border-border text-text-primary hover:border-accent-blue transition-colors font-mono"
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* 다음 버튼 */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onIndexChange(startIndex + 1) }}
          className="absolute right-2 sm:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-bg-secondary border border-border text-text-primary hover:border-accent-blue transition-colors font-mono"
          aria-label="Next"
        >
          ›
        </button>
      )}

      {/* 이미지 */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
      >
        <div className="relative w-full h-[75vh]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* 캡션 */}
        <div className="mt-4 text-center">
          <p className="text-text-primary text-sm font-mono">{current.alt}</p>
          {images.length > 1 && (
            <p className="text-text-secondary text-xs font-mono mt-1">
              {startIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
