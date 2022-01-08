"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = exports.GridPoint = void 0;
class GridPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.GridPoint = GridPoint;
class Grid {
    constructor(cols, rows, width, height) {
        this.points = [[]];
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
    get flat() {
        return this.points.reduce((acc, val) => acc.concat(val), []);
    }
    get() {
        return this.points;
    }
    set(points) {
        this.points = points;
    }
    getPoint(col, row) {
        return this.points[col][row];
    }
    getSection(startCol, endCol, startRow, endRow) {
        const slice = this.points.slice(startCol, endCol + 1).map((i) => i.slice(startRow, endRow + 1));
        const gridFromSlice = new Grid(slice[0].length, slice.length, 0, 0);
        gridFromSlice.set(slice);
        return gridFromSlice;
    }
    draw(func) {
        this.flat.forEach((point) => func(point));
    }
}
exports.Grid = Grid;
