import { profile } from '@/lib/content'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ whoami</div>
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">{profile.name}</h1>
      <div className="text-accent-blue font-mono text-base md:text-lg mb-6">
        {profile.title} · {profile.career}
      </div>
      <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mb-8">
        {profile.bio}
      </p>
      <div className="flex gap-3 flex-wrap">
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
    </section>
  )
}
