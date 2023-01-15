---
sidebar_position: 1
---

# Creating Grids

To create a grid, initialise a new `Grid` object:

```js
// Grid(cols, rows, width, height)
const grid = new Grid(5, 8, 500, 500);
```

The first two arguments represent the numbers of columns and rows the grid needs to contain. The last two parameters represent the total width and height of the grid.

on a 500 x 500 canvas, this will produce following grid:

![evenRows](/creating-grid.png)
<br/><br/>

> The horizontal distance between each point is calculated by `width / (cols - 1)` and the vertical distance by `height / (rows -1)`

You can create grids in different shapes by using the [GridShape enum](../api/API.md#gridshape--enum) as the optional 5th argument of the `Grid` constructor.

```ts
// new Grid (cols, rows, width, height, shape)
const ellipseGrid = new Grid(16, 8, 500, 500, GridShape.ELLIPSE);
```

![evenRows](/ellipse-grid.png)
<br/><br/>

> By default, the origin of a rectangular grid lays in the top left corner. The origin of the elliptical grid lays in the center of the ellipse.