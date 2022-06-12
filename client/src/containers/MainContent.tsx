import { usePlayerContext } from "hooks/usePlayer"
import { useAuthContext } from "hooks/useAuth"

import { Header } from "components/Header"

import "assets/css/MainContent.css"

export default function MainContent() {
  const { auth, setAuth } = useAuthContext()
  const { track } = usePlayerContext()

  return (
    <div className="main-content">
      <Header auth={auth} setAuth={setAuth} track={track} />
    </div>
  )
}
