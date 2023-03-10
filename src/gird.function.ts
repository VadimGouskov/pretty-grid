import { GridPoint } from "./grid-point";

export type GridFunction = (point: GridPoint, col?: number, row?: number, layer?: number) => void;
