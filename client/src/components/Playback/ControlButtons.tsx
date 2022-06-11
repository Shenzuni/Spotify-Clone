interface PlaybackControlButtonsProps {
  auth: string;
  player?: Spotify.Player;
}

import "assets/css/Playback/ControlButtons.css";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  ShuffleIcon,
} from "assets/svg";

export function PlaybackControlButtons({
  auth,
  player,
}: PlaybackControlButtonsProps) {
  return (
    <div className="pb-control-buttons">
      <button className="button-svg button-default pb-shuffle">
        <ShuffleIcon />
      </button>
      <button className="button-svg button-default pb-previous">
        <PreviousIcon />
      </button>
      <button className="button-svg pb-play-pause">
        <PlayIcon />
      </button>
      <button className="button-svg button-default pb-next">
        <NextIcon />
      </button>
      <button className="button-svg button-default pb-repeat">
        <RepeatIcon />
      </button>
    </div>
  );
}
