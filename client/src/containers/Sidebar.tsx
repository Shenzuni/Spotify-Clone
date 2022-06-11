import "assets/css/Sidebar.css";
import { usePlayerContext } from "hooks/usePlayerContext";

interface SidebarProps {
  pbImgBottom: boolean;
  setPbImgBottom: (pbImgBottom: boolean) => void;
}

export default function Sidebar({ pbImgBottom, setPbImgBottom }: SidebarProps) {
  const { track } = usePlayerContext();
  return (
    <div className="sidebar">
      <div className="sb-content"></div>
      {!pbImgBottom && (
        <div className="sb-pb-img">
          <img alt="track" src={track.album.image300}></img>
        </div>
      )}
    </div>
  );
}
