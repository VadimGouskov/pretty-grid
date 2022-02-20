import { Grid, evenRows, and, evenCols, oddRows, oddCols, odd } from 'pretty-grid';
import p5 from 'p5';

const s = (p: p5) => {
    const CANVAS_WIDTH = 500;
    const CANVAS_HEIGHT = 500;
    let exportName = "simple";

    const grid = new Grid(5, 8, CANVAS_WIDTH, CANVAS_HEIGHT);

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
        /*
        exportName = "translate";
        grid.draw(point => whiteDot(point.x, point.y));
        grid.translate(10, 20);
        grid.draw(point => orangeCircle(point.x, point.y));
        */
        // Chaining 

        // Conditions
        /*
        exportName = "conditions-evenRows";
        grid.draw(point => whiteDot(point.x, point.y));
        */
        //grid.draw(point => orangeCircle(point.x, point.y), evenRows());

        // Operators
        /*
        exportName = "operators";
        grid.draw(point => whiteDot(point.x, point.y));
        grid.draw(point => orangeCircle(point.x, point.y), and(evenCols(), oddRows()));
        */

        // introduciton
        exportName = "intro";
        const introGrid = new Grid(20, 10, 500, 500);
        introGrid.draw(point => whiteDot(point.x, point.y));
        introGrid.draw(point => orangeCircle(point.x, point.y), and(oddRows(), oddCols()));
        introGrid.translate(10,10)
        introGrid.draw(point => blueDot(point.x, point.y), evenRows());

        p.saveCanvas(exportName, "png");

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

    const orangeCircle = (x: number, y: number) => {
        p.push();
        p.noFill();
        p.stroke("#ff6700");
        p.strokeWeight(3)
        p.circle(x, y, 20)
        p.pop()

    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myP5 = new p5(s);
