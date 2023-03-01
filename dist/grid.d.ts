import { Condition } from './conditions';
export declare type GridFunction = (point: GridPoint, col?: number, row?: number) => void;
/**
 * Enum used to determine the grid shape in the [Grid]{@link #Grid} constructor.
 * Values: RECTANGLE or ELLIPSE.
 * @readonly
 * @enum {number}
 */
export declare enum GridShape {
    RECTANGLE = 0,
    ELLIPSE = 1
}
/**
 * Represent a single point on the grid.
 * @class
 * @name GridPoint
 * @param {number} x the x coordinate of the point
 * @param {number} y the x coordinate of the point
 * @property {number} x the x coordinate of the point
 * @property {number} y the x coordinate of the point
 */
export declare class GridPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
/**
 * The main Grid class containing all a two dimensional array of GridPoints and methods to manipulate the GridPoints on grid.
 * @class
 * @name Grid
 * @param {number} cols the amount of columns the grid needs to contain
 * @param {number} rows the amount of rows the grid needs to contain
 * @param {number} width the width of the grid
 * @param {number} height the height of the grid
 * @param {GridShape} [shape] the shape of the grid (RECTANGLE or ELLIPSE). Defaults to a rectangular shaped grid.
 */
export declare class Grid {
    private points;
    /**
     * Instantiates a new 2 Dimensional Grid.
     * The horizontal distance between each column: width / (cols - 1)
     * The vertical distance between each row : height / (rows - 1)
 
     */
    constructor(cols: number, rows: number, width: number, height: number, shape?: GridShape);
    private initRectangleGrid;
    private initEllipseGrid;
    /**
     * Get all the current points on the grid
     * warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
     * To get a deep copy use grid.copy(). eg. grid.copy.get()
     *
     * @method
     * @name get
     * @returns {GridPoint[][]}
     *

     */
    get(): GridPoint[][];
    /**
     * Replaces all the current points on the grid
     * <b> warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array. </b>
     * @method
     * @name set
     *
     * @returns {void}
     */
    set(points: GridPoint[][]): void;
    /**
     * Gets a point from from indeces [col, row]
     * @method
     * @name getPoint
     * @param {number} col - the col index
     * @param {number} row - the row index
     * @returns {GridPoint}
     */
    getPoint(col: number, row: number): GridPoint;
    /**
     * returns a one dimensional array of GridPoints of the grid. One column pushed after the other.
     * @method
     * @name getFlat
     * @type {GridPoint[]}
     */
    getFlat(): GridPoint[];
    /**
     * Loops over the points in the grid, passing each point to the provided func parameter
     * Provide a drawing function
     * @method
     * @name draw
     * @param {GridFunction} func - a function that handles drawing of each individual point
     * @param {Condition} condition - an optional condition for which points to draw
     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods
     */
    draw(func: GridFunction, condition?: Condition): Grid;
    /**
     * Translates the entire grid by x en y coordinates
     * @method
     * @name translate
     * @param {number} x - the x coordinates to translate the points with
     * @param {number} y - the y coordinates to translate the points with
     * @param {Condition} [condition] - an optional condition for which points to translate
     *
     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods
     */
    translate(x: number, y: number, condition?: Condition): Grid;
    /**
     * Creates a deep copy of the current grid object
     * @method
     * @name copy
     * @returns { Grid } a new instance of Grid of with the same coordinate values as @this Grid
     */
    copy(): Grid;
}
declare type GridOptions = {
    cols: number;
    rows: number;
    width: number;
    height: number;
    shape?: GridShape;
};
/**
*
* @func
* @name createGrid
* @param {GridOptions} options
* @returns {Grid}
*/
export declare const createGrid: (options: GridOptions) => Grid;
export {};
