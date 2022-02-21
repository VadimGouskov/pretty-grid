# Pretty Grid
A grid drawing library

<b> This package is in alpha, so it is subject to heavy API changes during this early stage of development </b>

## Table of contents
- [Introduction](#introduction)
- [Getting started](#getting-started)
- [documentation](https://github.com/VadimGouskov/pretty-grid/wiki)
  - [API](https://github.com/VadimGouskov/pretty-grid/wiki/API)
  - [Tutorials](https://github.com/VadimGouskov/pretty-grid/wiki/tutorials)

## Introduction 
Creating and manipulating elements in grid structures involves a lot of boilerplate code involving nested for loops. 
`pretty-grid` provides a range of classes and methods to do the heavy lifting so you can focus on the esthetics and logic of your grid structures.

Using a couple of lines of code, you can already create a pretty complex looking grid.
```js
// Grid (cols, rows, width, height)
const grid = new Grid(20, 10, 500, 500);
grid.draw(point => whiteDot(point.x, point.y));
grid.draw(point => orangeCircle(point.x, point.y), and(oddRows(), oddCols()));
grid.translate(10,10)
    .draw(point => blueDot(point.x, point.y), evenRows());
...
```
results in:

![intro](assets/intro.png)

> To make this example unopinionated, we illustrate this example using the `whiteDot`,  `orangeCircle` and  `blueDot` pseudo methods to draw a grid on an html canvas. You as the developer, implement your own functions to draw to your target of choice.

## Getting started

### Browser

For a browser based project, add the folowing script tag to your `index.html` file

```html
<script src="https://cdn.jsdelivr.net/npm/pretty-grid"></script>
```

All `pretty-grid` features can now be accessed from the `prettyGrid` global object.

```js
const grid = new prettyGrid.Grid(3, 5, 500, 500);
grid.draw(point => ...));
```

A browser example project can be found [here](https://github.com/VadimGouskov/pretty-grid/tree/main/examples/browser-simple-p5)

### Node

For a nodejs based project, install `pretty-grid` using:

```bash
npm install pretty-grid
```

import features from `pretty-grid`

```js
import { Grid } from 'pretty-grid';

const grid = new Grid(3, 5, 500, 500);
grid.draw(point => ...));
```
A node based example project can be found [here](https://github.com/VadimGouskov/pretty-grid/tree/main/examples/node-typescript-p5)


<br />

## Docs

The full documentation can be found [here](https://github.com/VadimGouskov/pretty-grid/wiki)


## TODO
- Radial Grid
- 3D Grid
- ...

## Contributing
The goal of `pretty-grid` is to make grid drawing easier for everybody.
If you have a suggestion about the docs, API, tutorials or somethıng else, please post it in one of the folowing ways:
- [Open an issue](https://github.com/VadimGouskov/pretty-grid/issues) on GitHub and tag it with the green "Suggestion" label
- Fill out [this form](https://forms.office.com/r/Pz7nQk2iBA)

PRs by other contributers are not accepted in this early stage of development.
