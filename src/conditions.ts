import { GridPoint } from './grid';

export type Condition = (point: GridPoint, col?: number, row?: number) => boolean;

export type ConditionCreator = (...args: any[]) => Condition;

export const all: ConditionCreator = (): Condition => (point, col, row) => true;

export const even: ConditionCreator = (): Condition => (point, col, row) => col % 2 === 0 && row % 2 === 0;

export const odd: ConditionCreator = (): Condition => (point, col, row) => col % 2 !== 0 && row % 2 !== 0;

export const evenCols: ConditionCreator = (): Condition => (point, col, row) => col % 2 === 0;

export const oddCols: ConditionCreator = (): Condition => (point, col, row) => col % 2 !== 0;

export const evenRows: ConditionCreator = (): Condition => (point, col, row) => row % 2 === 0;

export const oddRows: ConditionCreator = (): Condition => (point, col, row) => row % 2 !== 0;

export const rows =
    (start: number, end: number): Condition =>
    (point, col, row) => {
        return row >= start && row <= end;
    };

export const cols =
    (start: number, end: number): Condition =>
    (point, col, row) => {
        return col >= start && col <= end;
    };
