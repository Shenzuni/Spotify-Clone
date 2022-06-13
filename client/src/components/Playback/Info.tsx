import { useEffect, useState } from "react"

import { SavedIcon, SaveIcon } from "assets/svg"

import { PlaybackImage } from "components/Playback/Image"

import { handleCheckSaved } from "handlers"

interface PlaybackInfoProps {
  auth: string
  track: Spotify.Track
  pbToggleImg: boolean
  setPbToggleImg: React.Dispatch<React.SetStateAction<boolean>>
}

export function PlaybackInfo({
  auth,
  track,
  pbToggleImg,
  setPbToggleImg,
}: PlaybackInfoProps) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (track.id && auth) {
    }
  }, [saved])

  useEffect(() => {
    if (track.id && auth) {
      handleCheckSaved(auth, [track.id]).then((res) => setSaved(res[0]))
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

  const Artists = track.artists.map((artist, index) => (
    <span key={artist.uri}>
      {index > 0 && ", "}
      <a
        className="pb-track-artist hover:cursor-pointer hover:underline hover:text-white"
        title={artist.name}
        href={artist.uri}
      >
        {artist.name}
      </a>
    </span>
  ))

  return (
    <div className="pb-info flex w-[30%] justify-start items-center">
      {!pbToggleImg && (
        <div className="bottom-img-outer w-14 h-14 mr-4">
          <PlaybackImage
            isToggled={pbToggleImg}
            setIsToggled={setPbToggleImg}
            track={track}
          />
        </div>
      )}
      <div className="pb-track-info -ml-0.5 overflow-hidden">
        <div className="pb-track-title pr-5 text-sm hover:cursor-pointer hover:underline hover:text-white">
          <a title={track.name} href={track.uri}>
            {track.name}
          </a>
        </div>
        <div className="pb-track-artists pr-5 text-[0.6875rem] text-[#b3b3b3]">
          {Artists}
        </div>
      </div>
      <button
        className="pb-track-toggle-saved btn default"
        onClick={() => {
          setSaved((prev) => !prev)
        }}
      >
        {saved ? SavedIcon : SaveIcon}
      </button>
    </div>
  )
}
