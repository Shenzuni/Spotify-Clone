import { useContext, useEffect } from "react"
import { useAuthContext } from "./useAuth"

import { transferPlaybackDevice } from "api/endpoints"

import { PlayerContext } from "context/PlayerContext"
export function usePlayerContext() {
  const context = useContext(PlayerContext)
  return context
}

export function usePlayer() {
  const { auth } = useAuthContext()
  const { player, device, onPlayerReady, onPlayerStateChange } =
    usePlayerContext()

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
        player.on("playback_error", (error) => {
          transferPlaybackDevice([device!], true, auth)
        })
        player.addListener("player_state_changed", (state) => {
          state.track_window.current_track.id && onPlayerStateChange(state)
        })
        player.connect()
      }
    }
  }, [auth, player, onPlayerReady, onPlayerStateChange])
}
