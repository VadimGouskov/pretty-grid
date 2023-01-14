---
sidebar_position: 3
---

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
