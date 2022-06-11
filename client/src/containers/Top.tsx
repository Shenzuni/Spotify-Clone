import Sidebar from "containers/Sidebar"
import MainContent from "containers/MainContent"

import Split from "react-split"

import "assets/css/Top.css"

interface TopProps {
  pbToggleImg: boolean
  setPbToggleImg: (pbToggleImg: boolean) => void
}

export default function Top({ pbToggleImg, setPbToggleImg }: TopProps) {
  return (
    <Split
      className="top"
      gutterSize={1}
      sizes={[17, 84]}
      minSize={[129, 0]}
      maxSize={[393, Infinity]}
      snapOffset={0}
    >
      <Sidebar pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
      <MainContent />
    </Split>
  )
}
