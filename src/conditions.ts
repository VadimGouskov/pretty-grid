import { GridPoint } from './grid';

export type Condition = (point: GridPoint, col?: number, row?: number) => boolean;

export const all: Condition = (point, col, row) => true;

export const even: Condition = (point, col, row) => col % 2 === 0 && row % 2 === 0;

export const odd: Condition = (point, col, row) => col % 2 !== 0 && row % 2 !== 0;

export const evenCols: Condition = (point, col, row) => col % 2 === 0;

export const oddCols: Condition = (point, col, row) => col % 2 !== 0;

export const evenRows: Condition = (point, col, row) => row % 2 === 0;

export const oddRows: Condition = (point, col, row) => row % 2 !== 0;
