import useAuth from "hooks/useAuth"
import usePlayer from "hooks/usePlayer"

import Top from "containers/Top"
import Bottom from "containers/Bottom"

import 'assets/css/MainScreen.css'

export default function MainScreen() {

  useAuth()
  
  usePlayer()
  
  return (
    <div className="main-screen">
      <Top />
      <Bottom />
    </div>
  )
}
