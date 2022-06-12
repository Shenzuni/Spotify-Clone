import { useEffect, useState } from "react"

import { SavedIcon, SaveIcon } from "assets/svg"

import { PlaybackImage } from "./Image"

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
  const [saved, setSaved] = useState(true)

  useEffect(() => {
    document.title =
      track.name +
      " • " +
      track.artists.map((artist, index) => {
        let title = index > 0 ? " " : ""
        title += artist.name
        return title
      })
  }, [track])

  const Artists = () => (
    <>
      {track.artists.map((artist, index) => (
        <span key={artist.uri}>
          {index > 0 && ", "}
          <a
            className="hover:cursor-pointer hover:underline hover:text-white"
            title={artist.name}
            href={artist.uri}
          >
            {artist.name}
          </a>
        </span>
      ))}
    </>
  )

  return (
    <div className="flex w-[30%] justify-start items-center">
      {!pbToggleImg && (
        <div className="w-14 h-14 mr-4">
          <PlaybackImage
            isToggled={pbToggleImg}
            setIsToggled={setPbToggleImg}
            track={track}
          />
        </div>
      )}
      <div className="-ml-0.5 overflow-hidden">
        <div className="pr-5 text-sm hover:cursor-pointer hover:underline hover:text-white">
          <a title={track.name} href={track.uri}>
            {track.name}
          </a>
        </div>
        <div className="pr-5 text-[0.6875rem] text-[#b3b3b3]">
          <Artists />
        </div>
      </div>
      {saved ? (
        <button className="btn default">
          <SavedIcon />
        </button>
      ) : (
        <button className="btn">
          <SaveIcon />
        </button>
      )}
    </div>
  )
}
