import { Condition } from "./conditions";
import { GridFunction, TransformFunction } from "./gird.function";
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
    /**
     * Loops over the points in the grid, passing each point to the provided func parameter
     * @method
     * @name every
     * @param {GridFunction} func - a function to access each point and row/col indices
     * @param {Condition} condition - an optional condition for which points to execute func over
     * @returns { Grid3D } returns @this Grid3D Object. Used for chaining Grid methods
     *
     * @example
     * // draw a spheres on the grid where the size depends on the position on the grid
     * // translate sphere are pseudo functions to translate the canvas and draw a spheres to it.
     * grid.every((point, col, row, layer) => {
     *      translate(point.x, point.y, point.z);
     *      const radius = (col + row + layer + 1) * 5;
     *      sphere(radius);
     * })
     */
    every(func: GridFunction, condition?: Condition): Grid3D;
    /**
     * Transforms x, y, z values of points on the grid using the supplied transform function.
     * control which points are getting affected by supplying a condition
     *
     * @method
     * @name transform
     * @param {TransformFunction} func - a function to transform the point's x, y values. **Must return the transformed point.** ```teste```
     * @param {Condition} condition - an optional condition for which points to be affected
     * @returns { Grid3D } returns @this Grid3D Object. Used for chaining Grid methods
     *
     * @example
     * // Translates the grid on the y-axis by 10 and on the z-axis by 5
     * grid.transform((point) => {
     *      point.y += 10;
     *      point.z += 5;
     *      return point; // Make sure to return the transformed point
     * })
     *
     */
    transform(func: TransformFunction, condition?: Condition): Grid3D;
    translate(x: number, y: number, z: number, condition?: Condition): this;
}
export declare const createGrid3D: (options: Grid3DOptions) => Grid3D;
export {};
