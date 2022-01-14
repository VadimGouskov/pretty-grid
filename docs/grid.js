"use strict";
exports.__esModule = true;
var GridPoint = /** @class */ (function () {
    function GridPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return GridPoint;
}());
exports.GridPoint = GridPoint;
var Grid = /** @class */ (function () {
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
    function Grid(cols, rows, width, height) {
        this.points = [[]];
        var stepCols = width / (cols - 1);
        var stepRows = height / (rows - 1);
        // initialize grid
        for (var i = 0; i < cols; i++) {
            this.points[i] = [];
            for (var j = 0; j < rows; j++) {
                this.points[i][j] = new GridPoint(i * stepCols, j * stepRows);
            }
        }
    }
    Object.defineProperty(Grid.prototype, "flat", {
        get: function () {
            return this.points.reduce(function (acc, val) { return acc.concat(val); }, []);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get all the current points on the grid
     * warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
     * To get a deep copy use grid.copy(). eg. grid.copy.get()
     */
    Grid.prototype.get = function () {
        return this.points;
    };
    /**
     * Set / replace all the current points on the grid
     * warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array.
     */
    // TODO set a deep copy makes more sence? or make it optional and provide a deep copy helper function
    Grid.prototype.set = function (points) {
        this.points = points;
    };
    /**
     * Gets a point from from indeces [col, row]
     * @param col
     * @param row
     */
    Grid.prototype.getPoint = function (col, row) {
        return this.points[col][row];
    };
    /**
     * Loops over the points in the grid, passing each point to the provided @param func
     * Provide a drawing function
     * @param func a function that handles drawing of each individual point
     */
    Grid.prototype.draw = function (func, condition) {
        this.points.forEach(function (col, colIndex) {
            return col.forEach(function (point, rowIndex) {
                if (!!condition && !condition(point, colIndex, rowIndex))
                    return;
                func(point);
            });
        });
    };
    /**
     * Translates the entire grid by @param x en @param y coordinates
     * @param x
     * @param y
     */
    Grid.prototype.translate = function (x, y, condition) {
        this.points.forEach(function (col, colIndex) {
            return col.forEach(function (point, rowIndex) {
                if (!!condition && !condition(point, colIndex, rowIndex))
                    return;
                point.x += x;
                point.y += y;
            });
        });
        return this;
    };
    /** Creates a deep copy of the current grid object
     */
    Grid.prototype.copy = function () {
        var cols = this.points.length;
        // TODO take into account posibility of modified row
        var rows = this.points[0].length;
        // Width and height of grid do not matter, these will get set
        var copiedGrid = new Grid(cols, rows, 0, 0);
        var pointsDeepCopy = JSON.parse(JSON.stringify(this.points));
        copiedGrid.set(pointsDeepCopy);
        return copiedGrid;
    };
    return Grid;
}());
exports.Grid = Grid;
