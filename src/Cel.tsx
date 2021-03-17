import { FC } from "react";
import styled from "styled-components";

const CelWrapper = styled.button<{ alive?: boolean }>`
  height: 15px;
  width: 15px;
  border-radius: 4px;
  background-color: ${({ alive }) => (alive ? "gray" : "lightblue")};
  &:hover {
    background-color: ${({ alive }) => (alive ? "lightgray" : "lightcyan")};
  }
`;

interface CelProps {
  alive?: boolean;
  rowIdx: number;
  colIdx: number;
  onClick: (rowIdx: number, colIdx: number) => void;
}

export const Cel: FC<CelProps> = ({ alive, rowIdx, colIdx, onClick }) => {
  return (
    <CelWrapper
      alive={alive}
      onClick={() => onClick(rowIdx, colIdx)}
    ></CelWrapper>
  );
};
