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
 * @param {number} [z] the y coordinate of the point
 * @property {number} x the x coordinate of the point
 * @property {number} y the y coordinate of the point
 * @property {number} z the y coordinate of the point
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
/**
 * @name createPoint
 * @param x 
 * @param y 
 * @param z 
 * @returns {GridPoint} a point on a the x, y, z plane. Can be set to a specific index on the grid using the `Grid` or `Grid3D` `setPoint` methods 
 * 
 * @example 
 * // Create and set a point on a grid
 * const grid = createGrid({cols:5, rows: 8, width 1920, height: 1080});
 * const firstPoint = createPoint(-10, -10);
 * grid.setPoint(0, 0, firstPoint);
 */
export const createPoint = (x: number, y: number, z?: number): GridPoint => {
    return new GridPoint(x, y, z);
}