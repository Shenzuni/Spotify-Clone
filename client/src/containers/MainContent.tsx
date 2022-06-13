import { usePlayerContext } from "hooks/usePlayer"
import { useAuthContext } from "hooks/useAuth"

import { Header } from "components/Header"

export default function MainContent() {
  const { auth, setAuth } = useAuthContext()
  const { avgColor } = usePlayerContext()

  return (
    <div className="split-right bg-[#121212]">
      <Header auth={auth} setAuth={setAuth} avgColor={avgColor} />
    </div>
  )
}
