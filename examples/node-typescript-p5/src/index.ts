import { Grid } from 'pretty-grid';
import p5 from 'p5';

const s = (p: p5) => {
    const CANVAS_WIDTH = 500;
    const CANVAS_HEIGHT = 500;

    const grid = new Grid(5, 10, CANVAS_WIDTH, CANVAS_HEIGHT);

    p.setup = () => {
        const canvas = p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        canvas.parent('sketch');
    };

    p.draw = () => {
        p.background(32);
        p.fill('hotpink');
        p.ellipseMode(p.CENTER);

        // Drawing the main grid
        grid.draw((point) => {
            p.circle(point.x, point.y, 10);
        });
    };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myP5 = new p5(s);
