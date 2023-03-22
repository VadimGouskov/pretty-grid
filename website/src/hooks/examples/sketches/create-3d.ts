import p5Types from "p5";
import { createGrid3D, Grid, Grid3D, } from "pretty-grid";
import { sketchConfig } from "./sketch.config";
const { canvasWidth, canvasHeight } = sketchConfig;

const GRID_WIDTH = canvasWidth * 0.66;
const GRID_HEIGHT = canvasHeight * 0.66;
const GRID_DEPTH = GRID_WIDTH;
let grid: Grid3D;
let rotation = 0;
const setup = (p5: p5Types, canvasParentRef: Element) => {

    p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL).parent(canvasParentRef);
    grid = createGrid3D({ rows: 3, cols: 5, layers: 8, width: GRID_WIDTH, height: GRID_HEIGHT, depth: GRID_DEPTH })
    grid.translate(-GRID_WIDTH / 2, -GRID_HEIGHT / 2, -GRID_DEPTH / 2);
};

const draw = (p5: p5Types) => {
    rotation += 0.01;
    p5.translate(0, 0, -GRID_DEPTH)
    p5.background(0);
    p5.stroke("white")
    p5.rotateX(-rotation);
    p5.rotateY(-rotation);
    grid.every(point => {
        p5.push();
        p5.translate(point.x, point.y, point.z);
        p5.sphere(10);
        p5.pop()
    })

};

export const create3d = { setup, draw };