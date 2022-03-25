export declare enum ShapeOrigin {
    CORNER = "corner",
    CENTER = "center"
}
export declare type ShapeOrigins = {
    Rectangle: ShapeOrigin;
    Ellipse: ShapeOrigin;
};
export declare const shapeOrigins: ShapeOrigins;
export declare const ellipseShapeOrigin: (origin: ShapeOrigin) => void;
export declare const rectangleShapeOrigin: (origin: ShapeOrigin) => void;
