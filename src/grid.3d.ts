import { Condition } from "./conditions";
import { GridFunction } from "./gird.function";
import { initRectangleGrid } from "./grid-init";
import { GridPoint } from "./grid-point";

type Points3D = GridPoint[][][];

interface Grid3DInterface {
    get: () => Points3D;
    getPoint: (col: number, row: number, layer: number) => GridPoint;
    setPoint: (col: number, row: number, layer: number, point: GridPoint) => void
    every: (func: GridFunction, condition?: Condition) => Grid3D;
    translate: (x: number, y: number, z: number, condition?: Condition) => Grid3D;
}

type Grid3DOptions = {
    cols: number;
    rows: number;
    layers: number;
    width: number;
    height: number;
    depth: number;
}

export class Grid3D implements Grid3DInterface {
    private points: Points3D = [[[]]];

    constructor(options: Grid3DOptions) {
        let { cols, rows, layers, width, height, depth } = options;
        const stepLayer = depth / (layers - 1)

        if (layers === 0) {
            layers = 1;
            console.warn('Cannot create a grid with 0 layers, layers defaults to 1');
        }

        for (let layer = 0; layer < layers; layer++) {
            this.points[layer] = initRectangleGrid(cols, rows, width, height, stepLayer * layer);
        }
    }

    get() {
        return this.points;
    }

    getPoint(col: number, row: number, layer: number) {
        return this.points[layer][col][row]
    }

    setPoint(col: number, row: number, layer: number, point: GridPoint) {
        this.points[layer][col][row] = point;
    }
    every(func: GridFunction, condition?: Condition) {
        this.points.forEach((layer, layerIndex) => {
            layer.forEach((col, colIndex) => {
                col.forEach((point, rowIndex) => {
                    if (!!condition && !condition(point, colIndex, rowIndex, layerIndex)) return;
                    func(point, colIndex, rowIndex);
                })
            })
        })
        return this;
    }

    translate(x: number, y: number, z: number, condition?: Condition) {
        this.points.forEach((layer, layerIndex) => {
            layer.forEach((col, colIndex) => {
                col.forEach((point, rowIndex) => {
                    if (!!condition && !condition(point, colIndex, rowIndex, layerIndex)) return;
                    point.x += x;
                    point.y += y;
                    point.z += z;
                })
            })
        })
        return this;
    }

}

export const createGrid3D = (options: Grid3DOptions) => {
    return new Grid3D(options);
}