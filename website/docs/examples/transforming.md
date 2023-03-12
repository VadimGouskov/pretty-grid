---
sidebar_position: 2
---

# Transforming

## Translate

Use the `translate` method to translate a grid by a x and y coordinate. For example to translate a grid by 10 pixels horizontally and 20 pixels vertically:

```js
grid.translate(10, 20);
```

to visualize this:

```js
grid.every((point) => whiteDot(point.x, point.y));
grid.translate(10, 20);
grid.every((point) => orangeCircle(point.x, point.y));
```

![translate](/translate.png)

To translate a grid on the z-axis, 3D grids implement the `translate` method using the 3rd `z` argument.

```ts
my3dGrid.translate(10, 20, 30); 
```

## Chaining

To write a sequence of `Grid` methods more compact, you chain grid methods after another. For example to translate a grid two times and draw it right afterwards:

```ts
grid.translate(10, 20);
    .translate(30, 0);
    .every(point => ...);
```

Currently following methods support chaining:

- every
- translate
