import React from "react";

import { handlePlayPauseClick } from "handlers/handlePlayPauseClick";

import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  ShuffleIcon,
} from "assets/svg";

import "assets/css/Playback/ControlButtons.css";

interface PlaybackControlButtonsProps {
  player?: Spotify.Player;
  auth: string;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PlaybackControlButtons({
  player,
  auth,
  playing,
  setPlaying,
}: PlaybackControlButtonsProps) {
  return (
    <div className="pb-control-buttons">
      <button className="button-svg button-default pb-shuffle">
        <ShuffleIcon />
      </button>
      <button className="button-svg button-default pb-previous">
        <PreviousIcon />
      </button>
      <button
        className="button-svg pb-play-pause"
        onClick={() => handlePlayPauseClick(setPlaying, auth, player)}
      >
        {playing ? <PlayIcon /> : <PauseIcon />}
      </button>
      <button className="button-svg button-default pb-next">
        <NextIcon />
      </button>
      <button className="button-svg button-default pb-repeat">
        <RepeatIcon />
      </button>
    </div>
  );
}
