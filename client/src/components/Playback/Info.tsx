import { useState } from "react";

import { ITrack } from "context/PlayerContext";

import { SavedIcon, SaveIcon } from "assets/svg";

import "assets/css/Playback/Info.css";

interface PlaybackInfoProps {
  auth: string;
  track: ITrack;
}

export function PlaybackInfo({ auth, track }: PlaybackInfoProps) {
  const [saved, setSaved] = useState(true);

  const Artists = () => (
    <>
      {track.artists.map((artist, index) => (
        <span key={artist.id}>
          {index > 0 && ", "}
          <a className="pb-track-artist" title={artist.name} href={artist.id}>
            {artist.name}
          </a>
        </span>
      ))}
    </>
  );

  return (
    <div className="pb-info">
      <a href={track.album.id}>
        <img alt="album" src={track.album.image64} title={track.album.name} />
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
  );
}
