import PlaybackInfo from "components/PlaybackInfo"
import Controls from "containers/Controls";
import PlaybackExtraControls from "components/PlaybackExtraControls";

import 'assets/css/Bottom.css'

export default function Bottom() {

  return (
    <div className="bottom">
      <PlaybackInfo />
      <Controls />
      <PlaybackExtraControls />     
    </div>
  )
}
