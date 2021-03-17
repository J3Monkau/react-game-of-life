import { useEffect, useState } from "react";
import { nextGeneration, toggleCelState } from "./gol";
import { GameState } from "./types";

const useGOLPlayer = (initialState: GameState) => {
  const [currentState, setCurrentState] = useState(initialState);
  const [updateInterval] = useState(10);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const timeout = playing
      ? setTimeout(
          () => setCurrentState(nextGeneration(currentState)),
          updateInterval
        )
      : null;
    return () => clearTimeout(timeout!);
  }, [currentState, playing, updateInterval]);

  const toggleCel = (r: number, c: number) => {
    setCurrentState(toggleCelState(currentState, r, c));
  };

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  return { currentState, toggleCel, playing, togglePlaying };
};

export default useGOLPlayer;
