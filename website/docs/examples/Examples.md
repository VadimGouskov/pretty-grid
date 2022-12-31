# Prerequisites

To try these Examples yourself, first setup your project following the steps in [getting started](https://github.com/VadimGouskov/pretty-grid/wiki#getting-started)

> There are many great (canvas) drawing libraries to choose from to create graphics in the browser. To make these Examples unopinionated, pseudo functions are used to illustrate the examples below fe. `whiteDot(x, y), orangeCircle(x, y)`, ... The `x` and `y` arguments represent the coordinates of each point on the grid.

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

You can create grids in different shapes by using the [GridShape enum](API#gridshape) as the optional 5th argument of the `Grid` constructor.

```ts
// new Grid (cols, rows, width, height, shape)
const ellipseGrid = new Grid(16, 8, 500, 500, GridShape.ELLIPSE);
```

![evenRows](/ellipse-grid.png)
<br/><br/>

> By default, the origin of a rectangular grid lays in the top left corner. The origin of the elliptical grid lays in the center of the ellipse.

# Drawing

To draw the points on your grid using your library of choice the `Grid` class implements the [draw](https://github.com/VadimGouskov/pretty-grid/wiki/API#drawfunc-condition--void) method. `Grid.draw` accepts a function in the form of <br/>

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

# Translating

Use the `translate` method to translate a grid by a x and y coordinate. For example to translate a grid by 10 pixels horizontally and 20 pixels vertically:

```js
grid.translate(10, 20);
```

to visualize this:

```js
grid.draw((point) => whiteDot(point.x, point.y));
grid.translate(10, 20);
grid.draw((point) => orangeCircle(point.x, point.y));
```

![translate](/translate.png)

# Chaining

To write a sequence of `Grid` methods more compact, you chain methods after another. For example to translate a grid two times and draw it right afterwards:

```ts
grid.translate(10, 20);
    .translate(30, 0);
    .draw(point => ...);
```

Currently following methods support chaining:

- draw
- translate

# Conditions

Some of `pretty-grid`'s `Grid` methods accept an optional [Condition](https://github.com/VadimGouskov/pretty-grid/blob/02c94cb0187fa8ef08ac96849c9edb3ecb4f0b38/src/conditions.ts#L3) to limit the `GridPoints` that that method affects. A `Condition` comes in the form of `(point, col, row) => boolean`. This method returns `true` or `false` for wether the `GridPoint` needs to be affected by the method or not. for example, if you only want to draw all the even numbered rows of the grid, use the evenRows condition:

```js
grid.draw((point) => whiteDot(point.x, point.y));
grid.draw((point) => orangeCircle(point.x, point.y), evenRows());
```

![evenRows](/conditions-evenRows-3.png)

Check the full list of condition functions available in `pretty-grid` [here](https://github.com/VadimGouskov/pretty-grid/blob/main/src/conditions.ts).

Although a Condition can be directly supplied to the methods supporting conditions, `pretty-grid` uses a `ConditionCreator` that returns a `Condition` function and accepts any number of parameters ([closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)).

if you want to write your own conditions, you have two options:

- write a `Condition` function if you only use the point's `x` and `y` values or it's column or row indices to determine the outcome of the condition

```js
const myCondition = (point, col, row) => {
    ... return a boolean based on your condition here based on point, col and/or row
}
// pass the condition function to the Grid method, fe. translate
grid.translate(10, 20, myCondition);
```

> note the absence of braces: You should pass the `Condition`, not the result of it. The condition gets evaluated inside the `Grid` method

- Write a [ConditionCreator](https://github.com/VadimGouskov/pretty-grid/blob/02c94cb0187fa8ef08ac96849c9edb3ecb4f0b38/src/conditions.ts#L5) that returns a [Condition](https://github.com/VadimGouskov/pretty-grid/blob/02c94cb0187fa8ef08ac96849c9edb3ecb4f0b38/src/conditions.ts#L3) if you want to provide any number of other arguments to base the condition on.

```js
const myConditionCreator = (arg1, arg2) => {
    return (point, col, row) => {
        ... return a boolean based on your condition here based on arg1, arg2,..
    }
}
// execute the ConditionCreator function, so a condition is returned and pass it to a Grid method, fe. translate
// "50" and "true" are pseudo arguments that the condition could be based on
grid.translate(10, 20, myConditionCreator(50, true));

```

> Here the ConditionCreator needs to be executed provided with each optional parameters (here `50` and `true`). The `Condition` returned by the `ConditionCreator` is then passed to the Grid method

# Operators

Use Operators to combine any number of `Condition`s using logical operators. For example, To draw the points with an even column AND odd row indices:

```js
grid.draw(
  (point) => orangeCircle(point.x, point.y),
  and(evenCols(), oddRows())
);
```

![operators](/operators.png)
