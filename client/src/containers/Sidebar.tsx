import { PlaybackImage } from "components/Playback/Image"

import { useAuthContext } from "hooks/useAuth"
import { usePlayerContext } from "hooks/usePlayer"

interface SidebarProps {
  pbToggleImg: boolean
  setPbToggleImg: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({ pbToggleImg, setPbToggleImg }: SidebarProps) {
  const { auth } = useAuthContext()
  const { track } = usePlayerContext()
  return (
    <div className="split-left flex flex-col justify-between bg-[#000101] mr-0.5">
      <div></div>
      {pbToggleImg && auth && (
        <div className="w-full">
          <PlaybackImage
            isToggled={pbToggleImg}
            setIsToggled={setPbToggleImg}
            track={track}
          />
        </div>
      )}
    </div>
  )
}
