import { Condition, ConditionFunction } from './conditions';

export type GridFunction = (point: GridPoint, col?: number, row?: number) => void;

export class GridPoint {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Grid {
    private points: GridPoint[][] = [[]];

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

    get flat(): GridPoint[] {
        return this.points.reduce((acc, val) => acc.concat(val), []);
    }

    /**
     * Get all the current points on the grid
     * warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
     * To get a deep copy use grid.copy(). eg. grid.copy.get()
     */
    get(): GridPoint[][] {
        return this.points;
    }

    /**
     * Set / replace all the current points on the grid
     * warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array.
     */
    // TODO set a deep copy makes more sence? or make it optional and provide a deep copy helper function
    set(points: GridPoint[][]): void {
        this.points = points;
    }

    /**
     * Gets a point from from indeces [col, row]
     * @param col
     * @param row
     */

    getPoint(col: number, row: number): GridPoint {
        return this.points[col][row];
    }

    /**
     * Loops over the points in the grid, passing each point to the provided @param func
     * Provide a drawing function
     * @param func a function that handles drawing of each individual point
     */
    draw(func: GridFunction, condition?: ConditionFunction): void {
        this.points.forEach((col, colIndex) =>
            col.forEach((point, rowIndex) => {
                if (!!condition && !condition(point, colIndex, rowIndex)) return;
                func(point);
            }),
        );
    }

    /**
     * Translates the entire grid by @param x en @param y coordinates
     * @param x
     * @param y
     */
    translate(x: number, y: number, condition?: ConditionFunction): Grid {
        this.points.forEach((col, colIndex) =>
            col.forEach((point, rowIndex) => {
                if (!!condition && !condition(point, colIndex, rowIndex)) return;
                point.x += x;
                point.y += y;
            }),
        );
        return this;
    }

    /** Creates a deep copy of the current grid object
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
