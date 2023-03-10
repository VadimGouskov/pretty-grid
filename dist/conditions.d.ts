import { GridPoint } from "./grid-point";
export declare type Condition = (point: GridPoint, col?: number, row?: number, layer?: number) => boolean;
export declare type ConditionCreator = (...args: any[]) => Condition;
export declare const all: ConditionCreator;
export declare const even: ConditionCreator;
export declare const odd: ConditionCreator;
export declare const evenCols: ConditionCreator;
export declare const oddCols: ConditionCreator;
export declare const evenRows: ConditionCreator;
export declare const oddRows: ConditionCreator;
export declare const rows: (start: number, end: number) => Condition;
export declare const cols: (start: number, end: number) => Condition;
