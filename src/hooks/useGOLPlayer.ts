import { useEffect, useState } from "react";
import { GameState, nextGeneration, toggleCelState } from "../domain/gol";

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
