import { useEffect, useState } from 'react'

import { usePlayerContext } from 'hooks/usePlayerContext'

import { SavedIcon, SaveIcon } from 'assets/svg'

import 'assets/css/PlaybackInfo.css'

export default function PlaybackInfo() {

  const { track } = usePlayerContext()
  const [saved, setSaved] = useState(false)

  const Artists = () => <> 
    {track.artists.map((artist, index) =>
      <span key={artist.id}>
        {index > 0 && ", "}
        <a className="pb-track-artist" title={artist.name} href={artist.id}>
          {artist.name}
        </a>
      </span>
    )}
  </>

  return (
    <div className="pb-info">
      <a href={track.album.id}>
        <img alt="album" src={track.album.image64} title={track.album.name}/>
      </a>
      <div className="pb-track">
        <div className="pb-track-name">
          <a title={track.name} href={track.id}>
            {track.name}
          </a>
        </div>
        <div className="pb-track-artists">
          <Artists />
        </div>
      </div>
      <button className="button-svg"
        onClick={(e) => undefined}
      >
        {saved ? <SavedIcon /> : <SaveIcon />}
      </button>
    </div>
  )
}
