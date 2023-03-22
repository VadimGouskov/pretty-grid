import p5Types from "p5";
import { createGrid, ellipseShapeOrigin, Grid, GridShape, ShapeOrigin } from "pretty-grid";
import { sketchConfig } from "./sketch.config";

const { canvasWidth, canvasHeight } = sketchConfig;

const GRID_WIDTH = canvasWidth * 0.66;
const GRID_HEIGHT = canvasHeight * 0.66;
let grid: Grid;
const setup = (p5: p5Types, canvasParentRef: Element) => {

    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    grid = createGrid({ rows: 4, cols: 15, width: GRID_WIDTH, height: GRID_HEIGHT, shape: GridShape.ELLIPSE })
    p5.noLoop();
};

const draw = (p5: p5Types) => {
    p5.background(0);
    p5.translate(canvasWidth / 2, canvasHeight / 2)

    grid.every((point, _, row) => {
        p5.circle(point.x, point.y, (row + 1) * 5);
    })

};

export const createEllipse = { setup, draw };