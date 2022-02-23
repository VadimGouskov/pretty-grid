import { Condition } from './conditions';

export type GridFunction = (point: GridPoint, col?: number, row?: number) => void;

/**
 * Represent a single point on the grid.
 * @class
 * @name GridPoint
 * @param {number} x the x coordinate of the point
 * @param {number} y the x coordinate of the point
 * @property {number} x the x coordinate of the point
 * @property {number} y the x coordinate of the point
 */
export class GridPoint {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

/**
 * The main Grid class containing all a two dimensional array of GridPoints and methods to manipulate the GridPoints on grid.
 * @class
 * @name Grid
 * @param {number} cols the amount of columns the grid needs to contain
 * @param {number} rows the amount of rows the grid needs to contain
 * @param {number} width the width of the grid
 * @param {number} height the height of the grid
 */
export class Grid {
    private points: GridPoint[][] = [[]];

    /**
     * Instantiates a new 2 Dimensional Grid.
     * The horizontal distance between each column: width / (cols - 1)
     * The vertical distance between each row : height / (rows - 1)
 
     */
    constructor(cols: number, rows: number, width: number, height: number) {
        const stepCols = width / (cols - 1);
        const stepRows = height / (rows - 1);

        // initialize grid
        for (let i = 0; i < cols; i++) {
            this.points[i] = [];
            for (let j = 0; j < rows; j++) {
                this.points[i][j] = new GridPoint(i * stepCols, j * stepRows);
            }
        }
    }

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
    get(): GridPoint[][] {
        return this.points;
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
     * @method
     * @name draw
     * @param {GridFunction} func - a function that handles drawing of each individual point
     * @param {Condition} condition - an optional condition for which points to draw
     * @returns {void}
     */
    draw(func: GridFunction, condition?: Condition): void {
        this.points.forEach((col, colIndex) =>
            col.forEach((point, rowIndex) => {
                if (!!condition && !condition(point, colIndex, rowIndex)) return;
                func(point);
            }),
        );
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
