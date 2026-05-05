import { profile, projects, experiences } from '@/lib/content'

const STATS = [
  { label: 'experience', value: '7년+', detail: 'Java / Spring Boot' },
  { label: 'companies', value: `${experiences.length}곳`, detail: '핀테크 · 헬스케어' },
  { label: 'projects', value: `${projects.length}개`, detail: '대용량 메시징 도메인' },
]

const HIGHLIGHTS = [
  'Spring Integration + TCP 소켓 기반 발송 처리량 2.5배 향상 (400 → 1,000건/초)',
  '레거시 PHP → Next.js + Spring Boot 단독 전환, GitLab CI/CD 자동화 구축',
  '메시징·결제·헬스케어 도메인 풀스택 1인 개발 다수 경험',
  '앱인토스 미니앱 3종 기획·개발·출시 (사이드 프로젝트)',
]

const FOCUS = [
  { label: 'Domain', value: '메시징 · 결제 · 핀테크' },
  { label: 'Strength', value: '대용량 트래픽 · 시스템 설계 · 운영' },
  { label: 'Currently', value: '더즌 메시징개발팀 (2024.03~)' },
]

export default function ProfilePanel() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-1">user.profile</div>
      <h2 className="text-3xl font-bold mb-1">{profile.name}</h2>
      <div className="text-accent-blue font-mono text-sm mb-4">
        {profile.title} · {profile.career}
      </div>
      <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl">{profile.bio}</p>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {STATS.map(stat => (
          <div key={stat.label} className="bg-bg-primary border border-border rounded-lg p-4">
            <div className="font-mono text-text-secondary text-[10px] uppercase tracking-widest mb-1">
              {stat.label}
            </div>
            <div className="text-accent-blue text-2xl font-bold mb-1 font-mono">{stat.value}</div>
            <div className="text-text-secondary text-xs">{stat.detail}</div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <div className="font-mono text-text-secondary text-xs tracking-widest mb-3">$ cat highlights.md</div>
        <div className="bg-bg-primary border border-border rounded-lg p-5">
          <ul className="space-y-2">
            {HIGHLIGHTS.map((h, i) => (
              <li key={i} className="text-text-secondary text-sm flex gap-3">
                <span className="text-accent-green flex-shrink-0 font-mono text-xs mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-8">
        <div className="bg-bg-primary border border-border rounded-lg p-5">
          <div className="font-mono text-text-secondary text-xs tracking-widest mb-3">focus</div>
          <div className="space-y-2">
            {FOCUS.map(f => (
              <div key={f.label} className="text-sm">
                <div className="font-mono text-accent-blue text-xs">{f.label}</div>
                <div className="text-text-primary">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-bg-primary border border-border rounded-lg p-5">
          <div className="font-mono text-text-secondary text-xs tracking-widest mb-3">contact</div>
          <div className="font-mono text-sm space-y-2">
            <div className="flex gap-3">
              <span className="text-text-secondary w-14 flex-shrink-0">email</span>
              <a href={`mailto:${profile.email}`} className="text-accent-blue hover:underline break-all">
                {profile.email}
              </a>
            </div>
            <div className="flex gap-3">
              <span className="text-text-secondary w-14 flex-shrink-0">phone</span>
              <span className="text-text-primary">{profile.phone}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-text-secondary w-14 flex-shrink-0">notion</span>
              <a
                href={profile.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline text-xs break-all"
              >
                yangzsu.notion.site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
