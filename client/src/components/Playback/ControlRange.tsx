import React, { useCallback, useEffect, useState } from "react"

import { Range } from "components/Range"

import { display_mm_ss } from "utils/helpers/display_mm_ss"

import "assets/css/Playback/ControlRange.css"

interface PlaybackControlRangeProps {
  auth: string
  player?: Spotify.Player
  track: Spotify.Track
  initialProgress: number
  duration: number
  playing: boolean
}

export function PlaybackControlRange({
  auth,
  player,
  track,
  initialProgress,
  duration,
  playing,
}: PlaybackControlRangeProps) {
  const [progress, setProgress] = useState(0)
  const [holdingRange, setHoldingRange] = useState(false)

  const progress_s = Math.floor(progress / 1000)
  const duration_s = Math.floor(duration / 1000)

  useEffect(() => {
    setProgress(initialProgress)
  }, [track])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timer

    if (playing && !holdingRange) {
      const ms_to_ceil = 1000 - (progress % 1000)

      timeout = setTimeout(() => {
        setProgress((prev) => prev + ms_to_ceil)

        interval = setInterval(() => {
          setProgress((prev) => prev + 1000)
        }, 1000)
      }, ms_to_ceil)
    }
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [playing, holdingRange])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProgress(e.target.valueAsNumber * 1000)
    },
    [setProgress]
  )
  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      const leftClick = e.buttons === 1
      leftClick && setHoldingRange(true)
    },
    [setHoldingRange]
  )
  const onClick = useCallback(() => {
    player?.seek(progress)
    setHoldingRange(false)
  }, [setHoldingRange, player, progress])

  return (
    <div className="pb-control-range">
      <div className="pb-elapsed">{display_mm_ss(progress_s)}</div>
      <Range
        value={progress_s}
        setValue={setProgress}
        max={duration_s}
        onChange={onChange}
        onMouseDown={onMouseDown}
        onClick={onClick}
      />
      <div className="pb-duration">{display_mm_ss(duration_s)}</div>
    </div>
  )
}
