import { useCallback, useEffect, useState } from "react"

import { useAuthContext } from "hooks/useAuth"
import { usePlayerContext } from "hooks/usePlayer"

import { SetPlaybackRepeat, SetPlaybackShuffle } from "api/endpoints"

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

export function PlaybackControlButtons() {
  const { auth } = useAuthContext()

  //player states
  const { player, state, setState } = usePlayerContext()
  const {
    track_window: { current_track: track },
  } = state

  //local states
  const [paused, setPaused] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(0)

  //player track change reflects locally
  useEffect(() => {
    if (state) {
      setShuffle(state.shuffle)
      setRepeat(state.repeat_mode)
    }
  }, [track])

  //listen for state changes and apply locally
  useEffect(() => {
    setPaused(state.paused)
  }, [state])

  //toggle shuffle
  const handleShuffle = () => {
    const nextShuffle = !shuffle
    setShuffle(nextShuffle)
    auth && SetPlaybackShuffle(auth, nextShuffle)
  }

  //if player position greater than 1.5s, seeks 0s. otherwise, goes to previous track
  const handlePrevious = useCallback(() => {
    player &&
      player.getCurrentState().then((state) => {
        state &&
          (state.position > 1500 ? player.seek(0) : player.previousTrack())
      })
  }, [player])

  //if connected, uses player method to toggle state. otherwise, locally updates the state
  const handleTogglePlay = () => {
    setPaused((prev) => !prev)
    player
      ? paused
        ? player.resume()
        : player.pause()
      : setState((prevState) => ({ ...prevState, paused: !prevState.paused }))
  }

  //goes to next track
  const handleNext = useCallback(() => {
    player && player.nextTrack()
  }, [player])

  //spotify doesn't handle this request well, it may not work as expected.
  const handleRepeat = () => {
    const nextRepeat = repeat === 0 ? 1 : repeat === 1 ? 2 : 0
    setRepeat(nextRepeat)
    auth && SetPlaybackRepeat(auth, nextRepeat)
  }

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
        {paused ? PauseIcon : PlayIcon}
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
