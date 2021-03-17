export interface GameSettings {
  height: number;
  width: number;
}
export type GameState = Array<Array<boolean>>;

export const DEFAULT_GRID_HEIGHT = 40;
export const DEFAULT_GRID_WIDTH = 50;

export const DEFAULT_GAME_SETTINGS: GameSettings = {
  height: DEFAULT_GRID_HEIGHT,
  width: DEFAULT_GRID_WIDTH,
};

export const generateEmptyState = ({ width, height }: GameSettings) => {
  return new Array(height).fill(false).map(() => new Array(width).fill(false));
};

export const initialState = generateEmptyState(DEFAULT_GAME_SETTINGS);

export const toggleCelState = (
  prevState: GameState,
  rowIdx: number,
  colIdx: number
) => {
  const newState = prevState.slice();
  newState[rowIdx][colIdx] = !newState[rowIdx][colIdx];

  return newState;
};

const offsets = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const livingNeighbors = (
  state: GameState,
  row: number,
  col: number
): number => {
  let numAlive = 0;

  offsets.forEach((offset) => {
    const inRowBounds = row + offset[0] >= 0 && row + offset[0] < state.length;
    const inColBounds =
      col + offset[1] >= 0 && row + offset[1] < state[0].length;

    if (inRowBounds && inColBounds) {
      if (state[row + offset[0]][col + offset[1]]) numAlive++;
    }
  });

  return numAlive;
};

export const nextGeneration = (prevState: GameState) => {
  const newState = generateEmptyState({
    width: prevState[0].length,
    height: prevState.length,
  });

  prevState.forEach((row, rIdx) => {
    row.forEach((col, cIdx) => {
      const numAlive = livingNeighbors(prevState, rIdx, cIdx);
      const celAlive = prevState[rIdx][cIdx];

      if (celAlive) {
        if (numAlive === 3 || numAlive === 2) {
          newState[rIdx][cIdx] = true;
        }
      } else {
        if (numAlive === 3) {
          newState[rIdx][cIdx] = true;
        }
      }
    });
  });

  return newState;
};
