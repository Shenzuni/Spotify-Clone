import { TRACK } from "utils/constants/local";

import { createContext, ReactNode, useState } from "react";
import { transferPlaybackDevice } from "api/endpoints";

type PlayerContextType = {
  player: Spotify.Player | undefined;
  device: string | undefined;
  track: Spotify.Track;
  progress: number;
  duration: number;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  onPlayerReady: (player: Spotify.Player, auth: string, device: string) => void;
  onPlayerStateChange: (state: Spotify.PlaybackState) => void;
};

export const PlayerContext = createContext({} as PlayerContextType);

export default function PlayerProvider({ children }: { children: ReactNode }) {
  const [player, setPlayer] = useState<Spotify.Player>();
  const [device, setDevice] = useState<string>();

  const [track, setTrack] = useState<Spotify.Track>(TRACK);

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(180000);
  const [playing, setPlaying] = useState(false);

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
    setTrack(current_track);
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
        setPlaying,
        onPlayerReady,
        onPlayerStateChange,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
