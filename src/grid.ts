export class GridPoint {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Grid {
    width: number;
    height: number;

    private points: GridPoint[][] = [[]];

    constructor(cols: number, rows: number, width: number, height: number) {
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

    get flat(): GridPoint[] {
        return this.points.reduce((acc, val) => acc.concat(val), []);
    }

    get(): GridPoint[][] {
        return this.points;
    }

    set(points: GridPoint[][]): void {
        this.points = points;
    }

    getPoint(xIndex: number, yindex: number): GridPoint {
        return this.points[yindex][xIndex];
    }

    slice(startYIndex: number, stopYIndex: number, startXIndex: number, stopXIndex: number): Grid {
        const slice = this.points.slice(startYIndex, stopYIndex + 1).map((i) => i.slice(startXIndex, stopXIndex + 1));
        const gridFromSlice = new Grid(slice[0].length, slice.length, 0, 0);
        gridFromSlice.set(slice);
        return gridFromSlice;
    }

    draw(func: (point: GridPoint) => void): void {
        this.flat.forEach((point) => func(point));
    }
}
