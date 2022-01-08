export declare class GridPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export declare class Grid {
    width: number;
    height: number;
    private points;
    constructor(cols: number, rows: number, width: number, height: number);
    readonly flat: GridPoint[];
    get(): GridPoint[][];
    set(points: GridPoint[][]): void;
    getPoint(xIndex: number, yindex: number): GridPoint;
    slice(startYIndex: number, stopYIndex: number, startXIndex: number, stopXIndex: number): Grid;
    draw(func: (point: GridPoint) => void): void;
}
