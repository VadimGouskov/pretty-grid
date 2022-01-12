import { GridPoint } from './grid';
export declare type Condition = (point: GridPoint, col?: number, row?: number) => boolean;
export declare const all: Condition;
export declare const even: Condition;
export declare const odd: Condition;
export declare const evenCols: Condition;
export declare const oddCols: Condition;
export declare const evenRows: Condition;
export declare const oddRows: Condition;
