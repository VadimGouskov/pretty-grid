"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.width = width;
        this.height = height;
        const stepCols = width / (cols - 1);
        const stepRows = height / (rows - 1);
        // initialize grid
        for (let i = 0; i < rows; i++) {
            this.points[i] = [];
            for (let j = 0; j < cols; j++) {
                this.points[i][j] = new GridPoint(j * stepCols, i * stepRows);
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
    getPoint(xIndex, yindex) {
        return this.points[yindex][xIndex];
    }
    slice(startYIndex, stopYIndex, startXIndex, stopXIndex) {
        const slice = this.points.slice(startYIndex, stopYIndex + 1).map((i) => i.slice(startXIndex, stopXIndex + 1));
        const gridFromSlice = new Grid(slice[0].length, slice.length, 0, 0);
        gridFromSlice.set(slice);
        return gridFromSlice;
    }
    draw(func) {
        this.flat.forEach((point) => func(point));
    }
}
exports.Grid = Grid;
