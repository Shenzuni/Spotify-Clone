import Sidebar from "containers/Sidebar"
import MainContent from "containers/MainContent"

import Split from "react-split"

import 'assets/css/Top.css'

export default function Top() {
  return (
    <Split className="top"
      gutterSize={1}
      sizes={[17, 84]}
      minSize={[129, 0]}
      maxSize={[393, Infinity]}
      snapOffset={0}
    >
      <Sidebar />
      <MainContent />
    </Split>
    
  )
}