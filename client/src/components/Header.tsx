import { LoginButton } from "components/LoginButton"
import { ProfileButton } from "components/ProfileButton"

interface HeaderProps {
  auth?: string
  setAuth: React.Dispatch<React.SetStateAction<string | undefined>>
  avgColor?: string
}

export function Header({ auth, setAuth, avgColor }: HeaderProps) {
  return (
    <header
      className="split-right gradient-theme -ml-px flex items-center justify-between h-16 py-4 px-8 box-border"
      style={{ backgroundColor: auth && avgColor }}
    >
      <div></div>
      <div></div>
      {auth ? <ProfileButton auth={auth} /> : <LoginButton setAuth={setAuth} />}
    </header>
  )
}
