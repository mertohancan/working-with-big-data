import styled from 'styled-components';
import { CELL_SIZE } from '../../constants';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: ${CELL_SIZE * 2}px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: ${CELL_SIZE}px;
`;

export const Cell = styled.div<{ 
   isSelected?: boolean;
   width?: string,
   textAlign?: "left" | "center" | "right" }>`
  border: 1px solid black;
  width:${({ width }) => width ?? `${CELL_SIZE}px`};
  text-align: ${({ textAlign }) => textAlign || "center"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-overflow: ellipsis; 
  overflow: hidden; 
  white-space: nowrap;
  background-color:${({ isSelected }) => isSelected ? "lightGray" : "white"};
`;