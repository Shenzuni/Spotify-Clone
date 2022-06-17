import { useCallback, useEffect, useState } from "react"

import { useAuthContext } from "hooks/useAuth"
import { usePlayerContext } from "hooks/usePlayer"

import { Range } from "components/Range"

import {
  DevicesIcon,
  FullscrenIcon,
  LyricsIcon,
  QueueIcon,
  VolumeFirst,
  VolumeSecond,
  VolumeThird,
  VolumeZero,
} from "assets/svg"

export function PlaybackExtraControls() {
  const { auth } = useAuthContext()

  //player states
  const { player, state } = usePlayerContext()

  //local volume is player_volume * 100. ex: player_volume === 0.2 && local_volume === 20
  const [volume, setVolume] = useState(20)
  const [unmutedVolume, setUnmutedVolume] = useState(volume)

  //sets local volume on player change (onPlayerReady)
  useEffect(() => {
    player &&
      player.getVolume().then((player_volume) => setVolume(player_volume * 100))
  }, [player, setVolume])

  //input range dragging reflects locally and on player
  const onChange = useCallback(
    (value: number) => {
      const local_volume = value
      setVolume(local_volume)
      player && player.setVolume(local_volume / 100)
    },
    [player, setVolume]
  )

  //toggle mute button
  const muteOnClick = () => {
    if (volume !== 0) {
      setUnmutedVolume(volume)
      setVolume(0)
      player && player.setVolume(0)
    } else {
      setVolume(unmutedVolume)
      player && player.setVolume(unmutedVolume)
    }
  }

  return (
    <div className="flex w-[30%] justify-end items-center">
      <button className="btn default">{LyricsIcon}</button>
      <button className="btn default">{QueueIcon}</button>
      <button className="btn default">{DevicesIcon}</button>
      <div className="flex items-center w-full max-w-[125px]">
        <button
          className="outer-webkit-range btn default"
          onClick={muteOnClick}
        >
          {volume === 0 && VolumeZero}
          {volume > 0 && volume <= 33 && VolumeFirst}
          {volume > 33 && volume <= 66 && VolumeSecond}
          {volume > 66 && volume <= 100 && VolumeThird}
        </button>
        <Range value={volume} max={100} steps={1} onChange={onChange} />
      </div>
      <button className="btn default ">{FullscrenIcon}</button>
    </div>
  )
}
