---
sidebar_position: 2
---

# Drawing

To draw the points on your grid using your library of choice the `Grid` class implements the [draw](../api//API.md#drawfunc-condition-⇒-grid) method. `Grid.draw` accepts a function in the form of <br/>

```ts
(point: GridPoint, col?: number, row?: number) => void
```

you could draw your grid in the following ways

```ts
// define your draw function and pass it to the Grid.draw method
const drawSomething = (point) => {
    /// use point.x and point.y to draw something cool on this point on the grid
}

grid.draw(drawSomething);


// or draw using an anonymous inline function
grid.draw(point => /* draw something on this point */);
```

> You could also use the optional `col` and `row` parameters to use the column and row indices of the point for your drawing logic.