export function handlePlayPauseClick(
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  auth: string,
  player?: Spotify.Player
) {
  if (!player) {
    setPlaying((prev) => !prev);
  } else {
    player.togglePlay();
  }
}
