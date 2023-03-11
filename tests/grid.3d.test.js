const { createGrid3D } = require("../dist/pretty-grid.js");


const ROWS = 5;
const COLS = 7;
const LAYERS = 4;
const WIDTH = 100;
const HEIGHT = 100;
const DEPTH = 100;
const grid = new createGrid3D({ cols: COLS, rows: ROWS, layers: LAYERS, width: WIDTH, height: HEIGHT, depth: DEPTH });


test('Check dimensions', () => {
    expect(grid.get().length).toBe(LAYERS); // cols
    expect(grid.get()[0].length).toBe(COLS); // rows
    expect(grid.get()[0][0].length).toBe(ROWS); // rows
})

test("test translations", () => {
    // const layerStep = DEPTH / (LAYERS - 1);
    // const colStep = WIDTH / (COLS - 1);
    // const rowStep = HEIGHT / (ROWS - 1);

    const DX = 3;
    const DY = 5;
    const DZ = 8;

    grid.translate(DX, DY, DZ);
    const firstPoint = grid.getPoint(0, 0, 0);
    expect(firstPoint.x).toBe(DX);
    expect(firstPoint.y).toBe(DY);
    expect(firstPoint.z).toBe(DZ);

    const lastPoint = grid.getPoint(COLS - 1, ROWS - 1, LAYERS - 1);
    expect(lastPoint.x).toBe(WIDTH + DX);
    expect(lastPoint.y).toBe(HEIGHT + DY);
    expect(lastPoint.z).toBe(DEPTH + DZ);

    // cleanup
    grid.translate(-DX, -DY, -DZ);

})