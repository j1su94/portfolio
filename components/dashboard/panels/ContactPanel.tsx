import { profile } from '@/lib/content'

export default function ContactPanel() {
  return (
    <div className="p-8">
      <div className="font-mono text-text-secondary text-xs tracking-widest mb-1">user.contact</div>
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="bg-bg-primary border border-border rounded-lg p-6 max-w-md font-mono text-sm space-y-4">
        <div className="flex gap-4">
          <span className="text-text-secondary w-16 flex-shrink-0">email</span>
          <a href={`mailto:${profile.email}`} className="text-accent-blue hover:underline break-all">
            {profile.email}
          </a>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary w-16 flex-shrink-0">phone</span>
          <span className="text-text-primary">{profile.phone}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary w-16 flex-shrink-0">notion</span>
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
  )
}
