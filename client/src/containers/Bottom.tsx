import { PlaybackInfo } from "components/Playback/Info"

import { PlaybackControlButtons } from "components/Playback/ControlButtons"
import { PlaybackControlRange } from "components/Playback/ControlRange"

import { PlaybackExtraControls } from "components/Playback/ExtraControls"

interface BottomProps {
  pbToggleImg: boolean
  setPbToggleImg: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Bottom({ pbToggleImg, setPbToggleImg }: BottomProps) {
  return (
    <footer className="flex items-center px-4 min-h-[91px] bg-[#181818] border-t border-t-[#282828]">
      <PlaybackInfo pbToggleImg={pbToggleImg} setPbToggleImg={setPbToggleImg} />
      <div className="flex flex-col w-[40%] mw-[722px]">
        <PlaybackControlButtons />
        <PlaybackControlRange />
      </div>
      <PlaybackExtraControls />
    </footer>
  )
}
