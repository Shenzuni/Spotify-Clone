import { useEffect } from "react";

import { useAuthContext } from "./useAuthContext";
import { usePlayerContext } from "./usePlayerContext";

export default function usePlayer () {

  const { auth } = useAuthContext()
  const { player, onPlayerReady, onPlayerStateChange } = usePlayerContext()

  useEffect(() => {

    if (auth && !player) {

      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: 'Spotify Clone',
          getOAuthToken: callback => callback(auth),
          volume: 0.2
        })
        
        player.addListener('ready', ({ device_id }) => {
          onPlayerReady(player, device_id)
        })
        player.on('playback_error', error => {
          //
        })
        player.addListener('player_state_changed', state => {
          state && onPlayerStateChange(state)
        })
        player.connect()
      }
    }
  }, [auth, player, onPlayerReady, onPlayerStateChange])
}