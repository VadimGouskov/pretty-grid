import { ShapeOrigin, shapeOrigins } from "./globals";
import { GridPoint } from "./grid-point";

export function initRectangleGrid(cols: number, rows: number, width: number, height: number, depth?: number): GridPoint[][] {
    const stepCols = width / (cols - 1);
    const stepRows = height / (rows - 1);

    depth ??= 0;

    // Defaults to Corner origin
    let originOffsetX = 0,
        originOffsetY = 0;
    if (shapeOrigins.Rectangle === ShapeOrigin.CENTER) {
        originOffsetX = -width / 2;
        originOffsetY = -height / 2;
    }

    const points: GridPoint[][] = [[]]

    for (let i = 0; i < cols; i++) {
        points[i] = [];
        for (let j = 0; j < rows; j++) {
            points[i][j] = new GridPoint(i * stepCols + originOffsetX, j * stepRows + originOffsetY, depth);
        }
    }

    return points;
}

export const initEllipseGrid = (cols: number, rows: number, width: number, height: number, depth?: number): GridPoint[][] => {
    const heightStep = height / rows;
    const widthStep = width / rows;
    const radialStep = (Math.PI * 2) / cols;

    depth ??= 0;

    // Defaults to Center origin
    let originOffsetX = 0,
        originOffsetY = 0;
    if (shapeOrigins.Ellipse === ShapeOrigin.CORNER) {
        originOffsetX = width / 2;
        originOffsetY = height / 2;
    }

    const points: GridPoint[][] = [[]];
    for (let col = 0; col < cols; col++) {
        points[col] = [];
        const theta = col * radialStep;

        for (let row = rows; row >= 1; row--) {
            const ringWidth = row * widthStep;
            const ringHeight = row * heightStep;

            let pointX = (ringWidth / 2) * Math.cos(theta);
            let pointY = (ringHeight / 2) * Math.sin(theta);

            points[col][row - 1] = new GridPoint(pointX + originOffsetX, pointY + originOffsetY, depth);
        }
    }
    return points;
}