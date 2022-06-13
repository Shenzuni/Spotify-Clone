import { useState, useCallback } from "react"

import Sidebar from "containers/Sidebar"
import MainContent from "containers/MainContent"

import Split from "react-split"

interface TopProps {
  pbToggleImg: boolean
  setPbToggleImg: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Top({ pbToggleImg, setPbToggleImg }: TopProps) {
  const [sbPercentage, setSbPercentage] = useState(17)

  const onDragEnd = useCallback(
    (sizes: number[]) => {
      setSbPercentage(sizes[0])
    },
    [setSbPercentage]
  )

  return (
    <Split
      className="flex h-full w-[inherit]"
      gutterSize={0}
      sizes={[sbPercentage, 100 - sbPercentage]}
      onDragEnd={onDragEnd}
      minSize={[129, 0]}
      maxSize={[393, Infinity]}
      expandToMin={true}
      snapOffset={0}
    >
      <Sidebar pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
      <MainContent />
    </Split>
  )
}
