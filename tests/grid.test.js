const { Grid } = require('../dist/pretty-grid.js');

const GRID_ROWS = 5;
const GRID_COLS = 7;
const WIDTH = 100;
const HEIGHT = 100;
const grid = new Grid(GRID_COLS, GRID_ROWS, WIDTH, HEIGHT);

test('Check dimensions', () => {
    expect(grid.get().length).toBe(GRID_COLS); // cols
    expect(grid.get()[0].length).toBe(GRID_ROWS); // rows
})

test('Check interval', () => {
    const INTERVAL_ROWS = HEIGHT / (GRID_ROWS - 1); 
    const INTERVAL_COLS = WIDTH / (GRID_COLS - 1);

    expect(grid.getPoint(1, 1).x).toBe(INTERVAL_COLS); // cols
    expect(grid.getPoint(1, 1).y).toBe(INTERVAL_ROWS); // rows
    expect(grid.getPoint(GRID_COLS - 1, GRID_ROWS -1).x).toBe(WIDTH); // last col
    expect(grid.getPoint(GRID_COLS - 1, GRID_ROWS -1).y).toBe(HEIGHT); // last col
})