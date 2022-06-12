export function handlePrevious(auth: string, player?: Spotify.Player) {
  player?.getCurrentState().then((state) => {
    if (state && state.position > 1500) {
      player.seek(0)
    } else {
      player.previousTrack()
    }
  })
}
