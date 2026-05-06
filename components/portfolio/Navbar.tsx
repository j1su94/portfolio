'use client'

const NAV_ITEMS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur border-b border-border no-print">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-accent-blue text-sm font-bold">YANG.JISU</span>
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex gap-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors font-mono"
              >
                {item}
              </button>
            ))}
          </nav>
          <button
            onClick={handlePrint}
            className="font-mono text-xs px-3 py-1.5 border border-border hover:border-accent-blue text-text-secondary hover:text-accent-blue rounded transition-colors"
            aria-label="PDF로 저장"
          >
            📄 PDF
          </button>
        </div>
      </div>
    </header>
  )
}
