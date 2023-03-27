import { Condition } from './conditions';
import { GridFunction, TransformFunction } from './grid.function';
import { initEllipseGrid, initRectangleGrid } from './grid-init';
import { createPoint, GridPoint } from './grid-point';


/**
 * Enum used to determine the grid shape in the [Grid]{@link #Grid} constructor.
 * Values: RECTANGLE or ELLIPSE.
 * @readonly
 * @enum {number}
 */
export enum GridShape {
    RECTANGLE = 0,
    ELLIPSE = 1,
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
export class Grid {
    private points: GridPoint[][] = [[]];

    /**
     * Instantiates a new 2 Dimensional Grid.
     * The horizontal distance between each column: width / (cols - 1)
     * The vertical distance between each row : height / (rows - 1)
 
     */
    constructor(cols: number, rows: number, width: number, height: number, shape?: GridShape) {
        if (cols === 0) {
            cols = 1;
            console.warn('Cannot create a grid with 0 columns, cols defaults to 1');
        }

        if (rows === 0) {
            rows = 1;
            console.warn('Cannot create a grid with 0 rows, rows defaults to 1');
        }

        // initialize grid
        if (shape === GridShape.ELLIPSE) {
            this.points = initEllipseGrid(cols, rows, width, height);
        } else {
            // default to rectangle grid
            this.points = initRectangleGrid(cols, rows, width, height)
        }
    }


    /**
     * Get all the current points on the grid
     * warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
     * To get a deep copy use grid.copy(). eg. grid.copy.get()
     * 
     * @method
     * @name getPoints
     * @returns {GridPoint[][]}
     *
     
     */
    getPoints(): GridPoint[][] {
        return [...this.points];
    }

    /**
     * Replaces all the current points on the grid
     * <b> warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array. </b>
     * @method
     * @name set
     *
     * @returns {void}
     */
    set(points: GridPoint[][]): void {
        // TODO set a deep copy makes more sence? or make it optional and provide a deep copy helper function
        this.points = points;
    }

    /**
     * Gets a point from from indeces [col, row]
     * @method
     * @name getPoint
     * @param {number} col - the col index
     * @param {number} row - the row index
     * @returns {GridPoint}
     */

    getPoint(col: number, row: number): GridPoint {
        return this.points[col][row];
    }

    /**
     * returns a one dimensional array of GridPoints of the grid. One column pushed after the other.
     * @method
     * @name getFlat
     * @type {GridPoint[]}
     */
    getFlat(): GridPoint[] {
        return this.points.reduce((acc, val) => acc.concat(val), []);
    }

    /**
     * Loops over the points in the grid, passing each point to the provided func parameter
     * Provide a drawing function
     * @deprecated
     * @method
     * @name draw
     * @param {GridFunction} func - a function that handles drawing of each individual point
     * @param {Condition} condition - an optional condition for which points to draw
     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods
     */
    draw(func: GridFunction, condition?: Condition): Grid {
        this.points.forEach((col, colIndex) =>
            col.forEach((point, rowIndex) => {
                if (!!condition && !condition(point, colIndex, rowIndex)) return;
                func(point, colIndex, rowIndex);
            }),
        );
        return this;
    }

    /**
     * Loops over the points in the grid, passing each point to the provided func parameter
     * @method
     * @name every
     * @param {GridFunction} func - a function to access each point and row/col indices 
     * @param {Condition} condition - an optional condition for which points to execute func over
     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods
     */
    every(func: GridFunction, condition?: Condition): Grid {
        this.points.forEach((col, colIndex) =>
            col.forEach((point, rowIndex) => {
                if (!!condition && !condition(point, colIndex, rowIndex)) return;
                func(point, colIndex, rowIndex);
            }),
        );
        return this;
    }

    /**
     * Transforms x, y values of points on the grid using the supplied transform function.
     * control which points are getting affected by supplying a condition
     * 
     * @method
     * @name transform
     * @param {TransformFunction} func - a function to transform the point's x, y values. Must return the transformed point.
     * @param {Condition} condition - an optional condition for which points to be affected
     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods
     * 
     *  * @example
     * // Translates the grid on the x-axis by 5 and on the y-axis by 8
     * grid.transform((point) => {
     *      point.x += 5;    
     *      point.y += 8; 
     *      return point; // Make sure to return the transformed point 
     * })
     */
    transform(func: TransformFunction, condition?: Condition): Grid {
        let warning = false;
        this.points.forEach((col, colIndex) =>
            col.forEach((point, rowIndex) => {
                if (!!condition && !condition(point, colIndex, rowIndex)) return;
                const transformedPoint = func(createPoint(point.x, point.y), colIndex, rowIndex);

                if (!transformedPoint) {
                    warning = true;
                    return;
                }

                point.x = transformedPoint.x;
                point.y = transformedPoint.y;
            }),
        );

        if (warning) {
            console.warn("One or more functions did not return a point, make sure your transform function returns a point for it to be updated in the grid")
        }

        return this;
    }

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
    translate(x: number, y: number, condition?: Condition): Grid {
        this.points.forEach((col, colIndex) =>
            col.forEach((point, rowIndex) => {
                if (!!condition && !condition(point, colIndex, rowIndex)) return;
                point.x += x;
                point.y += y;
            }),
        );
        return this;
    }

    /**
     * Creates a deep copy of the current grid object
     * @method
     * @name copy
     * @returns { Grid } a new instance of Grid of with the same coordinate values as @this Grid
     */
    copy(): Grid {
        const cols = this.points.length;
        // TODO take into account posibility of modified row
        const rows = this.points[0].length;

        // Width and height of grid do not matter, these will get set
        const copiedGrid = new Grid(cols, rows, 0, 0);
        const pointsDeepCopy: GridPoint[][] = JSON.parse(JSON.stringify(this.points));
        copiedGrid.set(pointsDeepCopy);

        return copiedGrid;
    }

    /* 
    getSection(startCol: number, endCol: number, startRow: number, endRow: number): Grid {
        const slice = this.points.slice(startCol, endCol + 1).map((i) => i.slice(startRow, endRow + 1));
        const gridFromSlice = new Grid(slice[0].length, slice.length, 0, 0);
        gridFromSlice.set(slice);
        return gridFromSlice;
    }
    */
}

/**
 * Options to configure a grid
 * @typedef GridOptions
 * @property {number} cols
 * @property {number} rows
 * @property {number} width
 * @property {number} height
 * @property {GridShape} [shape]
 */


type GridOptionsType = {
    cols: number;
    rows: number;
    width: number;
    height: number;
    shape?: GridShape;
}

/** 
* Create a grid  
*
* @name createGrid
* @param {GridOptions} options
* @returns {Grid}
*
* @example
* const grid = createGrid({cols: 3, rows: 5, width 1080, height: 1080});
*/
export const createGrid = (options: GridOptionsType) => {
    return new Grid(options.cols, options.rows, options.width, options.height, options.shape);
}