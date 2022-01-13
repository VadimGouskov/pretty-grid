import { GridPoint } from './grid';

export type ConditionFunction = (point: GridPoint, col?: number, row?: number) => boolean;

export type Condition = (...args: any[]) => ConditionFunction;

export const all: Condition = (): ConditionFunction => (point, col, row) => true;

export const even: Condition = (): ConditionFunction => (point, col, row) => col % 2 === 0 && row % 2 === 0;

export const odd: Condition = (): ConditionFunction => (point, col, row) => col % 2 !== 0 && row % 2 !== 0;

export const evenCols: Condition = (): ConditionFunction => (point, col, row) => col % 2 === 0;

export const oddCols: Condition = (): ConditionFunction => (point, col, row) => col % 2 !== 0;

export const evenRows: Condition = (): ConditionFunction => (point, col, row) => row % 2 === 0;

export const oddRows: Condition = (): ConditionFunction => (point, col, row) => row % 2 !== 0;

export const rows =
    (start: number, end: number): ConditionFunction =>
    (point, col, row) => {
        return row >= start && row <= end;
    };

export const cols =
    (start: number, end: number): ConditionFunction =>
    (point, col, row) => {
        return col >= start && col <= end;
    };
