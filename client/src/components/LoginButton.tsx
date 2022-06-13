import { useState } from "react"

import { handleLogin } from "handlers"

interface LoginButtonProps {
  setAuth: (auth: string) => void
}

export function LoginButton({ setAuth }: LoginButtonProps) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

  return (
    <button
      className="bg-[rgba(30,215,96,0.8)] px-6 py-1.5 rounded-full hover:bg-[rgba(30,215,96,0.6)] active:scale-[0.95]"
      onMouseDown={() => {
        const timeout = setTimeout(() => setAuth("local"), 1500)
        setTimeoutId(timeout)
      }}
      onClick={() => {
        clearTimeout(timeoutId)
        handleLogin(setAuth)
      }}
      onMouseLeave={() => {
        clearTimeout(timeoutId)
      }}
    >
      Login with Spotify
    </button>
  )
}
