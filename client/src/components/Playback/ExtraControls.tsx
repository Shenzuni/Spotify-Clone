import { useCallback, useEffect, useState } from "react"

import { Range } from "components/Range"

import { DevicesIcon, FullscrenIcon, LyricsIcon, QueueIcon } from "assets/svg"

interface PlaybackExtraControlsProps {
  auth: string
  player?: Spotify.Player
  track: Spotify.Track
}

export function PlaybackExtraControls({
  auth,
  player,
  track,
}: PlaybackExtraControlsProps) {
  const [volume, setVolume] = useState(0)

  useEffect(() => {
    player?.getVolume().then((res) => setVolume(res * 100))
  }, [player, setVolume])

  useEffect(() => {
    player && player.setVolume(volume / 100)
  }, [volume])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setVolume(e.target.valueAsNumber)
    },
    [setVolume]
  )

  return (
    <div className="flex w-[30%] justify-end items-center">
      <button className="btn default">{LyricsIcon}</button>
      <button className="btn default">{QueueIcon}</button>
      <button className="btn default">{DevicesIcon}</button>
      <div className="flex items-center min-w-[125px]">
        <button className="btn default"></button>
        <Range value={volume} max={100} onChange={onChange} />
      </div>
      <button className="btn default ">{FullscrenIcon}</button>
    </div>
  )
}
