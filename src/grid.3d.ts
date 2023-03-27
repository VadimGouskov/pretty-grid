import { Condition } from "./conditions";
import { GridFunction, TransformFunction } from "./grid.function";
import { Grid } from "./grid";
import { initRectangleGrid } from "./grid-init";
import { createPoint, GridPoint } from "./grid-point";

type Points3D = GridPoint[][][];

interface Grid3DInterface {
    getPoints: () => Points3D;
    getPoint: (col: number, row: number, layer: number) => GridPoint;
    setPoint: (col: number, row: number, layer: number, point: GridPoint) => void
    every: (func: GridFunction, condition?: Condition) => Grid3D;
    translate: (x: number, y: number, z: number, condition?: Condition) => Grid3D;
}

type Grid3DOptions = {
    cols: number;
    rows: number;
    layers: number;
    width: number;
    height: number;
    depth: number;
}

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
export class Grid3D implements Grid3DInterface {
    private points: Points3D = [[[]]];

    /**
     * 
     * @param {Grid3DOptions} options 
     */
    constructor(options: Grid3DOptions) {
        let { cols, rows, layers, width, height, depth } = options;
        const stepLayer = depth / (layers - 1)

        if (layers === 0) {
            layers = 1;
            console.warn('Cannot create a grid with 0 layers, layers defaults to 1');
        }

        for (let layer = 0; layer < layers; layer++) {
            this.points[layer] = initRectangleGrid(cols, rows, width, height, stepLayer * layer);
        }
    }

    getPoints() {
        return [...this.points];
    }

    getPoint(col: number, row: number, layer: number) {
        return this.points[layer][col][row]
    }

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
    setPoint(col: number, row: number, layer: number, point: GridPoint) {
        this.points[layer][col][row] = point;
    }

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
    every(func: GridFunction, condition?: Condition): Grid3D {
        this.points.forEach((layer, layerIndex) => {
            layer.forEach((col, colIndex) => {
                col.forEach((point, rowIndex) => {
                    if (!!condition && !condition(point, colIndex, rowIndex, layerIndex)) return;
                    func(point, colIndex, rowIndex, layerIndex);
                })
            })
        })
        return this;
    }

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
    transform(func: TransformFunction, condition?: Condition): Grid3D {
        let warning = false;
        this.points.forEach((layer, layerIndex) => {
            layer.forEach((col, colIndex) => {
                col.forEach((point, rowIndex) => {
                    if (!!condition && !condition(point, colIndex, rowIndex, layerIndex)) return;
                    const transformedPoint = func(createPoint(point.x, point.y, point.z), colIndex, rowIndex, layerIndex);

                    if (!transformedPoint) {
                        warning = true;
                        return;
                    }

                    point.x = transformedPoint.x;
                    point.y = transformedPoint.y;
                    point.z = transformedPoint.z;
                })
            })
        });

        if (warning) {
            console.warn("One or more functions did not return a point, make sure your transform function returns a point for it to be updated in the grid")
        }

        return this;
    }

    translate(x: number, y: number, z: number, condition?: Condition) {
        this.points.forEach((layer, layerIndex) => {
            layer.forEach((col, colIndex) => {
                col.forEach((point, rowIndex) => {
                    if (!!condition && !condition(point, colIndex, rowIndex, layerIndex)) return;
                    point.x += x;
                    point.y += y;
                    point.z += z;
                })
            })
        })
        return this;
    }

}

/**
 * @name createGrid3D
 * @param options 
 * @returns {Grid3D}
 * 
 * @example
 * const grid = createGrid({cols: 3, rows: 5, layers: 8 , width 1080, height: 1080, depth: 1080});
 */
export const createGrid3D = (options: Grid3DOptions) => {
    return new Grid3D(options);
}