const { Grid, createGrid } = require('../dist/pretty-grid.js');

const GRID_ROWS = 5;
const GRID_COLS = 7;
const WIDTH = 100;
const HEIGHT = 100;
const grid = new createGrid({ cols: GRID_COLS, rows: GRID_ROWS, width: WIDTH, height: HEIGHT });


test('Check dimensions', () => {
    expect(grid.getPoints().length).toBe(GRID_COLS); // cols
    expect(grid.getPoints()[0].length).toBe(GRID_ROWS); // rows
})

test('Check interval', () => {
    const INTERVAL_ROWS = HEIGHT / (GRID_ROWS - 1);
    const INTERVAL_COLS = WIDTH / (GRID_COLS - 1);

    expect(grid.getPoint(1, 1).x).toBe(INTERVAL_COLS); // cols
    expect(grid.getPoint(1, 1).y).toBe(INTERVAL_ROWS); // rows
    expect(grid.getPoint(GRID_COLS - 1, GRID_ROWS - 1).x).toBe(WIDTH); // last col
    expect(grid.getPoint(GRID_COLS - 1, GRID_ROWS - 1).y).toBe(HEIGHT); // last col
})

test('Deep copy of grid', () => {
    const deepCopy = grid.copy();
    const copiedPoint = deepCopy.getPoint(0, 0);
    copiedPoint.x += 10;
    // check if modification of copiedPoint affects original grid
    expect(grid.getPoint(0, 0).x).toBe(0);
})

test('Translate the entire grid', () => {
    const tx = 10;
    const ty = 15;
    const point = grid.getPoint(0, 0);
    const originalX = point.x;
    const originalY = point.y;

    grid.translate(tx, ty);

    expect(grid.getPoint(0, 0).x).toBe(originalX + tx);
    expect(grid.getPoint(0, 0).y).toBe(originalY + ty);

    // cleanup
    grid.translate(-tx, -ty)
})

test('Test the getFlat funcions length', () => {
    const pointsArray = grid.getFlat();

    expect(pointsArray.length).toBe(GRID_COLS * GRID_ROWS);
})

test('Transform points', () => {
    const tranformGrid = createGrid({ cols: GRID_COLS, rows: GRID_ROWS, width: WIDTH, height: HEIGHT });
    tranformGrid.transform((point) => {
        point.x += 10;
        return point;
    })

    expect(tranformGrid.getPoint(0, 0).x).toBe(10);
})

test('Tranform without point return should not mutate the point', () => {
    const nonTranfsormedGrid = createGrid({ cols: GRID_COLS, rows: GRID_ROWS, width: WIDTH, height: HEIGHT });
    nonTranfsormedGrid.transform((point) => {
        point.x += 10;
    })
    expect(nonTranfsormedGrid.getPoint(0, 0).x).toBe(0);
})
