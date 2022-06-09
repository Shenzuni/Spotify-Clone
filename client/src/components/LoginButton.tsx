import { useState } from "react"

import handleLogin from "handlers/handleLogin"

import 'assets/css/LoginButton.css'

interface LoginButtonProps {
  setAuth: (auth: string) => void
}

export default function LoginButton({ setAuth }: LoginButtonProps) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

  return (
    <button className="login-button"
      onMouseDown={() => {
        const timeout = setTimeout(() => setAuth('caco'), 1500)
        setTimeoutId(timeout)
      }}
      onMouseUp={() => {
        clearTimeout(timeoutId)
        handleLogin(setAuth)
      }}
    >
      Login with Spotify
    </button>
  )
}