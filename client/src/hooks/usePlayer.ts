import { useContext, useEffect } from "react"

import { useAuthContext } from "./useAuth"

import { PlayerContext } from "context/PlayerContext"
import { TransferPlaybackDevice } from "api/endpoints"
export function usePlayerContext() {
  const context = useContext(PlayerContext)
  return context
}

export function usePlayer() {
  const { auth } = useAuthContext()
  const { player, device, setState, onPlayerReady } = usePlayerContext()

  useEffect(() => {
    if (auth && auth !== "local" && !player) {
      const script = document.createElement("script")
      script.src = "https://sdk.scdn.co/spotify-player.js"
      script.async = true
      document.body.appendChild(script)

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: "Spotify Clone",
          getOAuthToken: (callback) => callback(auth),
          volume: 0.2,
        })
        player.addListener("ready", ({ device_id }) => {
          onPlayerReady(player, auth, device_id)
        })
        player.addListener("not_ready", ({ device_id }) => {
          console.log("Device ID is not ready for playback", device_id)
        })
        player.on("playback_error", (error) => {
          console.log(error)
        })
        player.addListener("player_state_changed", (state) => {
          console.log(state)
          state.track_window.current_track.id && setState(state)
        })
        player.connect()
      }
    }
  }, [auth, device, player, setState, onPlayerReady])
}
