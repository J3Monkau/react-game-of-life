import React, { FC } from "react";
import styled from "styled-components";
import { Cel } from "./Cel";
import { GameState } from "./types";

const GridWrapper = styled.div<{ height: number; width: number }>`
  display: grid;
  grid-gap: 7px;
  grid-template-rows: repeat(${({ height }) => height}, fit-content(100%));
  grid-template-columns: repeat(${({ width }) => width}, fit-content(100%));
`;

interface GridProps {
  state: GameState;
  onCelClicked: (rowIdx: number, colIdx: number) => void;
}

export const Grid: FC<GridProps> = ({ state, onCelClicked }) => {
  const height = state.length;
  const width = state[0].length;

  const renderedCels = state.map((row, rowIdx) =>
    row.map((alive, colIdx) => (
      <Cel
        key={`${rowIdx}:${colIdx}`}
        alive={alive}
        rowIdx={rowIdx}
        colIdx={colIdx}
        onClick={(r, c) => onCelClicked(r, c)}
      />
    ))
  );

  return (
    <GridWrapper height={height} width={width}>
      {renderedCels}
    </GridWrapper>
  );
};
