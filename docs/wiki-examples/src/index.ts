import { Grid } from 'pretty-grid';
import p5 from 'p5';

const s = (p: p5) => {
    const CANVAS_WIDTH = 500;
    const CANVAS_HEIGHT = 500;
    let exportName = "simple";

    const grid = new Grid(5, 10, CANVAS_WIDTH, CANVAS_HEIGHT);

    p.setup = () => {
        const canvas = p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        canvas.parent('sketch');
        p.noLoop();
    };

    p.draw = () => {
        p.background(32);
        p.ellipseMode(p.CENTER);


        // Drawing

        // Translating
        exportName = "translate";
        grid.draw(point => whiteDot(point.x, point.y));
        grid.translate(25, 10);
        grid.draw(point => orangeDot(point.x, point.y));

        // Chaining 

        // Conditions

        // Operators

        // p.saveCanvas(exportName, "png");

    };

    const orangeDot = (x: number, y: number) => {
        drawDot(x, y, "#ff6700");
    }

    const blueDot = (x: number, y: number) => {
        drawDot(x, y, "#0000ff");
    }

    const whiteDot = (x: number, y: number) => {
        drawDot(x, y, "#fff");
    }

    const drawDot = (x: number, y: number, color: string) => {
        p.fill(color);
        p.circle(x, y, 10)
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myP5 = new p5(s);
