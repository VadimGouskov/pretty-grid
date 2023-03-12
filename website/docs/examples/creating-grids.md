---
sidebar_position: 1
---

# Creating Grids

## Rectangular Grid

To create a grid, use the `createGrid` method. This method accepts an object to specify the amount of columns (`cols`), `rows`, `width` and `height` of the grid.

```js
const grid = createGrid({cols: 5, rows: 8, width: 500, height: 500});
```

Drawing circles for every point on a 500 x 500 canvas, this will produce following output:

![rectangular-grid](/creating-grid.png)

## Elliptical Grid
You can create elliptical grids as well by the setting the `shape` option to `GridShape.ELLIPSE` ([GridShape enum](../api/API.md#gridshape--enum)). 

```ts
const ellipseGrid = createGrid({cols: 16, rows: 8, width: 500, height: 500, shape: GridShape.ELLIPSE});
```

![ellipse-grid](/ellipse-grid.png)

## 3D Cuboid Grid 
Create 3D grids using the `createGrid3D` function. Just as with 2D grids, this function accepts an object to specify amount of columns (cols), rows, width and height of the grid. additionally you also pass the amount of `layers` and `depth` on the z-axis.
```ts
const grid = createGrid3D({ layers: 8, 
                            cols: 5, 
                            rows: 3, 
                            height: HEIGHT, 
                            width: WIDTH, 
                            depth: DEPTH })
```

![grid3d](/grid3d.png)


## Grid Origins
By default, the origin of a rectangular grid lays in the top left corner. The origin of the elliptical grid lays in the center of the ellipse.