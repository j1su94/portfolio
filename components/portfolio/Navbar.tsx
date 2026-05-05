'use client'

const NAV_ITEMS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-accent-blue text-sm font-bold">YANG.JISU</span>
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
      </div>
    </header>
  )
}
