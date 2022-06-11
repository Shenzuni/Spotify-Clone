import { TRACK } from "utils/constants/local";

import { createContext, ReactNode, useState } from "react";
import { transferPlaybackDevice } from "api/endpoints";
import { useAuthContext } from "hooks/useAuthContext";

export interface ITrack {
  id: string;
  name: string;
  artists: {
    id: string;
    name: string;
  }[];
  album: {
    id: string;
    name: string;
    image64: string;
    image300: string;
  };
}

type PlayerContextType = {
  player: Spotify.Player | undefined;
  device: string | undefined;
  track: ITrack;
  progress: number;
  duration: number;
  playing: boolean;
  onPlayerReady: (player: Spotify.Player, auth: string, device: string) => void;
  onPlayerStateChange: (state: Spotify.PlaybackState) => void;
};

export const PlayerContext = createContext({} as PlayerContextType);

export default function PlayerProvider({ children }: { children: ReactNode }) {
  const [player, setPlayer] = useState<Spotify.Player>();
  const [device, setDevice] = useState<string>();

  const [track, setTrack] = useState<ITrack>(TRACK);

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(180000);
  const [playing, setPlaying] = useState(true);

  function onPlayerReady(player: Spotify.Player, auth: string, device: string) {
    setPlayer(player);
    setDevice(device);
    transferPlaybackDevice([device], true, auth);
  }

  function onPlayerStateChange({
    position,
    duration,
    paused,
    track_window: { current_track },
  }: Spotify.PlaybackState) {
    setTrack({
      id: current_track.id || "",
      name: current_track.name,
      artists: current_track.artists.map((artists) => {
        return {
          id: artists.uri,
          name: artists.name,
        };
      }),
      album: {
        id: current_track.album.uri,
        name: current_track.album.name,
        image64: current_track.album.images[1].url,
        image300: current_track.album.images[2].url,
      },
    });
    setProgress(position);
    setDuration(duration);
    setPlaying(!paused);
  }

  return (
    <PlayerContext.Provider
      value={{
        player,
        device,
        track,
        progress,
        duration,
        playing,
        onPlayerReady,
        onPlayerStateChange,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
