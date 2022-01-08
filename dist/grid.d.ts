export declare class GridPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export declare class Grid {
    private points;
    constructor(cols: number, rows: number, width: number, height: number);
    get flat(): GridPoint[];
    get(): GridPoint[][];
    set(points: GridPoint[][]): void;
    getPoint(col: number, row: number): GridPoint;
    getSection(startCol: number, endCol: number, startRow: number, endRow: number): Grid;
    draw(func: (point: GridPoint) => void): void;
}
