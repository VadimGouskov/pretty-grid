import { Condition } from "./conditions";
import { GridFunction, TransformFunction } from "./grid.function";
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
/**
 * The main Grid class containing all a two dimensional array of GridPoints and methods to manipulate the GridPoints on grid.
 * @class
 * @name Grid3D
 * @param {number} cols the amount of columns the grid needs to contain
 * @param {number} rows the amount of rows the grid needs to contain
 * @param {number} layers the amount of layers the grid needs to contain
 * @param {number} width the width of the grid
 * @param {number} height the height of the grid
 * @param {number} depth the depth of the grid
 */
export declare class Grid3D implements Grid3DInterface {
    private points;
    /**
     *
     * @param {Grid3DOptions} options
     */
    constructor(options: Grid3DOptions);
    getPoints(): GridPoint[][][];
    getPoint(col: number, row: number, layer: number): GridPoint;
    /**
     * @method
     * @name setPoint
     * @param col
     * @param row
     * @param layer
     * @param point
     *
     * @example
     * // Create and set a point on a grid
     * const grid = createGrid({cols: 3, rows: 5, layers: 8 , width 1080, height: 1080, depth: 1080});
     * const firstPoint = createPoint(-540, -540, -540);
     * grid.setPoint(0, 0, 0, firstPoint);
    */
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
     * // sphere is a pseudo function to draw spheres to a html canvas.
     * grid.every((point, col, row, layer) => {
     *      const radius = (col + row + layer + 1) * 5;
     *      sphere(point.x, point.y, point.z, radius);
     * })
     */
    every(func: GridFunction, condition?: Condition): Grid3D;
    /**
     * Transforms x, y, z values of points on the grid using the supplied transform function.
     * control which points are getting affected by supplying a condition
     *
     * @method
     * @name transform
     * @param {TransformFunction} func - a function to transform the point's x, y values. **Must return the transformed point.**
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
/**
 * @name createGrid3D
 * @param options
 * @returns {Grid3D}
 *
 * @example
 * const grid = createGrid({cols: 3, rows: 5, layers: 8 , width 1080, height: 1080, depth: 1080});
 */
export declare const createGrid3D: (options: Grid3DOptions) => Grid3D;
export {};
