import { profile } from '@/lib/content'

export default function ProfilePanel() {
  return (
    <div className="p-8">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-1">user.profile</div>
      <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
      <div className="text-accent-blue font-mono text-sm mb-4">
        {profile.title} · {profile.career}
      </div>
      <p className="text-text-secondary leading-relaxed max-w-lg mb-6">{profile.bio}</p>
      <div className="bg-bg-primary border border-border rounded-lg p-4 max-w-md font-mono text-sm space-y-2">
        <div className="flex gap-3">
          <span className="text-text-secondary w-14 flex-shrink-0">email</span>
          <a href={`mailto:${profile.email}`} className="text-accent-blue break-all">
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
            className="text-accent-blue text-xs break-all"
          >
            yangzsu.notion.site
          </a>
        </div>
      </div>
    </div>
  )
}
