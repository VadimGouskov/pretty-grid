## Classes

<dl>
<dt><a href="#Grid">Grid</a></dt>
<dd></dd>
<dt><a href="#Grid3D">Grid3D</a></dt>
<dd></dd>
<dt><a href="#GridPoint">GridPoint</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#createGrid">createGrid</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Create a grid</p>
</dd>
<dt><a href="#createGrid3D">createGrid3D</a> ⇒ <code><a href="#Grid3D">Grid3D</a></code></dt>
<dd></dd>
<dt><a href="#createPoint">createPoint</a> ⇒ <code><a href="#GridPoint">GridPoint</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getPoints">getPoints()</a> ⇒ <code>Array.&lt;Array.&lt;GridPoint&gt;&gt;</code></dt>
<dd><p>Get all the current points on the grid
warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
To get a deep copy use grid.copy(). eg. grid.copy.get()</p>
</dd>
<dt><a href="#set">set()</a> ⇒ <code>void</code></dt>
<dd><p>Replaces all the current points on the grid
<b> warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array. </b></p>
</dd>
<dt><a href="#getPoint">getPoint(col, row)</a> ⇒ <code><a href="#GridPoint">GridPoint</a></code></dt>
<dd><p>Gets a point from from indeces [col, row]</p>
</dd>
<dt><a href="#getFlat">getFlat()</a> ⇒ <code><a href="#GridPoint">Array.&lt;GridPoint&gt;</a></code></dt>
<dd><p>returns a one dimensional array of GridPoints of the grid. One column pushed after the other.</p>
</dd>
<dt><del><a href="#draw">draw(func, condition)</a> ⇒ <code><a href="#Grid">Grid</a></code></del></dt>
<dd><p>Loops over the points in the grid, passing each point to the provided func parameter
Provide a drawing function</p>
</dd>
<dt><a href="#every">every(func, condition)</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Loops over the points in the grid, passing each point to the provided func parameter</p>
</dd>
<dt><a href="#transform">transform(func, condition)</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Transforms x, y values of points on the grid using the supplied transform function.
control which points are getting affected by supplying a condition</p>
</dd>
<dt><a href="#translate">translate(x, y, [condition])</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Translates the entire grid by x en y coordinates</p>
</dd>
<dt><a href="#copy">copy()</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Creates a deep copy of the current grid object</p>
</dd>
<dt><a href="#setPoint">setPoint(col, row, layer, point)</a></dt>
<dd></dd>
<dt><a href="#every">every(func, condition)</a> ⇒ <code><a href="#Grid3D">Grid3D</a></code></dt>
<dd><p>Loops over the points in the grid, passing each point to the provided func parameter</p>
</dd>
<dt><a href="#transform">transform(func, condition)</a> ⇒ <code><a href="#Grid3D">Grid3D</a></code></dt>
<dd><p>Transforms x, y, z values of points on the grid using the supplied transform function.
control which points are getting affected by supplying a condition</p>
</dd>
</dl>

<a name="Grid"></a>

## Grid
**Kind**: global class  
<a name="new_Grid_new"></a>

### new Grid(cols, rows, width, height, [shape])
The main Grid class containing all a two dimensional array of GridPoints and methods to manipulate the GridPoints on grid.


| Param | Type | Description |
| --- | --- | --- |
| cols | <code>number</code> | the amount of columns the grid needs to contain |
| rows | <code>number</code> | the amount of rows the grid needs to contain |
| width | <code>number</code> | the width of the grid |
| height | <code>number</code> | the height of the grid |
| [shape] | [<code>GridShape</code>](#GridShape) | the shape of the grid (RECTANGLE or ELLIPSE). Defaults to a rectangular shaped grid. |

<a name="Grid3D"></a>

## Grid3D
**Kind**: global class  
<a name="new_Grid3D_new"></a>

### new Grid3D(cols, rows, layers, width, height, depth)
The main Grid class containing all a two dimensional array of GridPoints and methods to manipulate the GridPoints on grid.


| Param | Type | Description |
| --- | --- | --- |
| cols | <code>number</code> | the amount of columns the grid needs to contain |
| rows | <code>number</code> | the amount of rows the grid needs to contain |
| layers | <code>number</code> | the amount of layers the grid needs to contain |
| width | <code>number</code> | the width of the grid |
| height | <code>number</code> | the height of the grid |
| depth | <code>number</code> | the depth of the grid |

<a name="GridPoint"></a>

## GridPoint
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the x coordinate of the point |
| y | <code>number</code> | the y coordinate of the point |
| z | <code>number</code> | the y coordinate of the point |

<a name="new_GridPoint_new"></a>

### new GridPoint(x, y, [z])
Represent a single point on the grid.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the x coordinate of the point |
| y | <code>number</code> | the y coordinate of the point |
| [z] | <code>number</code> | the y coordinate of the point |

<a name="createGrid"></a>

## createGrid ⇒ [<code>Grid</code>](#Grid)
Create a grid

**Kind**: global variable  

| Param | Type |
| --- | --- |
| options | <code>GridOptions</code> | 

**Example**  
```js
const grid = createGrid({cols: 3, rows: 5, width 1080, height: 1080});
```
<a name="createGrid3D"></a>

## createGrid3D ⇒ [<code>Grid3D</code>](#Grid3D)
**Kind**: global variable  

| Param |
| --- |
| options | 

**Example**  
```js
const grid = createGrid({cols: 3, rows: 5, layers: 8 , width 1080, height: 1080, depth: 1080});
```
<a name="createPoint"></a>

## createPoint ⇒ [<code>GridPoint</code>](#GridPoint)
**Kind**: global variable  
**Returns**: [<code>GridPoint</code>](#GridPoint) - a point on a the x, y, z plane. Can be set to a specific index on the grid using the `Grid` or `Grid3D` `setPoint` methods  

| Param |
| --- |
| x | 
| y | 
| z | 

**Example**  
```js
// Create and set a point on a grid
const grid = createGrid({cols:5, rows: 8, width 1920, height: 1080});
const firstPoint = createPoint(-10, -10);
grid.setPoint(0, 0, firstPoint);
```
<a name="GridShape"></a>

## GridShape : <code>enum</code>
Enum used to determine the grid shape in the [Grid](#Grid) constructor.
Values: RECTANGLE or ELLIPSE.

**Kind**: global enum  
**Read only**: true  
<a name="getPoints"></a>

## getPoints() ⇒ <code>Array.&lt;Array.&lt;GridPoint&gt;&gt;</code>
Get all the current points on the grid
warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
To get a deep copy use grid.copy(). eg. grid.copy.get()

**Kind**: global function  
<a name="set"></a>

## set() ⇒ <code>void</code>
Replaces all the current points on the grid
<b> warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array. </b>

**Kind**: global function  
<a name="getPoint"></a>

## getPoint(col, row) ⇒ [<code>GridPoint</code>](#GridPoint)
Gets a point from from indeces [col, row]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| col | <code>number</code> | the col index |
| row | <code>number</code> | the row index |

<a name="getFlat"></a>

## getFlat() ⇒ [<code>Array.&lt;GridPoint&gt;</code>](#GridPoint)
returns a one dimensional array of GridPoints of the grid. One column pushed after the other.

**Kind**: global function  
<a name="draw"></a>

## ~~draw(func, condition) ⇒ [<code>Grid</code>](#Grid)~~
***Deprecated***

Loops over the points in the grid, passing each point to the provided func parameter
Provide a drawing function

**Kind**: global function  
**Returns**: [<code>Grid</code>](#Grid) - returns @this Grid Object. Used for chaining Grid methods  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>GridFunction</code> | a function that handles drawing of each individual point |
| condition | <code>Condition</code> | an optional condition for which points to draw |

<a name="every"></a>

## every(func, condition) ⇒ [<code>Grid</code>](#Grid)
Loops over the points in the grid, passing each point to the provided func parameter

**Kind**: global function  
**Returns**: [<code>Grid</code>](#Grid) - returns @this Grid Object. Used for chaining Grid methods  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>GridFunction</code> | a function to access each point and row/col indices |
| condition | <code>Condition</code> | an optional condition for which points to execute func over |

<a name="transform"></a>

## transform(func, condition) ⇒ [<code>Grid</code>](#Grid)
Transforms x, y values of points on the grid using the supplied transform function.
control which points are getting affected by supplying a condition

**Kind**: global function  
**Returns**: [<code>Grid</code>](#Grid) - returns @this Grid Object. Used for chaining Grid methods

 * @example
// Translates the grid on the x-axis by 5 and on the y-axis by 8
grid.transform((point) => {
     point.x += 5;
     point.y += 8;
     return point; // Make sure to return the transformed point
})  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>TransformFunction</code> | a function to transform the point's x, y values. Must return the transformed point. |
| condition | <code>Condition</code> | an optional condition for which points to be affected |

<a name="translate"></a>

## translate(x, y, [condition]) ⇒ [<code>Grid</code>](#Grid)
Translates the entire grid by x en y coordinates

**Kind**: global function  
**Returns**: [<code>Grid</code>](#Grid) - returns @this Grid Object. Used for chaining Grid methods  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the x coordinates to translate the points with |
| y | <code>number</code> | the y coordinates to translate the points with |
| [condition] | <code>Condition</code> | an optional condition for which points to translate |

<a name="copy"></a>

## copy() ⇒ [<code>Grid</code>](#Grid)
Creates a deep copy of the current grid object

**Kind**: global function  
**Returns**: [<code>Grid</code>](#Grid) - a new instance of Grid of with the same coordinate values as @this Grid  
<a name="setPoint"></a>

## setPoint(col, row, layer, point)
**Kind**: global function  

| Param |
| --- |
| col | 
| row | 
| layer | 
| point | 

**Example**  
```js
// Create and set a point on a grid
const grid = createGrid({cols: 3, rows: 5, layers: 8 , width 1080, height: 1080, depth: 1080});
const firstPoint = createPoint(-540, -540, -540);
grid.setPoint(0, 0, 0, firstPoint);
```
<a name="every"></a>

## every(func, condition) ⇒ [<code>Grid3D</code>](#Grid3D)
Loops over the points in the grid, passing each point to the provided func parameter

**Kind**: global function  
**Returns**: [<code>Grid3D</code>](#Grid3D) - returns @this Grid3D Object. Used for chaining Grid methods  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>GridFunction</code> | a function to access each point and row/col indices |
| condition | <code>Condition</code> | an optional condition for which points to execute func over |

**Example**  
```js
// draw a spheres on the grid where the size depends on the position on the grid
// sphere is a pseudo function to draw spheres to a html canvas.
grid.every((point, col, row, layer) => {
     const radius = (col + row + layer + 1) * 5;
     sphere(point.x, point.y, point.z, radius);
})
```
<a name="transform"></a>

## transform(func, condition) ⇒ [<code>Grid3D</code>](#Grid3D)
Transforms x, y, z values of points on the grid using the supplied transform function.
control which points are getting affected by supplying a condition

**Kind**: global function  
**Returns**: [<code>Grid3D</code>](#Grid3D) - returns @this Grid3D Object. Used for chaining Grid methods  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>TransformFunction</code> | a function to transform the point's x, y values. **Must return the transformed point.** |
| condition | <code>Condition</code> | an optional condition for which points to be affected |

**Example**  
```js
// Translates the grid on the y-axis by 10 and on the z-axis by 5
grid.transform((point) => {
     point.y += 10;
     point.z += 5;
     return point; // Make sure to return the transformed point
})
```
