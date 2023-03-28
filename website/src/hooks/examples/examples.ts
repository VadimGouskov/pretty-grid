import p5Types from "p5";
import { create2d } from "./sketches/create-2d";
import { create3d } from "./sketches/create-3d";
import { createEllipse } from "./sketches/create-ellipse";
import { drawEvenOdd } from "./sketches/draw-odd-even";
import { transform } from "./sketches/transform";

type Example = {
    setup: (p5: p5Types, canvasParentRef: Element) => void
    draw: (p5: p5Types) => void
    title: string;
    text?: string;
    code?: string;
}

export const useExamples = (): Example[] => {
    return [{
        title: "How to Create a 2D Grid",
        setup: create2d.setup,
        draw: create2d.draw,
        code: ` /* Creating and drawing a 2D rectangular grid */
 import { createGrid } from "pretty-grid";

 const grid = createGrid({ rows: 5, cols: 8, 
                           width: 400, height: 400 }); 
 grid.every(point => {
    circle(point.x, point.y, 20);
 };`
    },
    {
        title: "How to Create an Elliptical Grid",
        setup: createEllipse.setup,
        draw: createEllipse.draw,
        code: ` /* Creating and drawing a 2D Ellipse grid */ 
 import { createGrid } from "pretty-grid";

 const grid = createGrid({  rows: 4, cols: 15, 
                            width: 400, height: 400, 
                            shape: GridShape.ELLIPSE 
                        })

 grid.every((point, _, row) => {
    circle(point.x, point.y, (row + 1) * 5);
 })`
    },
    {
        title: "How to Create a 3D Grid ",
        setup: create3d.setup,
        draw: create3d.draw,
        code: ` /* Creating and drawing a 3D grid*/ 
import { createGrid3D } from "pretty-grid";

grid = createGrid3D({   rows: 3, cols: 5, layers: 8, 
                        width: 400, height: 400, depth: 400 
                    })
`
    },

    {
        title: "How to transform points on a Grid ",
        setup: transform.setup,
        draw: transform.draw,
        code: ` /* Creating and Transforming a 2D grid */ 
import { createGrid } from "pretty-grid";

const grid = createGrid({   rows: 15, cols: 15, 
                            width: 400, height: 400 
                        }); 

const transformSineWave = (point) => {
    point.x += Math.sin(point.y * 0.015) * 20;
    return point;
}

grid.transform(transformSineWave)
`
    },
    {
        title: "How to draw all even/odd points on a Grid ",
        setup: drawEvenOdd.setup,
        draw: drawEvenOdd.draw,
        code: ` /* Creating and drawing selective points on a grid*/ 
import { createGrid, even, odd } from "pretty-grid";

const grid = createGrid({   rows: 8, cols: 8, 
                            width: 400, height: 400 
                        }); 

grid.every(point => {
    whiteCircle(point.x, point.y);
}, even())

grid.every(point => {
    orangeCircle(point.x, point.y);
}, odd())
`
    },
    ]
}