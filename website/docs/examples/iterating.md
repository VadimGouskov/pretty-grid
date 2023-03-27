---
sidebar_position: 2
---

# Iterate

## Using the `every` method

The `every` method accepts a function in the form of <br/>

```ts
(point: GridPoint, col?: number, row?: number) => void
```
For 3D grids you can use the additional `layer` which is the point's layer index 
```ts
(point: GridPoint, col?: number, row?: number, layer?: number) => void
```

## Example
Grids are often used in visual applications. Use your favorite canvas drawing library in combination with `pretty-grid` to easily visualize your grid.
You can draw your grid in the following ways:

```ts
// define your draw function and pass it to the Grid.draw method
const drawSomething = (point) => {
    /// use point.x, point.y or point.z to draw something cool on this point on the grid
}

grid.every(drawSomething);


// or draw using an anonymous inline function
grid.every(point => /* draw something on this point */);
```

> You could also use the optional `col`, `row` and `layer` parameters to use the column, row and layer indices of the point for your drawing logic.