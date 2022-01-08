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

    get(): GridPoint[][] {
        return this.points;
    }

    set(points: GridPoint[][]): void {
        this.points = points;
    }

    getPoint(col: number, row: number): GridPoint {
        return this.points[col][row];
    }

    getSection(startCol: number, endCol: number, startRow: number, endRow: number): Grid {
        const slice = this.points.slice(startCol, endCol + 1).map((i) => i.slice(startRow, endRow + 1));
        const gridFromSlice = new Grid(slice[0].length, slice.length, 0, 0);
        gridFromSlice.set(slice);
        return gridFromSlice;
    }

    draw(func: (point: GridPoint) => void): void {
        this.flat.forEach((point) => func(point));
    }
}
