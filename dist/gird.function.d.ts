import { GridPoint } from "./grid-point";
export declare type GridFunction = (point: GridPoint, col?: number, row?: number, layer?: number) => void;
export declare type TransformFunction = (point: GridPoint, col?: number, row?: number, layer?: number) => GridPoint;
