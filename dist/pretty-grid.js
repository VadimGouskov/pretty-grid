/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["prettyGrid"] = factory();
	else
		root["prettyGrid"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/conditions.ts":
/*!***************************!*\
  !*** ./src/conditions.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"all\": () => (/* binding */ all),\n/* harmony export */   \"even\": () => (/* binding */ even),\n/* harmony export */   \"odd\": () => (/* binding */ odd),\n/* harmony export */   \"evenCols\": () => (/* binding */ evenCols),\n/* harmony export */   \"oddCols\": () => (/* binding */ oddCols),\n/* harmony export */   \"evenRows\": () => (/* binding */ evenRows),\n/* harmony export */   \"oddRows\": () => (/* binding */ oddRows),\n/* harmony export */   \"rows\": () => (/* binding */ rows),\n/* harmony export */   \"cols\": () => (/* binding */ cols)\n/* harmony export */ });\nvar all = function () { return function (_, __, ___) { return true; }; };\nvar even = function () { return function (_, col, row) { return col % 2 === 0 && row % 2 === 0; }; };\nvar odd = function () { return function (_, col, row) { return col % 2 !== 0 && row % 2 !== 0; }; };\nvar evenCols = function () { return function (_, col, __) { return col % 2 === 0; }; };\nvar oddCols = function () { return function (_, col, __) { return col % 2 !== 0; }; };\nvar evenRows = function () { return function (_, __, row) { return row % 2 === 0; }; };\nvar oddRows = function () { return function (_, __, row) { return row % 2 !== 0; }; };\nvar rows = function (start, end) {\n    return function (_, __, row) {\n        return row >= start && row <= end;\n    };\n};\nvar cols = function (start, end) {\n    return function (_, col, __) {\n        return col >= start && col <= end;\n    };\n};\n\n\n//# sourceURL=webpack://prettyGrid/./src/conditions.ts?");

/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rectangleShapeOrigin\": () => (/* binding */ rectangleShapeOrigin),\n/* harmony export */   \"ellipseShapeOrigin\": () => (/* binding */ ellipseShapeOrigin),\n/* harmony export */   \"cuboidShapeOrigin\": () => (/* binding */ cuboidShapeOrigin),\n/* harmony export */   \"shapeOrigins\": () => (/* binding */ shapeOrigins)\n/* harmony export */ });\n/**\n * Sets the origin mode for all rectangular grids that are initialized after calling this function. Default is CORNER.\n * @param {ShapeOrigin} origin The new origin for rectangle grids\n */\nvar rectangleShapeOrigin = function (origin) {\n    shapeOrigins.Rectangle = origin;\n};\n/**\n * Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.\n * @param {ShapeOrigin} origin the The new origin for ellipse grids\n */\nvar ellipseShapeOrigin = function (origin) {\n    shapeOrigins.Ellipse = origin;\n};\n/**\n * Sets the origin mode for all ellipse grids that are initialized after calling this function. Default is CENTER.\n * @param {ShapeOrigin} origin the The new origin for ellipse grids\n */\nvar cuboidShapeOrigin = function (origin) {\n    shapeOrigins.Ellipse = origin;\n};\nvar shapeOrigins = {\n    Rectangle: \"top-left\",\n    Ellipse: \"top-left\",\n    Cuboid: \"top-left\",\n};\n\n\n//# sourceURL=webpack://prettyGrid/./src/globals.ts?");

/***/ }),

/***/ "./src/grid-init.ts":
/*!**************************!*\
  !*** ./src/grid-init.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initRectangleGrid\": () => (/* binding */ initRectangleGrid),\n/* harmony export */   \"initEllipseGrid\": () => (/* binding */ initEllipseGrid)\n/* harmony export */ });\n/* harmony import */ var _grid_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-point */ \"./src/grid-point.ts\");\n\nfunction initRectangleGrid(cols, rows, width, height, depth) {\n    var stepCols = width / (cols - 1);\n    var stepRows = height / (rows - 1);\n    depth !== null && depth !== void 0 ? depth : (depth = 0);\n    if (cols === 0) {\n        cols = 1;\n        console.warn('Cannot create a grid with 0 columns, cols defaults to 1');\n    }\n    if (rows === 0) {\n        rows = 1;\n        console.warn('Cannot create a grid with 0 rows, rows defaults to 1');\n    }\n    var points = [[]];\n    for (var i = 0; i < cols; i++) {\n        points[i] = [];\n        for (var j = 0; j < rows; j++) {\n            points[i][j] = new _grid_point__WEBPACK_IMPORTED_MODULE_0__.GridPoint(i * stepCols, j * stepRows, depth);\n        }\n    }\n    return points;\n}\nvar initEllipseGrid = function (cols, rows, width, height, depth) {\n    var heightStep = height / rows;\n    var widthStep = width / rows;\n    var radialStep = (Math.PI * 2) / cols;\n    depth !== null && depth !== void 0 ? depth : (depth = 0);\n    var points = [[]];\n    for (var col = 0; col < cols; col++) {\n        points[col] = [];\n        var theta = col * radialStep;\n        for (var row = rows; row >= 1; row--) {\n            var ringWidth = row * widthStep;\n            var ringHeight = row * heightStep;\n            var pointX = (ringWidth / 2) * Math.cos(theta);\n            var pointY = (ringHeight / 2) * Math.sin(theta);\n            points[col][row - 1] = new _grid_point__WEBPACK_IMPORTED_MODULE_0__.GridPoint(pointX, pointY, depth);\n        }\n    }\n    return points;\n};\n\n\n//# sourceURL=webpack://prettyGrid/./src/grid-init.ts?");

/***/ }),

/***/ "./src/grid-point.ts":
/*!***************************!*\
  !*** ./src/grid-point.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GridPoint\": () => (/* binding */ GridPoint)\n/* harmony export */ });\n/**\n * Represent a single point on the grid.\n * @class\n * @name GridPoint\n * @param {number} x the x coordinate of the point\n * @param {number} y the y coordinate of the point\n * @param {number} y the y coordinate of the point\n * @property {number} x the x coordinate of the point\n * @property {number} y the y coordinate of the point\n */\nvar GridPoint = /** @class */ (function () {\n    function GridPoint(x, y, z) {\n        this.x = x;\n        this.y = y;\n        this.z = z;\n    }\n    return GridPoint;\n}());\n\n\n\n//# sourceURL=webpack://prettyGrid/./src/grid-point.ts?");

/***/ }),

/***/ "./src/grid.3d.ts":
/*!************************!*\
  !*** ./src/grid.3d.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grid3D\": () => (/* binding */ Grid3D),\n/* harmony export */   \"createGrid3D\": () => (/* binding */ createGrid3D)\n/* harmony export */ });\n/* harmony import */ var _grid_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-init */ \"./src/grid-init.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\nvar Grid3D = /** @class */ (function () {\n    function Grid3D(options) {\n        this.points = [[[]]];\n        var cols = options.cols, rows = options.rows, layers = options.layers, width = options.width, height = options.height, depth = options.depth;\n        var stepLayer = depth / (layers - 1);\n        if (layers === 0) {\n            layers = 1;\n            console.warn('Cannot create a grid with 0 layers, layers defaults to 1');\n        }\n        for (var layer = 0; layer < layers; layer++) {\n            this.points[layer] = (0,_grid_init__WEBPACK_IMPORTED_MODULE_0__.initRectangleGrid)(cols, rows, width, height, stepLayer * layer);\n        }\n    }\n    Grid3D.prototype.getPoints = function () {\n        return __spreadArray([], this.points, true);\n    };\n    Grid3D.prototype.getPoint = function (col, row, layer) {\n        return this.points[layer][col][row];\n    };\n    Grid3D.prototype.setPoint = function (col, row, layer, point) {\n        this.points[layer][col][row] = point;\n    };\n    Grid3D.prototype.every = function (func, condition) {\n        this.points.forEach(function (layer, layerIndex) {\n            layer.forEach(function (col, colIndex) {\n                col.forEach(function (point, rowIndex) {\n                    if (!!condition && !condition(point, colIndex, rowIndex, layerIndex))\n                        return;\n                    func(point, colIndex, rowIndex);\n                });\n            });\n        });\n        return this;\n    };\n    Grid3D.prototype.translate = function (x, y, z, condition) {\n        this.points.forEach(function (layer, layerIndex) {\n            layer.forEach(function (col, colIndex) {\n                col.forEach(function (point, rowIndex) {\n                    if (!!condition && !condition(point, colIndex, rowIndex, layerIndex))\n                        return;\n                    point.x += x;\n                    point.y += y;\n                    point.z += z;\n                });\n            });\n        });\n        return this;\n    };\n    return Grid3D;\n}());\n\nvar createGrid3D = function (options) {\n    return new Grid3D(options);\n};\n\n\n//# sourceURL=webpack://prettyGrid/./src/grid.3d.ts?");

/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GridShape\": () => (/* binding */ GridShape),\n/* harmony export */   \"Grid\": () => (/* binding */ Grid),\n/* harmony export */   \"createGrid\": () => (/* binding */ createGrid)\n/* harmony export */ });\n/* harmony import */ var _grid_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-init */ \"./src/grid-init.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\n/**\n * Enum used to determine the grid shape in the [Grid]{@link #Grid} constructor.\n * Values: RECTANGLE or ELLIPSE.\n * @readonly\n * @enum {number}\n */\nvar GridShape;\n(function (GridShape) {\n    GridShape[GridShape[\"RECTANGLE\"] = 0] = \"RECTANGLE\";\n    GridShape[GridShape[\"ELLIPSE\"] = 1] = \"ELLIPSE\";\n})(GridShape || (GridShape = {}));\n/**\n * The main Grid class containing all a two dimensional array of GridPoints and methods to manipulate the GridPoints on grid.\n * @class\n * @name Grid\n * @param {number} cols the amount of columns the grid needs to contain\n * @param {number} rows the amount of rows the grid needs to contain\n * @param {number} width the width of the grid\n * @param {number} height the height of the grid\n * @param {GridShape} [shape] the shape of the grid (RECTANGLE or ELLIPSE). Defaults to a rectangular shaped grid.\n */\nvar Grid = /** @class */ (function () {\n    /**\n     * Instantiates a new 2 Dimensional Grid.\n     * The horizontal distance between each column: width / (cols - 1)\n     * The vertical distance between each row : height / (rows - 1)\n \n     */\n    function Grid(cols, rows, width, height, shape) {\n        this.points = [[]];\n        if (cols === 0) {\n            cols = 1;\n            console.warn('Cannot create a grid with 0 columns, cols defaults to 1');\n        }\n        if (rows === 0) {\n            rows = 1;\n            console.warn('Cannot create a grid with 0 rows, rows defaults to 1');\n        }\n        // initialize grid\n        if (shape === GridShape.ELLIPSE) {\n            this.points = (0,_grid_init__WEBPACK_IMPORTED_MODULE_0__.initEllipseGrid)(cols, rows, width, height);\n        }\n        else {\n            // default to rectangle grid\n            this.points = (0,_grid_init__WEBPACK_IMPORTED_MODULE_0__.initRectangleGrid)(cols, rows, width, height);\n        }\n    }\n    /**\n     * Get all the current points on the grid\n     * warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.\n     * To get a deep copy use grid.copy(). eg. grid.copy.get()\n     *\n     * @method\n     * @name getPoints\n     * @returns {GridPoint[][]}\n     *\n     \n     */\n    Grid.prototype.getPoints = function () {\n        return __spreadArray([], this.points, true);\n    };\n    /**\n     * Replaces all the current points on the grid\n     * <b> warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array. </b>\n     * @method\n     * @name set\n     *\n     * @returns {void}\n     */\n    Grid.prototype.set = function (points) {\n        // TODO set a deep copy makes more sence? or make it optional and provide a deep copy helper function\n        this.points = points;\n    };\n    /**\n     * Gets a point from from indeces [col, row]\n     * @method\n     * @name getPoint\n     * @param {number} col - the col index\n     * @param {number} row - the row index\n     * @returns {GridPoint}\n     */\n    Grid.prototype.getPoint = function (col, row) {\n        return this.points[col][row];\n    };\n    /**\n     * returns a one dimensional array of GridPoints of the grid. One column pushed after the other.\n     * @method\n     * @name getFlat\n     * @type {GridPoint[]}\n     */\n    Grid.prototype.getFlat = function () {\n        return this.points.reduce(function (acc, val) { return acc.concat(val); }, []);\n    };\n    /**\n     * Loops over the points in the grid, passing each point to the provided func parameter\n     * Provide a drawing function\n     * @deprecated\n     * @method\n     * @name draw\n     * @param {GridFunction} func - a function that handles drawing of each individual point\n     * @param {Condition} condition - an optional condition for which points to draw\n     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods\n     */\n    Grid.prototype.draw = function (func, condition) {\n        this.points.forEach(function (col, colIndex) {\n            return col.forEach(function (point, rowIndex) {\n                if (!!condition && !condition(point, colIndex, rowIndex))\n                    return;\n                func(point, colIndex, rowIndex);\n            });\n        });\n        return this;\n    };\n    /**\n     * Loops over the points in the grid, passing each point to the provided func parameter\n     * Provide a drawing function\n     * @method\n     * @name every\n     * @param {GridFunction} func - a function that handles drawing of each individual point\n     * @param {Condition} condition - an optional condition for which points to draw\n     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods\n     */\n    Grid.prototype.every = function (func, condition) {\n        this.points.forEach(function (col, colIndex) {\n            return col.forEach(function (point, rowIndex) {\n                if (!!condition && !condition(point, colIndex, rowIndex))\n                    return;\n                func(point, colIndex, rowIndex);\n            });\n        });\n        return this;\n    };\n    /**\n     * Translates the entire grid by x en y coordinates\n     * @method\n     * @name translate\n     * @param {number} x - the x coordinates to translate the points with\n     * @param {number} y - the y coordinates to translate the points with\n     * @param {Condition} [condition] - an optional condition for which points to translate\n     *\n     * @returns { Grid } returns @this Grid Object. Used for chaining Grid methods\n     */\n    Grid.prototype.translate = function (x, y, condition) {\n        this.points.forEach(function (col, colIndex) {\n            return col.forEach(function (point, rowIndex) {\n                if (!!condition && !condition(point, colIndex, rowIndex))\n                    return;\n                point.x += x;\n                point.y += y;\n            });\n        });\n        return this;\n    };\n    /**\n     * Creates a deep copy of the current grid object\n     * @method\n     * @name copy\n     * @returns { Grid } a new instance of Grid of with the same coordinate values as @this Grid\n     */\n    Grid.prototype.copy = function () {\n        var cols = this.points.length;\n        // TODO take into account posibility of modified row\n        var rows = this.points[0].length;\n        // Width and height of grid do not matter, these will get set\n        var copiedGrid = new Grid(cols, rows, 0, 0);\n        var pointsDeepCopy = JSON.parse(JSON.stringify(this.points));\n        copiedGrid.set(pointsDeepCopy);\n        return copiedGrid;\n    };\n    return Grid;\n}());\n\n/**\n* Create a grid\n*\n* @func\n* @name createGrid\n* @param {GridOptions} options\n* @returns {Grid}\n*/\nvar createGrid = function (options) {\n    return new Grid(options.cols, options.rows, options.width, options.height, options.shape);\n};\n\n\n//# sourceURL=webpack://prettyGrid/./src/grid.ts?");

/***/ }),

/***/ "./src/operators.ts":
/*!**************************!*\
  !*** ./src/operators.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"and\": () => (/* binding */ and),\n/* harmony export */   \"or\": () => (/* binding */ or),\n/* harmony export */   \"not\": () => (/* binding */ not)\n/* harmony export */ });\nvar and = function () {\n    var conditions = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        conditions[_i] = arguments[_i];\n    }\n    return function (point, col, row) {\n        for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {\n            var condition = conditions_1[_i];\n            if (!condition(point, col, row))\n                return false;\n        }\n        return true;\n    };\n};\nvar or = function () {\n    var conditions = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        conditions[_i] = arguments[_i];\n    }\n    return function (point, col, row) {\n        for (var _i = 0, conditions_2 = conditions; _i < conditions_2.length; _i++) {\n            var condition = conditions_2[_i];\n            if (condition(point, col, row))\n                return true;\n        }\n        return false;\n    };\n};\nvar not = function (condition) {\n    return function (point, col, row) { return !condition(point, col, row); };\n};\n\n\n//# sourceURL=webpack://prettyGrid/./src/operators.ts?");

/***/ }),

/***/ "./src/pretty-grid.ts":
/*!****************************!*\
  !*** ./src/pretty-grid.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGrid\": () => (/* reexport safe */ _grid__WEBPACK_IMPORTED_MODULE_0__.createGrid),\n/* harmony export */   \"Grid\": () => (/* reexport safe */ _grid__WEBPACK_IMPORTED_MODULE_0__.Grid),\n/* harmony export */   \"GridShape\": () => (/* reexport safe */ _grid__WEBPACK_IMPORTED_MODULE_0__.GridShape),\n/* harmony export */   \"createGrid3D\": () => (/* reexport safe */ _grid_3d__WEBPACK_IMPORTED_MODULE_1__.createGrid3D),\n/* harmony export */   \"Grid3D\": () => (/* reexport safe */ _grid_3d__WEBPACK_IMPORTED_MODULE_1__.Grid3D),\n/* harmony export */   \"even\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.even),\n/* harmony export */   \"odd\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.odd),\n/* harmony export */   \"evenCols\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.evenCols),\n/* harmony export */   \"oddCols\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.oddCols),\n/* harmony export */   \"evenRows\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.evenRows),\n/* harmony export */   \"oddRows\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.oddRows),\n/* harmony export */   \"rows\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.rows),\n/* harmony export */   \"cols\": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_2__.cols),\n/* harmony export */   \"and\": () => (/* reexport safe */ _operators__WEBPACK_IMPORTED_MODULE_3__.and),\n/* harmony export */   \"or\": () => (/* reexport safe */ _operators__WEBPACK_IMPORTED_MODULE_3__.or),\n/* harmony export */   \"not\": () => (/* reexport safe */ _operators__WEBPACK_IMPORTED_MODULE_3__.not),\n/* harmony export */   \"ellipseShapeOrigin\": () => (/* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_4__.ellipseShapeOrigin),\n/* harmony export */   \"rectangleShapeOrigin\": () => (/* reexport safe */ _globals__WEBPACK_IMPORTED_MODULE_4__.rectangleShapeOrigin)\n/* harmony export */ });\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ \"./src/grid.ts\");\n/* harmony import */ var _grid_3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.3d */ \"./src/grid.3d.ts\");\n/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditions */ \"./src/conditions.ts\");\n/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators */ \"./src/operators.ts\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals */ \"./src/globals.ts\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://prettyGrid/./src/pretty-grid.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pretty-grid.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});