import { useState } from "react"

import { useAuth } from "hooks/useAuth"
import { usePlayer } from "hooks/usePlayer"

import Top from "containers/Top"
import Bottom from "containers/Bottom"

export default function MainScreen() {
  useAuth()

  usePlayer()

  const [pbToggleImg, setPbToggleImg] = useState(true)

  return (
    <div className="flex flex-col h-screen w-screen">
      <Top pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
      <Bottom pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
    </div>
  )
}
