import { profile } from '@/lib/content'

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-2">$ ping contact</div>
      <h2 className="text-2xl font-bold text-text-primary mb-8">Contact</h2>
      <div className="bg-bg-secondary border border-border rounded-lg p-8 max-w-lg">
        <div className="space-y-4 font-mono text-sm">
          <div className="flex gap-4">
            <span className="text-text-secondary w-20 flex-shrink-0">Email</span>
            <a href={`mailto:${profile.email}`} className="text-accent-blue hover:underline break-all">
              {profile.email}
            </a>
          </div>
          <div className="flex gap-4">
            <span className="text-text-secondary w-20 flex-shrink-0">Phone</span>
            <span className="text-text-primary">{profile.phone}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-secondary w-20 flex-shrink-0">Notion</span>
            <a
              href={profile.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline break-all"
            >
              yangzsu.notion.site
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
