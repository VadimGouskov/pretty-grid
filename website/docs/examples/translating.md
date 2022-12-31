---
sidebar_position: 2
---

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