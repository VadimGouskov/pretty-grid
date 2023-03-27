---
sidebar_position: 5
---

# Use Operators

## What are operators
Use Operators to combine any number of `Condition`s using logical operators. For example, To draw the points with an even column AND odd row indices:

```js
grid.every(
  (point) => orangeCircle(point.x, point.y),
  and(evenCols(), oddRows())
);
```

![operators](/operators.png)

## Existing Operators
|||
|---|---|
|`and`  |  Logical AND  |  
|`or`  |  Logical OR   |   
|`not` |  Logical NOT  |   

