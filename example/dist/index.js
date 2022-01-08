"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pretty_grid_1 = require("pretty-grid");
const p5_1 = require("p5");
const grid = new pretty_grid_1.Grid(5, 5, 20, 20);
const s = (p) => {
    const CANVAS_WIDTH = 500;
    const CANVAS_HEIGHT = 500;
    p.setup = () => {
        const canvas = p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        canvas.parent('sketch');
    };
    p.draw = () => {
        p.background(255);
        p.fill(0);
        p.ellipseMode(p.CENTER);
        p.ellipse(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 50, 50);
    };
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myP5 = new p5_1.default(s);
