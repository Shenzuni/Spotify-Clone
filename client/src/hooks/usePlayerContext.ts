import { useContext } from "react";
import { PlayerContext } from "context/PlayerContext";

export function usePlayerContext() {
  const context = useContext(PlayerContext);

  return context;
}
