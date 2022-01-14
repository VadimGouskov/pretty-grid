import { ConditionFunction } from './conditions';
export declare type GridFunction = (point: GridPoint, col?: number, row?: number) => void;
export declare class GridPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export declare class Grid {
    private points;
    /**
     * @constructor
     * Instantiates a new 2 Dimensional Grid.
     * The horizontal distance between each column: width / (cols - 1)
     * The vertical distance between each row : height / (rows - 1)
     * @param cols
     * @param rows
     * @param width
     * @param height
     */
    constructor(cols: number, rows: number, width: number, height: number);
    get flat(): GridPoint[];
    /**
     * @method
     * @name get
     * Get all the current points on the grid
     * warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
     * To get a deep copy use grid.copy(). eg. grid.copy.get()
     */
    get(): GridPoint[][];
    /**
     * Set / replace all the current points on the grid
     * warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array.
     */
    set(points: GridPoint[][]): void;
    /**
     * Gets a point from from indeces [col, row]
     * @param col
     * @param row
     */
    getPoint(col: number, row: number): GridPoint;
    /**
     * Loops over the points in the grid, passing each point to the provided @param func
     * Provide a drawing function
     * @param func a function that handles drawing of each individual point
     */
    draw(func: GridFunction, condition?: ConditionFunction): void;
    /**
     * Translates the entire grid by @param x en @param y coordinates
     * @param x
     * @param y
     */
    translate(x: number, y: number, condition?: ConditionFunction): Grid;
    /** Creates a deep copy of the current grid object
     */
    copy(): Grid;
}
