## Classes

<dl>
<dt><a href="#GridPoint">GridPoint</a></dt>
<dd></dd>
<dt><a href="#Grid">Grid</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#get">get()</a> ⇒ <code>Array.&lt;Array.&lt;GridPoint&gt;&gt;</code></dt>
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
<dt><a href="#draw">draw(func, condition)</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Loops over the points in the grid, passing each point to the provided func parameter
Provide a drawing function</p>
</dd>
<dt><a href="#translate">translate(x, y, [condition])</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Translates the entire grid by x en y coordinates</p>
</dd>
<dt><a href="#copy">copy()</a> ⇒ <code><a href="#Grid">Grid</a></code></dt>
<dd><p>Creates a deep copy of the current grid object</p>
</dd>
<dt><a href="#rectangleShapeOrigin">rectangleShapeOrigin(origin)</a></dt>
<dd><p>Sets the origin mode for all rectangular grids that are initialized after calling this function. Default is CORNER.</p>
</dd>
<dt><a href="#ellipseShapeOrigin">ellipseShapeOrigin(origin)</a></dt>
<dd><p>Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.</p>
</dd>
</dl>

<a name="GridPoint"></a>

## GridPoint
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the x coordinate of the point |
| y | <code>number</code> | the x coordinate of the point |

<a name="new_GridPoint_new"></a>

### new GridPoint(x, y)
Represent a single point on the grid.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the x coordinate of the point |
| y | <code>number</code> | the x coordinate of the point |

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

<a name="GridShape"></a>

## GridShape : <code>enum</code>
Enum used to determine the grid shape in the [Grid](#Grid) constructor.
Values: RECTANGLE or ELLIPSE.

**Kind**: global enum  
**Read only**: true  
<a name="ShapeOrigin"></a>

## ShapeOrigin : <code>enum</code>
Enum used to determine the origin grids are initialized from
Values: CORNER or CENTER.

**Kind**: global enum  
**Read only**: true  
<a name="get"></a>

## get() ⇒ <code>Array.&lt;Array.&lt;GridPoint&gt;&gt;</code>
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

## draw(func, condition) ⇒ [<code>Grid</code>](#Grid)
Loops over the points in the grid, passing each point to the provided func parameter
Provide a drawing function

**Kind**: global function  
**Returns**: [<code>Grid</code>](#Grid) - returns @this Grid Object. Used for chaining Grid methods  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>GridFunction</code> | a function that handles drawing of each individual point |
| condition | <code>Condition</code> | an optional condition for which points to draw |

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
<a name="rectangleShapeOrigin"></a>

## rectangleShapeOrigin(origin)
Sets the origin mode for all rectangular grids that are initialized after calling this function. Default is CORNER.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| origin | [<code>ShapeOrigin</code>](#ShapeOrigin) | The new origin for rectangle grids |

<a name="ellipseShapeOrigin"></a>

## ellipseShapeOrigin(origin)
Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| origin | [<code>ShapeOrigin</code>](#ShapeOrigin) | the The new origin for ellipse grids |

