---
sidebar_position: 5
---

# Operators

Use Operators to combine any number of `Condition`s using logical operators. For example, To draw the points with an even column AND odd row indices:

```js
grid.draw(
  (point) => orangeCircle(point.x, point.y),
  and(evenCols(), oddRows())
);
```

![operators](/operators.png)