import { skills } from '@/lib/content'

const PRIMARY_STACK = ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker', 'TypeScript', 'Next.js']

const CATEGORIES = [
  {
    key: 'backend' as const,
    label: 'Backend',
    color: 'text-accent-green',
    border: 'border-accent-green/40',
    description: '주력 영역 — Java/Spring 생태계 기반 시스템 설계 · 운영',
    years: '6년+',
  },
  {
    key: 'devops' as const,
    label: 'DevOps',
    color: 'text-accent-blue',
    border: 'border-accent-blue/40',
    description: 'CI/CD · 컨테이너 · 운영 자동화 환경 구축',
    years: '3년+',
  },
  {
    key: 'frontend' as const,
    label: 'Frontend',
    color: 'text-purple-400',
    border: 'border-purple-400/40',
    description: 'Next.js · React · TypeScript 풀스택 개발 보조',
    years: '4년+',
  },
]

export default function SkillsPanel() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-1">user.skills</div>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="bg-bg-primary border border-accent-blue/30 rounded-lg p-5 mb-8">
        <div className="font-mono text-accent-blue text-xs tracking-widest mb-3">★ PRIMARY STACK</div>
        <div className="flex flex-wrap gap-2">
          {PRIMARY_STACK.map(skill => (
            <span
              key={skill}
              className="bg-accent-blue/10 border border-accent-blue/50 text-accent-blue text-sm px-3 py-1 rounded font-mono font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-text-secondary text-xs mt-3 leading-relaxed">
          가장 자주 사용하고 가장 자신 있는 기술 스택입니다. 설계부터 운영까지 책임 가능합니다.
        </p>
      </div>

      <div className="space-y-5">
        {CATEGORIES.map(({ key, label, color, border, description, years }) => (
          <div key={key} className={`bg-bg-primary border ${border} rounded-lg p-5`}>
            <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
              <h3 className={`font-mono text-base font-bold ${color}`}>{label}</h3>
              <span className="font-mono text-xs text-text-secondary border border-border px-2 py-0.5 rounded">
                {years}
              </span>
            </div>
            <p className="text-text-secondary text-xs mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills[key].map(skill => {
                const isPrimary = (PRIMARY_STACK as readonly string[]).includes(skill)
                return (
                  <span
                    key={skill}
                    className={`text-xs px-2 py-1 rounded font-mono border ${
                      isPrimary
                        ? 'bg-bg-secondary border-accent-blue/40 text-text-primary'
                        : 'bg-bg-secondary border-border text-text-secondary'
                    }`}
                  >
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
