/**
 * Enum used to determine the origin grids are initialized from
 * Values: CORNER or CENTER.
 * @readonly
 * @enum {number}
 */
export enum ShapeOrigin {
    CORNER = 'corner',
    CENTER = 'center',
}

/**
 * Sets the origin mode for all rectangular grids that are initialized after calling this function. Default is CORNER.
 * @param {ShapeOrigin} origin The new origin for rectangle grids
 */
export const rectangleShapeOrigin = (origin: ShapeOrigin) => {
    shapeOrigins.Rectangle = origin;
};

/**
 * Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.
 * @param {ShapeOrigin} originthe The new origin for ellipse grids
 */
export const ellipseShapeOrigin = (origin: ShapeOrigin) => {
    shapeOrigins.Ellipse = origin;
};

// Only accesible within the library
export type ShapeOrigins = {
    Rectangle: ShapeOrigin;
    Ellipse: ShapeOrigin;
};

export const shapeOrigins: ShapeOrigins = {
    Rectangle: ShapeOrigin.CORNER,
    Ellipse: ShapeOrigin.CENTER,
};
