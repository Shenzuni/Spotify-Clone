import { useCallback, useEffect, useState } from "react"

import { useAuthContext } from "hooks/useAuth"
import { usePlayerContext } from "hooks/usePlayer"

import { PlaybackImage } from "components/Playback/Image"

import {
  handleCheckSavedTracks,
  handleSaveTracks,
  handleUnsaveTracks,
} from "handlers"

import { SavedIcon, SaveIcon } from "assets/svg"

interface PlaybackInfoProps {
  pbToggleImg: boolean
  setPbToggleImg: React.Dispatch<React.SetStateAction<boolean>>
}

export function PlaybackInfo({
  pbToggleImg,
  setPbToggleImg,
}: PlaybackInfoProps) {
  const { auth } = useAuthContext()

  //player states
  const { state } = usePlayerContext()
  const {
    track_window: { current_track: track },
  } = state

  //local states
  const [saved, setSaved] = useState(true)

  //on track change, checks if it is saved and updates page title
  useEffect(() => {
    if (track.id && auth) {
      handleCheckSavedTracks(auth, [track.id]).then((res) => setSaved(res[0]))
    }
    document.title =
      track.name +
      " • " +
      track.artists.map((artist, index) => {
        let title = index > 0 ? " " : ""
        title += artist.name
        return title
      })
  }, [track])

  //if logged and has state, toggles playback track saved state and updates locally
  const onClick = useCallback(() => {
    auth &&
      state &&
      (saved
        ? handleUnsaveTracks(auth, [track.id])
        : handleSaveTracks(auth, [track.id]))
    setSaved((prev) => !prev)
  }, [saved, setSaved])

  return (
    <div className="pb-info flex w-[30%] justify-start items-center">
      {!pbToggleImg && (
        <div className="bottom-img-outer w-14 h-14 mr-4">
          <PlaybackImage
            isToggled={pbToggleImg}
            setIsToggled={setPbToggleImg}
          />
        </div>
      )}
      <div className="pb-track-info flex flex-col -ml-0.5 overflow-hidden">
        <div className="pb-track-title flex items-center h-4 pr-5 ">
          <a
            className="text-sm leading-4 hover:cursor-pointer hover:underline"
            title={track.name}
            href={track.uri}
          >
            {track.name}
          </a>
        </div>
        <div className="pb-track-artists pr-5 text-[0.6875rem] text-[#b3b3b3]">
          {track.artists.map((artist, index) => (
            <span key={artist.uri}>
              {index > 0 && ", "}
              <a
                className="pb-track-artist hover:cursor-pointer hover:underline hover:text-white focus:text-white"
                title={artist.name}
                href={artist.uri}
              >
                {artist.name}
              </a>
            </span>
          ))}
        </div>
      </div>
      <button className="pb-track-toggle-saved btn default" onClick={onClick}>
        {saved ? SavedIcon : SaveIcon}
      </button>
    </div>
  )
}
