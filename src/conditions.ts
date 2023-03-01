import { GridPoint } from './grid';

export type Condition = (point: GridPoint, col?: number, row?: number) => boolean;

export type ConditionCreator = (...args: any[]) => Condition;

export const all: ConditionCreator = (): Condition => (_, __, ___) => true;

export const even: ConditionCreator = (): Condition => (_, col, row) => col % 2 === 0 && row % 2 === 0;

export const odd: ConditionCreator = (): Condition => (_, col, row) => col % 2 !== 0 && row % 2 !== 0;

export const evenCols: ConditionCreator = (): Condition => (_, col, __) => col % 2 === 0;

export const oddCols: ConditionCreator = (): Condition => (_, col, __) => col % 2 !== 0;

export const evenRows: ConditionCreator = (): Condition => (_, __, row) => row % 2 === 0;

export const oddRows: ConditionCreator = (): Condition => (_, __, row) => row % 2 !== 0;

export const rows =
    (start: number, end: number): Condition =>
        (_, __, row) => {
            return row >= start && row <= end;
        };

export const cols =
    (start: number, end: number): Condition =>
        (_, col, __) => {
            return col >= start && col <= end;
        };
