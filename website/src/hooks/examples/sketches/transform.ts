import p5Types from "p5";
import { createGrid, ellipseShapeOrigin, Grid, GridShape, ShapeOrigin } from "pretty-grid";
import { sketchConfig } from "./sketch.config";

const { canvasWidth, canvasHeight } = sketchConfig;

const GRID_WIDTH = canvasWidth;
const GRID_HEIGHT = canvasHeight;
let grid: Grid;
const setup = (p5: p5Types, canvasParentRef: Element) => {

    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    grid = createGrid({ rows: 15, cols: 15, width: GRID_WIDTH, height: GRID_HEIGHT })
    p5.noLoop();
};

const draw = (p5: p5Types) => {
    p5.translate(canvasWidth / 2, canvasHeight / 2);
    p5.scale(0.666);
    p5.translate(-canvasWidth / 2, -canvasHeight / 2);

    p5.background(0);

    const transformSineWave = (point) => {
        point.x += Math.sin(point.y * 0.015) * 20;
        return point;
    }

    grid.transform(transformSineWave)

    grid.every(point => p5.circle(point.x, point.y, 20));

};

export const transform = { setup, draw };