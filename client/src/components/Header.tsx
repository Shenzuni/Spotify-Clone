import { LoginButton } from "components/LoginButton"
import { ProfileButton } from "components/ProfileButton"
import { useAuthContext } from "hooks/useAuth"

export function Header() {
  const { auth } = useAuthContext()
  return (
    <header className="split-right bg-[rgba(0,0,0,0.2)] flex items-center justify-between w-full h-16 py-4 px-8 -ml-px box-border">
      <div></div>
      <div></div>
      {auth ? <ProfileButton /> : <LoginButton />}
    </header>
  )
}
