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

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ ls skills/</div>
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Skills</h2>

      <div className="bg-bg-secondary border border-accent-blue/30 rounded-lg p-5 md:p-6 mb-6">
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
        <p className="text-text-secondary text-xs md:text-sm mt-3 leading-relaxed">
          가장 자주 사용하고 가장 자신 있는 기술 스택입니다. 설계부터 운영까지 책임 가능합니다.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {CATEGORIES.map(({ key, label, color, border, description, years }) => (
          <div key={key} className={`bg-bg-secondary border ${border} rounded-lg p-5`}>
            <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
              <h3 className={`font-mono text-base font-bold ${color}`}>{label}</h3>
              <span className="font-mono text-xs text-text-secondary border border-border px-2 py-0.5 rounded">
                {years}
              </span>
            </div>
            <p className="text-text-secondary text-xs mb-4 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-1.5">
              {skills[key].map(skill => {
                const isPrimary = (PRIMARY_STACK as readonly string[]).includes(skill)
                return (
                  <span
                    key={skill}
                    className={`text-xs px-2 py-1 rounded font-mono border ${
                      isPrimary
                        ? 'bg-bg-primary border-accent-blue/40 text-text-primary'
                        : 'bg-bg-primary border-border text-text-secondary'
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
    </section>
  )
}
