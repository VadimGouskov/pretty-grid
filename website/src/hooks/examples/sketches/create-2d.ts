import p5Types from "p5";
import { createGrid, ellipseShapeOrigin, Grid, ShapeOrigin } from "pretty-grid";
import { sketchConfig } from "./sketch.config";
const { canvasWidth, canvasHeight } = sketchConfig;

const GRID_WIDTH = canvasWidth * 0.66;
const GRID_HEIGHT = canvasHeight * 0.66;
let grid: Grid;
const setup = (p5: p5Types, canvasParentRef: Element) => {

    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    grid = createGrid({ rows: 5, cols: 8, width: GRID_WIDTH, height: GRID_HEIGHT })
    p5.noLoop();
};

const draw = (p5: p5Types) => {
    p5.background(0);
    p5.translate((canvasWidth - GRID_WIDTH) / 2, (canvasHeight - GRID_HEIGHT) / 2)

    grid.every(point => {
        p5.ellipse(point.x, point.y, 20, 20);
    })

};

export const create2d = { setup, draw };