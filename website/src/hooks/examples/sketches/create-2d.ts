import p5Types from "p5"; //Import this for typechecking and intellisense

const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
};

const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(250, 250, 70, 70);
};

export const create2d = { setup, draw };