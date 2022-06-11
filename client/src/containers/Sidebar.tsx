import "assets/css/Sidebar.css"
import { usePlayerContext } from "hooks/usePlayerContext"

interface SidebarProps {
  pbToggleImg: boolean
  setPbToggleImg: (pbImgBottom: boolean) => void
}

export default function Sidebar({ pbToggleImg, setPbToggleImg }: SidebarProps) {
  const { track } = usePlayerContext()
  return (
    <div className="sidebar">
      <div className="sb-content"></div>
      {pbToggleImg && (
        <div className="sb-pb-img">
          <img alt="track" src={track.album.images[1].url}></img>
        </div>
      )}
    </div>
  )
}
