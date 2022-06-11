import "assets/css/Playback/ExtraControls.css";
import { ITrack } from "context/PlayerContext";

interface PlaybackExtraControlsProps {
  auth: string;
  track: ITrack;
}

export function PlaybackExtraControls({
  auth,
  track,
}: PlaybackExtraControlsProps) {
  return <div className="pb-extra"></div>;
}
