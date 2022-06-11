import { PlaybackInfo } from "components/Playback/Info";

import { PlaybackControlButtons } from "components/Playback/ControlButtons";
import { PlaybackControlRange } from "components/Playback/ControlRange";

import { PlaybackExtraControls } from "components/Playback/ExtraControls";

import { useAuthContext } from "hooks/useAuthContext";
import { usePlayerContext } from "hooks/usePlayerContext";

import "assets/css/Bottom.css";

interface BottomProps {
  pbImgBottom: boolean;
  setPbImgBottom: (pbImgBottom: boolean) => void;
}

export default function Bottom({ pbImgBottom, setPbImgBottom }: BottomProps) {
  const { auth } = useAuthContext();
  const { player, track, progress, duration, playing } = usePlayerContext();

  return (
    <div className="bottom">
      {auth && (
        <>
          <PlaybackInfo auth={auth} track={track} />
          <div className="pb-controls">
            <PlaybackControlButtons auth={auth} player={player} />
            <PlaybackControlRange
              auth={auth}
              player={player}
              initialProgress={progress}
              duration={duration}
              playing={playing}
            />
          </div>
          <PlaybackExtraControls auth={auth} track={track} />
        </>
      )}
    </div>
  );
}
