import { useState } from "react"

import { useAuth } from "hooks/useAuth"
import { usePlayer } from "hooks/usePlayer"

import Top from "containers/Top"
import Bottom from "containers/Bottom"

export function MainScreen() {
  const [pbToggleImg, setPbToggleImg] = useState(false)

  useAuth()
  usePlayer()

  return (
    <main className="split flex flex-col h-screen w-screen">
      <Top pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
      <Bottom pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
    </main>
  )
}
