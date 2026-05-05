import { profile } from '@/lib/content'

const AVAILABLE_FOR = [
  { label: '정규직 채용 제안', enabled: true },
  { label: '기술 미팅 / 커피챗', enabled: true },
  { label: '사이드 프로젝트 협업', enabled: true },
  { label: '단발성 외주', enabled: false },
]

const PREFERRED_TOPICS = [
  '대용량 트래픽 처리 · 시스템 성능 최적화',
  'Spring 생태계 기반 백엔드 설계',
  '레거시 시스템 현대화 · 풀스택 전환',
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ ping contact</div>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Contact</h2>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <a
          href={`mailto:${profile.email}`}
          className="bg-bg-secondary border border-border hover:border-accent-blue rounded-lg p-5 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xl">📧</span>
            <span className="font-mono text-accent-blue text-xs tracking-widest">EMAIL</span>
          </div>
          <div className="font-mono text-sm text-text-primary group-hover:text-accent-blue break-all transition-colors">
            {profile.email}
          </div>
        </a>

        <a
          href={`tel:${profile.phone.replace(/-/g, '')}`}
          className="bg-bg-secondary border border-border hover:border-accent-green rounded-lg p-5 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xl">📞</span>
            <span className="font-mono text-accent-green text-xs tracking-widest">PHONE</span>
          </div>
          <div className="font-mono text-sm text-text-primary group-hover:text-accent-green transition-colors">
            {profile.phone}
          </div>
        </a>

        <a
          href={profile.notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bg-secondary border border-border hover:border-purple-400 rounded-lg p-5 transition-colors group md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xl">📝</span>
            <span className="font-mono text-purple-400 text-xs tracking-widest">NOTION</span>
          </div>
          <div className="font-mono text-sm text-text-primary group-hover:text-purple-400 break-all transition-colors">
            yangzsu.notion.site
          </div>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-bg-secondary border border-border rounded-lg p-5">
          <div className="font-mono text-text-secondary text-xs tracking-widest mb-3">available for</div>
          <ul className="space-y-2">
            {AVAILABLE_FOR.map(item => (
              <li
                key={item.label}
                className={`text-sm flex items-center gap-2 ${
                  item.enabled ? 'text-text-primary' : 'text-text-secondary line-through'
                }`}
              >
                <span className={item.enabled ? 'text-accent-green' : 'text-text-secondary'}>
                  {item.enabled ? '✓' : '✗'}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-bg-secondary border border-border rounded-lg p-5">
          <div className="font-mono text-text-secondary text-xs tracking-widest mb-3">관심 주제</div>
          <ul className="space-y-2">
            {PREFERRED_TOPICS.map(topic => (
              <li key={topic} className="text-sm text-text-primary flex gap-2">
                <span className="text-accent-blue">▸</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
