export declare type ShapeOrigin = "top-left" | "center";
/**
 * Sets the origin mode for all rectangular grids that are initialized after calling this function. Default is CORNER.
 * @param {ShapeOrigin} origin The new origin for rectangle grids
 */
export declare const rectangleShapeOrigin: (origin: ShapeOrigin) => void;
/**
 * Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.
 * @param {ShapeOrigin} origin the The new origin for ellipse grids
 */
export declare const ellipseShapeOrigin: (origin: ShapeOrigin) => void;
/**
 * Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.
 * @param {ShapeOrigin} origin the The new origin for ellipse grids
 */
export declare const cuboidShapeOrigin: (origin: ShapeOrigin) => void;
export declare type ShapeOrigins = {
    Rectangle: ShapeOrigin;
    Ellipse: ShapeOrigin;
    Cuboid: ShapeOrigin;
};
export declare const shapeOrigins: ShapeOrigins;
