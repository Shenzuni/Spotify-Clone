import { useEffect, useState } from "react";

import { Range } from "components/Range";

import { display_mm_ss } from "utils/helpers/display_mm_ss";

import "assets/css/Playback/ControlRange.css";

interface PlaybackControlRangeProps {
  auth: string;
  player?: Spotify.Player;
  initialProgress: number;
  duration: number;
  playing: boolean;
}

export function PlaybackControlRange({
  auth,
  player,
  initialProgress,
  duration,
  playing,
}: PlaybackControlRangeProps) {
  const [progress, setProgress] = useState(0);

  const progressSeconds = Math.floor(progress / 1000);
  const durationSeconds = Math.floor(duration / 1000);

  useEffect(() => {
    setProgress(initialProgress);
  }, [initialProgress]);

  return (
    <div className="pb-control-range">
      <div className="pb-elapsed">{display_mm_ss(progress)}</div>
      <Range max={durationSeconds} initialValue={progressSeconds} />
      <div className="pb-duration">{display_mm_ss(duration)}</div>
    </div>
  );
}
