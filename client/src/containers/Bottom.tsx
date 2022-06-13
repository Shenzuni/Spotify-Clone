import { useAuthContext } from "hooks/useAuth"
import { usePlayerContext } from "hooks/usePlayer"

import { PlaybackInfo } from "components/Playback/Info"

import { PlaybackControlButtons } from "components/Playback/ControlButtons"
import { PlaybackControlRange } from "components/Playback/ControlRange"

import { PlaybackExtraControls } from "components/Playback/ExtraControls"

interface BottomProps {
  pbToggleImg: boolean
  setPbToggleImg: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Bottom({ pbToggleImg, setPbToggleImg }: BottomProps) {
  const { auth } = useAuthContext()
  const {
    player,
    track,
    avgColor,
    progress,
    duration,
    playing,
    setPlaying,
    shuffle,
    setShuffle,
    repeat,
    setRepeat,
  } = usePlayerContext()
  return (
    <div className="flex items-center px-4 min-h-[91px] bg-[#181818] border-t border-t-[#282828]">
      {auth && (
        <>
          <PlaybackInfo
            auth={auth}
            track={track}
            pbToggleImg={pbToggleImg}
            setPbToggleImg={setPbToggleImg}
          />
          <div className="flex flex-col w-[40%] mw-[722px]">
            <PlaybackControlButtons
              auth={auth}
              player={player}
              playing={playing}
              setPlaying={setPlaying}
              shuffle={shuffle}
              setShuffle={setShuffle}
              repeat={repeat}
              setRepeat={setRepeat}
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
          <PlaybackExtraControls auth={auth} player={player} track={track} />
        </>
      )}
    </div>
  )
}
