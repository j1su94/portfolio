import { profile, projects, experiences } from '@/lib/content'

const STATS = [
  { label: 'experience', value: '7년+', detail: 'Java / Spring Boot' },
  { label: 'companies', value: `${experiences.length}곳`, detail: '핀테크 · 헬스케어' },
  { label: 'projects', value: `${projects.length}개`, detail: '백엔드 · 풀스택' },
]

const HIGHLIGHTS = [
  'Spring Integration + TCP 소켓 기반 발송 처리량 2.5배 향상 (400 → 1,000건/초)',
  '레거시 PHP → Next.js + Spring Boot 풀스택 전환, GitLab CI/CD 자동화 구축',
  '메시징·헬스케어 도메인 풀스택 개발 경험',
  '앱인토스 미니앱 3종 기획·개발·출시 (사이드 프로젝트)',
]

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 md:py-24">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ whoami</div>
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">{profile.name}</h1>
      <div className="text-accent-blue font-mono text-base md:text-lg mb-6">
        {profile.title} · {profile.career}
      </div>
      <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mb-8">
        {profile.bio}
      </p>

      <div className="flex gap-3 flex-wrap mb-10">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 border border-border hover:border-accent-blue text-text-secondary hover:text-accent-blue px-4 py-2 rounded font-mono text-sm transition-colors"
        >
          <span>📧</span>
          <span>{profile.email}</span>
        </a>
        <a
          href={profile.notionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-border hover:border-accent-blue text-text-secondary hover:text-accent-blue px-4 py-2 rounded font-mono text-sm transition-colors"
        >
          <span>📝</span>
          <span>Notion 포트폴리오</span>
        </a>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {STATS.map(stat => (
          <div key={stat.label} className="bg-bg-secondary border border-border rounded-lg p-4 md:p-5">
            <div className="font-mono text-text-secondary text-[10px] uppercase tracking-widest mb-1">
              {stat.label}
            </div>
            <div className="text-accent-blue text-2xl md:text-3xl font-bold mb-1 font-mono">
              {stat.value}
            </div>
            <div className="text-text-secondary text-xs">{stat.detail}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="font-mono text-text-secondary text-xs tracking-widest mb-3">$ cat highlights.md</div>
        <div className="bg-bg-secondary border border-border rounded-lg p-5 md:p-6">
          <ul className="space-y-3">
            {HIGHLIGHTS.map((h, i) => (
              <li key={i} className="text-text-secondary text-sm md:text-base flex gap-3">
                <span className="text-accent-green flex-shrink-0 font-mono text-xs mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
