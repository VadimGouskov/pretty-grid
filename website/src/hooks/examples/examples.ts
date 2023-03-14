import p5Types from "p5";
import { create2d } from "./sketches/create-2d";

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
        draw: create2d.draw
    },
    {
        title: "How to Create a 2D Grid",
        setup: create2d.setup,
        draw: create2d.draw
    }
    ]
}