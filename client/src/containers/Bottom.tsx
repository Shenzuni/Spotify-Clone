import { PlaybackInfo } from "components/Playback/Info"

import { PlaybackControlButtons } from "components/Playback/ControlButtons"
import { PlaybackControlRange } from "components/Playback/ControlRange"

import { PlaybackExtraControls } from "components/Playback/ExtraControls"

import { useAuthContext } from "hooks/useAuthContext"
import { usePlayerContext } from "hooks/usePlayerContext"

import "assets/css/Bottom.css"

interface BottomProps {
  pbToggleImg: boolean
  setPbToggleImg: (pbImgBottom: boolean) => void
}

export default function Bottom({ pbToggleImg, setPbToggleImg }: BottomProps) {
  const { auth } = useAuthContext()
  const { player, track, progress, duration, playing, setPlaying } =
    usePlayerContext()

  return (
    <div className="bottom">
      {auth && (
        <>
          <PlaybackInfo
            auth={auth}
            track={track}
            pbToggleImg={pbToggleImg}
            setPbToggleImg={setPbToggleImg}
          />
          <div className="pb-controls">
            <PlaybackControlButtons
              auth={auth}
              player={player}
              playing={playing}
              setPlaying={setPlaying}
            />
            <PlaybackControlRange
              auth={auth}
              player={player}
              track={track}
              initialProgress={progress}
              duration={duration}
              playing={playing}
            />
          </div>
          <PlaybackExtraControls auth={auth} track={track} />
        </>
      )}
    </div>
  )
}
