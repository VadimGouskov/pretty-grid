import { Condition } from "./conditions";
import { GridFunction } from "./gird.function";
import { GridPoint } from "./grid-point";
declare type Points3D = GridPoint[][][];
interface Grid3DInterface {
    getPoints: () => Points3D;
    getPoint: (col: number, row: number, layer: number) => GridPoint;
    setPoint: (col: number, row: number, layer: number, point: GridPoint) => void;
    every: (func: GridFunction, condition?: Condition) => Grid3D;
    translate: (x: number, y: number, z: number, condition?: Condition) => Grid3D;
}
declare type Grid3DOptions = {
    cols: number;
    rows: number;
    layers: number;
    width: number;
    height: number;
    depth: number;
};
export declare class Grid3D implements Grid3DInterface {
    private points;
    constructor(options: Grid3DOptions);
    getPoints(): GridPoint[][][];
    getPoint(col: number, row: number, layer: number): GridPoint;
    setPoint(col: number, row: number, layer: number, point: GridPoint): void;
    every(func: GridFunction, condition?: Condition): this;
    translate(x: number, y: number, z: number, condition?: Condition): this;
}
export declare const createGrid3D: (options: Grid3DOptions) => Grid3D;
export {};
