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

export type ShapeOrigins = {
    Rectangle: ShapeOrigin;
    Ellipse: ShapeOrigin;
};

export const shapeOrigins: ShapeOrigins = {
    Rectangle: ShapeOrigin.CORNER,
    Ellipse: ShapeOrigin.CENTER,
};

export const ellipseShapeOrigin = (origin: ShapeOrigin) => {
    shapeOrigins.Ellipse = origin;
};

/**
 *
 * @param origin
 */
export const rectangleShapeOrigin = (origin: ShapeOrigin) => {
    shapeOrigins.Rectangle = origin;
};
