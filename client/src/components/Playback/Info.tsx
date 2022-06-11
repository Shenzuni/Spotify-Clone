import { useState } from "react"

import { SavedIcon, SaveIcon } from "assets/svg"

import "assets/css/Playback/Info.css"

interface PlaybackInfoProps {
  auth: string
  track: Spotify.Track
  pbToggleImg: boolean
  setPbToggleImg: (pbImgBottom: boolean) => void
}

export function PlaybackInfo({
  auth,
  track,
  pbToggleImg,
  setPbToggleImg,
}: PlaybackInfoProps) {
  const [saved, setSaved] = useState(true)

  const Artists = () => (
    <>
      {track.artists.map((artist, index) => (
        <span key={artist.uri}>
          {index > 0 && ", "}
          <a className="pb-track-artist" title={artist.name} href={artist.uri}>
            {artist.name}
          </a>
        </span>
      ))}
    </>
  )

  return (
    <div className="pb-info">
      {!pbToggleImg && (
        <a href={track.album.uri}>
          <img
            alt="album"
            src={track.album.images[0].url}
            title={track.album.name}
          />
        </a>
      )}
      <div className="pb-track">
        <div className="pb-track-name">
          <a title={track.name} href={track.uri}>
            {track.name}
          </a>
        </div>
        <div className="pb-track-artists">
          <Artists />
        </div>
      </div>
      {saved ? (
        <button className="button-svg button-active saved">
          <SavedIcon />
        </button>
      ) : (
        <button className="button-svg button-default save">
          <SaveIcon />
        </button>
      )}
    </div>
  )
}
