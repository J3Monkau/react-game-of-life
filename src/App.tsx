import React, { useRef } from "react";
import "./App.css";
import { Grid } from "./Grid";
import { initialState, toggleCelState } from "./gol";
import useGOLPlayer from "./useGOLPlayer";

const App = () => {
  const { currentState, playing, toggleCel, togglePlaying } = useGOLPlayer(
    initialState
  );

  return (
    <main className="App">
      <Grid state={currentState} onCelClicked={toggleCel} />
      <button onClick={() => togglePlaying()}>
        {playing ? "Stop" : "Play"}
      </button>
    </main>
  );
};

export default App;
