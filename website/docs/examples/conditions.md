---
sidebar_position: 4
---

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

> Here the `ConditionCreator needs` to be executed provided with each optional parameters (here `50` and `true`). The `Condition` returned by the `ConditionCreator` is then passed to the Grid method
