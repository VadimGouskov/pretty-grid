const { createGrid } = require('../dist/pretty-grid.js');

const GRID_ROWS = 5;
const GRID_COLS = 7;
const WIDTH = 100;
const HEIGHT = 100;
const grid = createGrid({ cols: GRID_COLS, rows: GRID_ROWS, width: WIDTH, height: HEIGHT });

test("Grid intervals", () => {
    const INTERVAL_ROWS = HEIGHT / (GRID_ROWS - 1);
    const INTERVAL_COLS = WIDTH / (GRID_COLS - 1);

    expect(grid.getPoint(1, 1).x).toBe(INTERVAL_COLS); // cols
    expect(grid.getPoint(1, 1).y).toBe(INTERVAL_ROWS); // rows
    expect(grid.getPoint(GRID_COLS - 1, GRID_ROWS - 1).x).toBe(WIDTH); // last col
    expect(grid.getPoint(GRID_COLS - 1, GRID_ROWS - 1).y).toBe(HEIGHT); // last col
})

test("columns length", () => {
    expect(grid.getPoints().length).toBe(GRID_COLS);
})

test("row length", () => {
    expect(grid.getPoints()[0].length).toBe(GRID_ROWS);
})