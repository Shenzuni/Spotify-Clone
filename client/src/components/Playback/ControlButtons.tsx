import React from "react"

import { handlePrevious } from "handlers/handlePrevious"
import { handlePlayPauseClick } from "handlers/handlePlayPauseClick"
import { handleNext } from "handlers/handleNext"

import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  ShuffleIcon,
} from "assets/svg"

interface PlaybackControlButtonsProps {
  player?: Spotify.Player
  auth: string
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

export function PlaybackControlButtons({
  player,
  auth,
  playing,
  setPlaying,
}: PlaybackControlButtonsProps) {
  return (
    <div className="flex justify-center gap-2 mb-2">
      <button className="btn default">
        <ShuffleIcon />
      </button>
      <button
        className="btn default"
        onClick={() => handlePrevious(auth, player)}
      >
        <PreviousIcon />
      </button>
      <button
        className="btn mx-2 rounded-full bg-white hover:scale-[1.06] active:scale-[none]"
        onClick={() => handlePlayPauseClick(setPlaying, auth, player)}
      >
        {playing ? <PlayIcon /> : <PauseIcon />}
      </button>
      <button className="btn default" onClick={() => handleNext(auth, player)}>
        <NextIcon />
      </button>
      <button className="btn default">
        <RepeatIcon />
      </button>
    </div>
  )
}
