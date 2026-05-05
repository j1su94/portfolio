'use client'

import { useState, useEffect } from 'react'

type Props = {
  onLogin: () => void
}

const ID_TEXT = 'YANGJISU'
const PASSWORD_TEXT = '••••••••'
const TYPING_SPEED = 100

export default function LoginScreen({ onLogin }: Props) {
  const [typedId, setTypedId] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < ID_TEXT.length) {
        setTypedId(ID_TEXT.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowPassword(true), 300)
      }
    }, TYPING_SPEED)
    return () => clearInterval(timer)
  }, [])

  const handleLogin = () => {
    if (isLoading) return
    setIsLoading(true)
    setTimeout(() => onLogin(), 1200)
  }

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center font-mono px-4">
      <div className="text-text-secondary text-xs tracking-[0.3em] mb-8 uppercase">
        YANG.JISU SYSTEM v1.0
      </div>

      <div className="bg-bg-secondary border border-border rounded-lg p-8 w-full max-w-sm">
        <div className="mb-5">
          <label className="text-accent-blue text-xs block mb-2 font-mono">ID</label>
          <div className="bg-bg-primary border border-accent-blue rounded px-3 py-2 text-text-primary text-sm flex items-center min-h-[36px]">
            <span>{typedId}</span>
            {typedId.length < ID_TEXT.length && (
              <span className="ml-0.5 cursor-blink text-accent-blue">|</span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-accent-blue text-xs block mb-2 font-mono">PASSWORD</label>
          <div className="bg-bg-primary border border-border rounded px-3 py-2 text-text-secondary text-sm min-h-[36px]">
            {showPassword ? PASSWORD_TEXT : ''}
          </div>
        </div>

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full bg-accent-green hover:bg-green-500 disabled:opacity-70 text-bg-primary font-bold py-2 rounded text-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? 'AUTHENTICATING...' : 'LOGIN'}
        </button>
      </div>

      <div className="mt-6 text-text-secondary text-xs">
        <span className="opacity-50">press </span>
        <span className="text-accent-blue">LOGIN</span>
        <span className="opacity-50"> to enter</span>
      </div>
    </div>
  )
}
