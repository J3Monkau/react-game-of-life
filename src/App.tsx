import React from "react";
import "./App.css";
import { Grid } from "./components/Grid";
import { initialState } from "./domain/gol";
import useGOLPlayer from "./hooks/useGOLPlayer";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayButton = styled.button<{ playing?: boolean }>`
  width: 60px;
  height: 60px;
  text-align: center;
  background-color: gray;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  bottom: 10%;
  &:hover {
    background-color: lightgray;
  }
`;

const Title = styled.h1`
  color: gray;
  top: 5%;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  z-index: 0;
`;

const App = () => {
  const { currentState, playing, toggleCel, togglePlaying } = useGOLPlayer(
    initialState
  );

  return (
    <main className="App">
      <Overlay>
        <Title>Conway's Game of Life</Title>
        <PlayButton onClick={togglePlaying}>
          {playing ? <FaPause /> : <FaPlay />}
        </PlayButton>
      </Overlay>
      <Grid state={currentState} onCelClicked={toggleCel} />
    </main>
  );
};

export default App;
