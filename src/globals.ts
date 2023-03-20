
export type ShapeOrigin = "top-left" | "center"
/**
 * Sets the origin mode for all rectangular grids that are initialized after calling this function. Default is CORNER.
 * @param {ShapeOrigin} origin The new origin for rectangle grids
 */
export const rectangleShapeOrigin = (origin: ShapeOrigin) => {
    shapeOrigins.Rectangle = origin;
};

/**
 * Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.
 * @param {ShapeOrigin} origin the The new origin for ellipse grids
 */
export const ellipseShapeOrigin = (origin: ShapeOrigin) => {
    shapeOrigins.Ellipse = origin;
};

/**
 * Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.
 * @param {ShapeOrigin} origin the The new origin for ellipse grids
 */
export const cuboidShapeOrigin = (origin: ShapeOrigin) => {
    shapeOrigins.Ellipse = origin;
};

// Only accesible within the library
export type ShapeOrigins = {
    Rectangle: ShapeOrigin;
    Ellipse: ShapeOrigin;
    Cuboid: ShapeOrigin;
};

export const shapeOrigins: ShapeOrigins = {
    Rectangle: "top-left",
    Ellipse: "top-left",
    Cuboid: "top-left",
};
