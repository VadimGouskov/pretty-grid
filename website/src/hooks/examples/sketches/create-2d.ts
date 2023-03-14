import p5Types from "p5";
import { createGrid, Grid } from "pretty-grid";
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const GRID_WIDTH = CANVAS_WIDTH * 0.66;
const GRID_HEIGHT = CANVAS_HEIGHT * 0.66;
let grid: Grid;
const setup = (p5: p5Types, canvasParentRef: Element) => {

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
    grid = createGrid({ rows: 5, cols: 8, width: GRID_WIDTH, height: GRID_HEIGHT })
};

const draw = (p5: p5Types) => {
    p5.background(0);
    p5.translate((CANVAS_WIDTH - GRID_WIDTH) / 2, (CANVAS_HEIGHT - GRID_HEIGHT) / 2)
    grid.draw(point => {
        p5.ellipse(point.x, point.y, 20, 20);
    })

};

export const create2d = { setup, draw };