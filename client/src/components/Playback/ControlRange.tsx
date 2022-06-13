import React, { useCallback, useEffect, useState } from "react"

import { Range } from "components/Range"

import { display_mm_ss } from "utils/helpers/display_mm_ss"

import { usePlayerContext } from "hooks/usePlayer"

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

  const { avgColor } = usePlayerContext()

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
    <div className="flex items-center gap-2 h-auto">
      <div className="text-[0.6875rem] text-[#ffffffb3] min-w-[40px] text-right leading-1">
        {display_mm_ss(progress_s)}
      </div>
      <Range
        value={progress_s}
        max={duration_s}
        color={avgColor}
        onChange={onChange}
        onMouseDown={onMouseDown}
        onClick={onClick}
      />
      <div className="text-[0.6875rem] text-[#ffffffb3] min-w-[40px] text-left">
        {display_mm_ss(duration_s)}
      </div>
    </div>
  )
}
