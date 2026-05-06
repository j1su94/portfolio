export default function LoginScreenStatic() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center font-mono px-4">
      <div className="text-text-secondary text-xs tracking-[0.3em] mb-8 uppercase">
        YANG.JISU SYSTEM v1.0
      </div>

      <div className="bg-bg-secondary border border-border rounded-lg p-8 w-full max-w-sm">
        <div className="mb-5">
          <label className="text-accent-blue text-xs block mb-2 font-mono">ID</label>
          <div className="bg-bg-primary border border-accent-blue rounded px-3 py-2 text-text-primary text-sm flex items-center min-h-[36px]">
            <span>YANGJISU</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-accent-blue text-xs block mb-2 font-mono">PASSWORD</label>
          <div className="bg-bg-primary border border-border rounded px-3 py-2 text-text-secondary text-sm min-h-[36px]">
            ••••••••
          </div>
        </div>

        <div className="w-full bg-accent-green text-bg-primary font-bold py-2 rounded text-sm text-center">
          LOGIN
        </div>
      </div>

      <div className="mt-6 text-text-secondary text-xs">
        <span className="opacity-50">press </span>
        <span className="text-accent-blue">LOGIN</span>
        <span className="opacity-50"> to enter</span>
      </div>
    </div>
  )
}
