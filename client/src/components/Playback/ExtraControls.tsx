import "assets/css/Playback/ExtraControls.css"

interface PlaybackExtraControlsProps {
  auth: string
  track: Spotify.Track
}

export function PlaybackExtraControls({
  auth,
  track,
}: PlaybackExtraControlsProps) {
  return <div className="pb-extra"></div>
}
