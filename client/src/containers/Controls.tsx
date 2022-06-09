import PlaybackControls from "components/PlaybackControls"
import PlaybackRange from "components/PlaybackRange"


export default function Controls() {
  return (
    <div className="pb-controls">
      <PlaybackControls />
      <PlaybackRange />
    </div>
  )
}