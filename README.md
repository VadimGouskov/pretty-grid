# Pretty Grid

![intro](assets/banner2.png)

**Create and manipulate grids using javascript.** 

## Documentation
Setup and documentation at  [the prety-grid docsite](https://prettygrid.vadimgouskov.com) ✨
 
  
## Quick install

### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/pretty-grid"></script>
```

### Node

```bash
npm install pretty-grid
```



## Introduction

Creating and manipulating a grid layout on an x-y-z plane requires repetative code involving nested for loops and n-d arrays. `pretty-grid` makes this process more straight-forward, readable and versatile.


Using `pretty-grid`, this simplifies to:

```ts
import { createGrid } from "pretty-grid";

const grid = createGrid({cols: 5, rows: 8, width: 1920, height: 1080});
```

for 3-Dimensional grid, use the `createGrid3d` method

```ts
import { createGrid3D } from "pretty-grid";

const grid = createGrid3D({cols: 3, rows: 5, layers: 8, width: 300, height: 500, depth: 800});
```

Using a couple of `pretty-grid`'s helper methods you can already create a complex looking grid layout in only a few lines of code:

```ts
import {Grid, and, oddRows, oddCols, evenRows} from 'pretty-grid'
// Grid (cols, rows, width, height)
const grid = new Grid(20, 10, 500, 500);
grid.every(point => whiteDot(point.x, point.y));
grid.every(point => orangeCircle(point.x, point.y), and(oddRows(), oddCols()));
grid.translate(10,10)
    .every(point => blueDot(point.x, point.y), evenRows());
...
```

> 
.

This results in:

![intro](assets/intro.png)

> To make this example unopinionated, we illustrate this example using the `whiteDot`, `orangeCircle` and `blueDot` pseudo methods to draw a grid on an html canvas. You as the developer, implement your own functions to draw to your target of choice. I use the amazing [p5.js library](https://p5js.org) for most of my examples.  


The full documentation can be found [here](https://prettygrid.vadimgouskov.com) ✨

## Examples

-   [Hello World](https://editor.p5js.org/VadimGouskov/sketches/m7-A9JZzn)
-   [Translating](https://editor.p5js.org/VadimGouskov/sketches/z5YkEcAWR)
-   [Operators: AND](https://editor.p5js.org/VadimGouskov/sketches/mp0Y_3N-S)
-   [Operators: OR](https://editor.p5js.org/VadimGouskov/sketches/TsPk41HtS)
-   [Operators: NOT](https://editor.p5js.org/VadimGouskov/sketches/Y8WipTN7U)
-   [Operators: AND OR NOT Combined](https://editor.p5js.org/VadimGouskov/sketches/owm9JDEHe)
-   [Custom Operators](https://editor.p5js.org/VadimGouskov/sketches/mHWaqUVFP)
-   [Shapes: Ellipse Grids](https://editor.p5js.org/VadimGouskov/sketches/gDVloSS0J)
-   [Shape Origins: Rectangle Grid](https://editor.p5js.org/VadimGouskov/sketches/HkOOuzeQz)
-   [Shape Origins: Ellipse Grid](https://editor.p5js.org/VadimGouskov/sketches/ROnn9dDoE)
-   [README example](https://editor.p5js.org/VadimGouskov/sketches/6CiLATPQ2)

> These editable code examples are created using p5.js editor. Feel free to use `pretty-grid` in combination with other js (drawing) libraries. The full p5.js editor collection can be found [here](https://editor.p5js.org/VadimGouskov/collections/1uEQLKloQ).

## Contributing

The goal of `pretty-grid` is to make grid drawing easier for everybody.
If you have a suggestion about the docs, API, tutorials or somethıng else, please post it in one of the folowing ways:

-   [Open an issue](https://github.com/VadimGouskov/pretty-grid/issues) on GitHub and tag it with the green "Suggestion" label

<!-- ## TODO

-   Global Grid origin modes
-   push/pop current state of the grid
-   rotate method
-   transform method: (supply your own function to apply transormations to the GridPoints)
-   3D Grid
-   ... -->
