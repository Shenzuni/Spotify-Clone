export function handleNext(auth: string, player?: Spotify.Player) {
  if (auth !== "local") {
    player?.nextTrack()
  }
}
