import { STATE } from "utils/constants/local_state"
import { createContext, ReactNode, useEffect, useState } from "react"
import { useAuthContext } from "hooks/useAuth"

import { TransferPlaybackDevice } from "api/endpoints"

type PlayerContextType = {
  player: Spotify.Player | undefined
  device: string | undefined
  state: Spotify.PlaybackState
  setState: React.Dispatch<React.SetStateAction<Spotify.PlaybackState>>
  onPlayerReady: (player: Spotify.Player, auth: string, device: string) => void
}

export const PlayerContext = createContext({} as PlayerContextType)

export default function PlayerProvider({ children }: { children: ReactNode }) {
  const { auth } = useAuthContext()

  const [player, setPlayer] = useState<Spotify.Player>()
  const [device, setDevice] = useState<string>()
  const [state, setState] = useState<Spotify.PlaybackState>(STATE)

  const onPlayerReady = (
    player: Spotify.Player,
    auth: string,
    device: string
  ) => {
    setPlayer(player)
    setDevice(device)
    document.addEventListener("keypress", (e) => {
      const key = e.key
      if (key === " ") {
        player.togglePlay()
      }
    })
    setTimeout(() => TransferPlaybackDevice([device], true, auth), 2000)
  }
  return (
    <PlayerContext.Provider
      value={{
        player,
        device,
        state,
        setState,
        onPlayerReady,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
