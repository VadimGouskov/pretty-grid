import { Condition } from './conditions';
export declare type GridFunction = (point: GridPoint, col?: number, row?: number) => void;
/**
 * Represent a single point on the grid.
 * @class
 * @name GridPoint
 * @property {number} x: the x coordinate of the point
 * @property {number} y: the x coordinate of the point
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
 */
export declare class Grid {
    private points;
    /**
     * Instantiates a new 2 Dimensional Grid.
     * The horizontal distance between each column: width / (cols - 1)
     * The vertical distance between each row : height / (rows - 1)
     * @constructor
     * @param cols
     * @param rows
     * @param width
     * @param height
     */
    constructor(cols: number, rows: number, width: number, height: number);
    /**
     * returns a one dimensional array of GridPoints of the grid. One column pushed after the other.
     * @name flat
     * @type {GridPoint[]}
     */
    get flat(): GridPoint[];
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
     * warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array.
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
     * Loops over the points in the grid, passing each point to the provided func parameter
     * Provide a drawing function
     * @method
     * @name draw
     * @param {GridFunction} func - a function that handles drawing of each individual point
     * @param {Condition} condition - an optional condition for which points to draw
     * @returns {void}
     */
    draw(func: GridFunction, condition?: Condition): void;
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
