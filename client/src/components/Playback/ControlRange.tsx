import React, { useCallback, useEffect, useState } from "react"

import { Range } from "components/Range"

import { display_mm_ss } from "utils/helpers/display_mm_ss"

import { usePlayerContext } from "hooks/usePlayer"
import { useAuthContext } from "hooks/useAuth"

export function PlaybackControlRange() {
  const { auth } = useAuthContext()

  //player states
  const { player, state } = usePlayerContext()
  const { position: player_position, duration, paused } = state

  //local states
  const [position, setPosition] = useState(0)
  const [holdingRange, setHoldingRange] = useState(false)

  //player state update reflects locally
  useEffect(() => {
    setPosition(player_position)
  }, [state])

  //update local position when playing and not holding playback input range
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timer

    if (!paused && !holdingRange) {
      const ms_to_ceil = 1000 - (position % 1000)

      timeout = setTimeout(() => {
        setPosition((prev) => prev + ms_to_ceil)
        interval = setInterval(() => {
          setPosition((prev) => prev + 1000)
        }, 1000)
      }, ms_to_ceil)
    }
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [paused, holdingRange])

  //input range dragging reflects locally
  const onChange = useCallback(
    (value: number) => {
      const local_position = value
      setPosition(local_position)
    },
    [setPosition]
  )

  //stops input range interval useEffect
  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      const leftClick = e.buttons === 1
      leftClick && setHoldingRange(true)
    },
    [setHoldingRange]
  )

  //sets input range interval useEffect && update player position
  const onClick = () => {
    setHoldingRange(false)
    player && player.seek(position)
  }

  //display
  const position_s = Math.floor(position / 1000)
  const duration_s = Math.floor(duration / 1000)

  return (
    <div className="flex items-center gap-2 h-auto">
      <div className="text-[0.6875rem] text-[#ffffffb3] min-w-[40px] text-right leading-1">
        {display_mm_ss(position_s)}
      </div>
      <Range
        value={position}
        max={duration}
        steps={200}
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
