import { useState } from "react"

import useAuth from "hooks/useAuth"
import usePlayer from "hooks/usePlayer"

import Top from "containers/Top"
import Bottom from "containers/Bottom"

import "assets/css/MainScreen.css"

export default function MainScreen() {
  useAuth()

  usePlayer()

  const [pbToggleImg, setPbToggleImg] = useState(true)

  return (
    <div className="main-screen">
      <Top pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
      <Bottom pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
    </div>
  )
}
