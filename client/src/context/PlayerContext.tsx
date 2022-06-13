import { TRACK } from "utils/constants/local"
import { createContext, ReactNode, useEffect, useState } from "react"
import { useAuthContext } from "hooks/useAuth"

import {
  SetPlaybackRepeat,
  SetPlaybackShuffle,
  TransferPlaybackDevice,
} from "api/endpoints"

import FastAverageColor from "fast-average-color"

type PlayerContextType = {
  player: Spotify.Player | undefined
  device: string | undefined
  track: Spotify.Track
  avgColor?: string
  progress: number
  duration: number
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
  shuffle: boolean
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>
  repeat: number
  setRepeat: React.Dispatch<React.SetStateAction<number>>
  onPlayerReady: (player: Spotify.Player, auth: string, device: string) => void
  onPlayerStateChange: (state: Spotify.PlaybackState) => void
  onNotThisDevice: (error: Spotify.Error) => void
}

export const PlayerContext = createContext({} as PlayerContextType)

export default function PlayerProvider({ children }: { children: ReactNode }) {
  const { auth } = useAuthContext()

  const [player, setPlayer] = useState<Spotify.Player>()
  const [ready, setReady] = useState(false)
  const [device, setDevice] = useState<string>()

  const [track, setTrack] = useState<Spotify.Track>(TRACK)
  const [avgColor, setAvgColor] = useState<string>()

  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(180000)
  const [playing, setPlaying] = useState(false)

  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(0)

  useEffect(() => {
    const fac = new FastAverageColor()
    fac.getColorAsync(track.album.images[1].url).then((color) => {
      setAvgColor(color.rgba)
    })
  }, [track])

  useEffect(() => {
    playing ? player?.resume() : player?.pause()
  }, [playing])

  useEffect(() => {
    auth && ready && SetPlaybackShuffle(auth, shuffle)
  }, [shuffle])

  useEffect(() => {
    auth && ready && SetPlaybackRepeat(auth, repeat)
  }, [repeat])

  function onPlayerReady(player: Spotify.Player, auth: string, device: string) {
    setPlayer(player)
    setDevice(device)
    document.addEventListener("keypress", (e) => {
      const key = e.key
      if (key === " ") {
        player.togglePlay()
      }
    })
    player.on("playback_error", (error) => {
      console.log(error)
      TransferPlaybackDevice([device], true, auth)
    })
    player.addListener("player_state_changed", (state) => {
      console.log(state)
      state.track_window.current_track.id && onPlayerStateChange(state)
    })
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID is not ready for playback", device_id)
    })
    TransferPlaybackDevice([device], true, auth).then(() => setReady(true))
    player.getCurrentState().then((state) => {
      if (state) {
        setShuffle(state.shuffle)
        setRepeat(state.repeat_mode)
      }
      setReady(true)
    })
  }

  function onPlayerStateChange({
    position,
    duration,
    paused,
    shuffle,
    repeat_mode,
    track_window: { current_track },
  }: Spotify.PlaybackState) {
    setTrack(current_track)
    setProgress(position)
    setDuration(duration)
    setPlaying(!paused)
  }

  function onNotThisDevice(error: Spotify.Error) {
    device && auth && TransferPlaybackDevice([device], true, auth)
  }
  return (
    <PlayerContext.Provider
      value={{
        player,
        device,
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
        onPlayerReady,
        onPlayerStateChange,
        onNotThisDevice,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
