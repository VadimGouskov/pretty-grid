export interface GridPointInterface {
    x: number;
    y: number;
    z?: number;

}

/**
 * Represent a single point on the grid.
 * @class
 * @name GridPoint
 * @param {number} x the x coordinate of the point
 * @param {number} y the y coordinate of the point
 * @param {number} y the y coordinate of the point
 * @property {number} x the x coordinate of the point
 * @property {number} y the y coordinate of the point
 */
export class GridPoint implements GridPointInterface {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}