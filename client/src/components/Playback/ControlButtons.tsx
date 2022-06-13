import React, { useCallback } from "react"

import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
  RepeatedIcon,
  RepeatedOneIcon,
  RepeatIcon,
  ShuffledIcon,
  ShuffleIcon,
} from "assets/svg"

interface PlaybackControlButtonsProps {
  player?: Spotify.Player
  auth: string
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
  shuffle: boolean
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>
  repeat: number
  setRepeat: React.Dispatch<React.SetStateAction<number>>
}

export function PlaybackControlButtons({
  player,
  auth,
  playing,
  setPlaying,
  shuffle,
  setShuffle,
  repeat,
  setRepeat,
}: PlaybackControlButtonsProps) {
  const handleShuffle = useCallback(() => {
    setShuffle((prev) => !prev)
  }, [setShuffle])

  const handlePrevious = useCallback(() => {
    player?.getCurrentState().then((state) => {
      if (state && state.position > 1500) {
        player.seek(0)
      } else {
        player.previousTrack()
      }
    })
  }, [player])

  const handleTogglePlay = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [setPlaying])

  const handleNext = useCallback(() => {
    if (auth !== "local") {
      player?.nextTrack()
    }
  }, [player])
  const handleRepeat = useCallback(() => {
    setRepeat((prev) => (prev < 2 ? prev + 1 : 0))
  }, [setRepeat])
  return (
    <div className="pb-control-buttons flex justify-center gap-2 mb-2">
      <button className="pb-shuffle btn default" onClick={handleShuffle}>
        {shuffle ? ShuffledIcon : ShuffleIcon}
      </button>
      <button className="pb-previous btn default" onClick={handlePrevious}>
        {PreviousIcon}
      </button>
      <button
        className="pb-toggle-play btn mx-2 rounded-full bg-white hover:scale-[1.06] active:scale-[none]"
        onClick={handleTogglePlay}
      >
        {playing ? PlayIcon : PauseIcon}
      </button>
      <button className="pb-next btn default" onClick={handleNext}>
        {NextIcon}
      </button>
      <button className="pb-repeat btn default" onClick={handleRepeat}>
        {repeat === 0 && RepeatIcon}
        {repeat === 1 && RepeatedIcon}
        {repeat === 2 && RepeatedOneIcon}
      </button>
    </div>
  )
}
