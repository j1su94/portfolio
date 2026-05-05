type MenuItem = {
  id: string
  label: string
  icon: string
}

const MENU_ITEMS: MenuItem[] = [
  { id: 'profile', label: 'Profile', icon: '◉' },
  { id: 'skills', label: 'Skills', icon: '⬡' },
  { id: 'career', label: 'Career', icon: '◈' },
  { id: 'projects', label: 'Projects', icon: '◇' },
  { id: 'contact', label: 'Contact', icon: '◎' },
]

type Props = {
  active: string
  onSelect: (id: string) => void
  onLogout: () => void
}

export default function Sidebar({ active, onSelect, onLogout }: Props) {
  return (
    <aside className="w-52 flex-shrink-0 bg-bg-secondary border-r border-border flex flex-col">
      <div className="p-5 border-b border-border">
        <div className="font-mono text-accent-blue text-sm font-bold">YANG.JISU</div>
        <div className="font-mono text-text-secondary text-xs mt-1">Backend Dev</div>
      </div>

      <nav className="flex-1 p-2">
        {MENU_ITEMS.map(item => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded text-sm font-mono transition-colors mb-0.5 ${
              active === item.id
                ? 'bg-bg-primary text-text-primary'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/50'
            }`}
          >
            <span className={active === item.id ? 'text-accent-blue' : 'opacity-50'}>
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-2 border-t border-border">
        <button
          onClick={onLogout}
          className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded text-sm font-mono text-accent-red hover:bg-bg-primary/50 transition-colors"
        >
          <span>⎋</span> Logout
        </button>
      </div>
    </aside>
  )
}
