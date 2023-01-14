---
id: intro
sidebar_position: 0
---

# Getting started

## Browser

For a browser based project, add the folowing script tag to your `index.html` file

```html
<script src="https://cdn.jsdelivr.net/npm/pretty-grid"></script>
```

All `pretty-grid` features can now be accessed from the `prettyGrid` global object.

```js
const grid = new prettyGrid.Grid(3, 5, 500, 500);
grid.draw(point => ...);
```

A browser example project can be found [here](https://github.com/VadimGouskov/pretty-grid/tree/main/examples/browser-simple-p5)

## Node

For a nodejs based project, install `pretty-grid` using:

```bash
npm install pretty-grid
```

How to import features from `pretty-grid`

```js
import { Grid } from 'pretty-grid';

const grid = new Grid(3, 5, 500, 500);
grid.draw(point => ...);
```

A node based example project can be found [here](https://github.com/VadimGouskov/pretty-grid/tree/main/examples/node-typescript-p5)
<br/>
<br/>

Now that you got everything ready, visit the [API reference](https://github.com/VadimGouskov/pretty-grid/wiki/API) or [Tutorials](https://github.com/VadimGouskov/pretty-grid/wiki/Tutorials) pages to start making Grids!
