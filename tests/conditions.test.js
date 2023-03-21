const { Grid, even, odd } = require('../dist/pretty-grid.js');

const GRID_ROWS = 5;
const GRID_COLS = 5;
const WIDTH = 100;
const HEIGHT = 100;
const grid = new Grid(GRID_COLS, GRID_ROWS, WIDTH, HEIGHT);

test('Even Condition', () => {
    grid.getPoints().forEach((col, colİndex) => col.forEach((point, rowİndex) => {
        const result = even()(point, colİndex, rowİndex);
        expect(result).toBe((colİndex % 2 === 0 && rowİndex % 2 === 0));
    }))
})

test('Odd Condition', () => {
    grid.getPoints().forEach((col, colİndex) => col.forEach((point, rowİndex) => {
        const result = odd()(point, colİndex, rowİndex);
        expect(result).toBe((colİndex % 2 !== 0 && rowİndex % 2 !== 0));
    }))
})
