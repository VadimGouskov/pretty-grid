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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "even": () => (/* binding */ even),
/* harmony export */   "odd": () => (/* binding */ odd),
/* harmony export */   "evenCols": () => (/* binding */ evenCols),
/* harmony export */   "oddCols": () => (/* binding */ oddCols),
/* harmony export */   "evenRows": () => (/* binding */ evenRows),
/* harmony export */   "oddRows": () => (/* binding */ oddRows),
/* harmony export */   "rows": () => (/* binding */ rows),
/* harmony export */   "cols": () => (/* binding */ cols)
/* harmony export */ });
var all = function () { return function (point, col, row) { return true; }; };
var even = function () { return function (point, col, row) { return col % 2 === 0 && row % 2 === 0; }; };
var odd = function () { return function (point, col, row) { return col % 2 !== 0 && row % 2 !== 0; }; };
var evenCols = function () { return function (point, col, row) { return col % 2 === 0; }; };
var oddCols = function () { return function (point, col, row) { return col % 2 !== 0; }; };
var evenRows = function () { return function (point, col, row) { return row % 2 === 0; }; };
var oddRows = function () { return function (point, col, row) { return row % 2 !== 0; }; };
var rows = function (start, end) {
    return function (point, col, row) {
        return row >= start && row <= end;
    };
};
var cols = function (start, end) {
    return function (point, col, row) {
        return col >= start && col <= end;
    };
};


/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridPoint": () => (/* binding */ GridPoint),
/* harmony export */   "Grid": () => (/* binding */ Grid)
/* harmony export */ });
var GridPoint = /** @class */ (function () {
    function GridPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return GridPoint;
}());

var Grid = /** @class */ (function () {
    /**
     * @constructor
     * Instantiates a new 2 Dimensional Grid.
     * The horizontal distance between each column: width / (cols - 1)
     * The vertical distance between each row : height / (rows - 1)
     * @param cols
     * @param rows
     * @param width
     * @param height
     */
    function Grid(cols, rows, width, height) {
        this.points = [[]];
        var stepCols = width / (cols - 1);
        var stepRows = height / (rows - 1);
        // initialize grid
        for (var i = 0; i < cols; i++) {
            this.points[i] = [];
            for (var j = 0; j < rows; j++) {
                this.points[i][j] = new GridPoint(i * stepCols, j * stepRows);
            }
        }
    }
    Object.defineProperty(Grid.prototype, "flat", {
        get: function () {
            return this.points.reduce(function (acc, val) { return acc.concat(val); }, []);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get all the current points on the grid
     * warning: gets the points array by reference. Changes to individual points will be reflected in the original grid object.
     * To get a deep copy use grid.copy(). eg. grid.copy.get()
     */
    Grid.prototype.get = function () {
        return this.points;
    };
    /**
     * Set / replace all the current points on the grid
     * warning: sets a reference to the provided points. Changes in made by this grid object to the points will be reflected in the provided points array.
     */
    // TODO set a deep copy makes more sence? or make it optional and provide a deep copy helper function
    Grid.prototype.set = function (points) {
        this.points = points;
    };
    /**
     * Gets a point from from indeces [col, row]
     * @param col
     * @param row
     */
    Grid.prototype.getPoint = function (col, row) {
        return this.points[col][row];
    };
    /**
     * Loops over the points in the grid, passing each point to the provided @param func
     * Provide a drawing function
     * @param func a function that handles drawing of each individual point
     */
    Grid.prototype.draw = function (func, condition) {
        this.points.forEach(function (col, colIndex) {
            return col.forEach(function (point, rowIndex) {
                if (!!condition && !condition(point, colIndex, rowIndex))
                    return;
                func(point);
            });
        });
    };
    /**
     * Translates the entire grid by @param x en @param y coordinates
     * @param x
     * @param y
     */
    Grid.prototype.translate = function (x, y, condition) {
        this.points.forEach(function (col, colIndex) {
            return col.forEach(function (point, rowIndex) {
                if (!!condition && !condition(point, colIndex, rowIndex))
                    return;
                point.x += x;
                point.y += y;
            });
        });
        return this;
    };
    /** Creates a deep copy of the current grid object
     */
    Grid.prototype.copy = function () {
        var cols = this.points.length;
        // TODO take into account posibility of modified row
        var rows = this.points[0].length;
        // Width and height of grid do not matter, these will get set
        var copiedGrid = new Grid(cols, rows, 0, 0);
        var pointsDeepCopy = JSON.parse(JSON.stringify(this.points));
        copiedGrid.set(pointsDeepCopy);
        return copiedGrid;
    };
    return Grid;
}());



/***/ }),

/***/ "./src/operators.ts":
/*!**************************!*\
  !*** ./src/operators.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "and": () => (/* binding */ and),
/* harmony export */   "or": () => (/* binding */ or)
/* harmony export */ });
var and = function () {
    var conditions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        conditions[_i] = arguments[_i];
    }
    return function (point, col, row) {
        for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {
            var condition = conditions_1[_i];
            if (!condition(point, col, row))
                return false;
        }
        return true;
    };
};
var or = function () {
    var conditions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        conditions[_i] = arguments[_i];
    }
    return function (point, col, row) {
        for (var _i = 0, conditions_2 = conditions; _i < conditions_2.length; _i++) {
            var condition = conditions_2[_i];
            if (condition(point, col, row))
                return true;
        }
        return false;
    };
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pretty-grid.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grid": () => (/* reexport safe */ _grid__WEBPACK_IMPORTED_MODULE_0__.Grid),
/* harmony export */   "GridPoint": () => (/* reexport safe */ _grid__WEBPACK_IMPORTED_MODULE_0__.GridPoint),
/* harmony export */   "even": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.even),
/* harmony export */   "odd": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.odd),
/* harmony export */   "evenCols": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.evenCols),
/* harmony export */   "oddCols": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.oddCols),
/* harmony export */   "evenRows": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.evenRows),
/* harmony export */   "oddRows": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.oddRows),
/* harmony export */   "rows": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.rows),
/* harmony export */   "cols": () => (/* reexport safe */ _conditions__WEBPACK_IMPORTED_MODULE_1__.cols),
/* harmony export */   "and": () => (/* reexport safe */ _operators__WEBPACK_IMPORTED_MODULE_2__.and),
/* harmony export */   "or": () => (/* reexport safe */ _operators__WEBPACK_IMPORTED_MODULE_2__.or)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditions */ "./src/conditions.ts");
/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators */ "./src/operators.ts");




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDNkQ7QUFDaEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmV0dHlHcmlkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9wcmV0dHlHcmlkLy4vc3JjL2NvbmRpdGlvbnMudHMiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC8uL3NyYy9ncmlkLnRzIiwid2VicGFjazovL3ByZXR0eUdyaWQvLi9zcmMvb3BlcmF0b3JzLnRzIiwid2VicGFjazovL3ByZXR0eUdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByZXR0eUdyaWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcmV0dHlHcmlkLy4vc3JjL3ByZXR0eS1ncmlkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInByZXR0eUdyaWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicHJldHR5R3JpZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImltcG9ydCB7IEdyaWRQb2ludCB9IGZyb20gJy4vZ3JpZCc7XG5cbmV4cG9ydCB0eXBlIENvbmRpdGlvbkZ1bmN0aW9uID0gKHBvaW50OiBHcmlkUG9pbnQsIGNvbD86IG51bWJlciwgcm93PzogbnVtYmVyKSA9PiBib29sZWFuO1xuXG5leHBvcnQgdHlwZSBDb25kaXRpb24gPSAoLi4uYXJnczogYW55W10pID0+IENvbmRpdGlvbkZ1bmN0aW9uO1xuXG5leHBvcnQgY29uc3QgYWxsOiBDb25kaXRpb24gPSAoKTogQ29uZGl0aW9uRnVuY3Rpb24gPT4gKHBvaW50LCBjb2wsIHJvdykgPT4gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IGV2ZW46IENvbmRpdGlvbiA9ICgpOiBDb25kaXRpb25GdW5jdGlvbiA9PiAocG9pbnQsIGNvbCwgcm93KSA9PiBjb2wgJSAyID09PSAwICYmIHJvdyAlIDIgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBvZGQ6IENvbmRpdGlvbiA9ICgpOiBDb25kaXRpb25GdW5jdGlvbiA9PiAocG9pbnQsIGNvbCwgcm93KSA9PiBjb2wgJSAyICE9PSAwICYmIHJvdyAlIDIgIT09IDA7XG5cbmV4cG9ydCBjb25zdCBldmVuQ29sczogQ29uZGl0aW9uID0gKCk6IENvbmRpdGlvbkZ1bmN0aW9uID0+IChwb2ludCwgY29sLCByb3cpID0+IGNvbCAlIDIgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBvZGRDb2xzOiBDb25kaXRpb24gPSAoKTogQ29uZGl0aW9uRnVuY3Rpb24gPT4gKHBvaW50LCBjb2wsIHJvdykgPT4gY29sICUgMiAhPT0gMDtcblxuZXhwb3J0IGNvbnN0IGV2ZW5Sb3dzOiBDb25kaXRpb24gPSAoKTogQ29uZGl0aW9uRnVuY3Rpb24gPT4gKHBvaW50LCBjb2wsIHJvdykgPT4gcm93ICUgMiA9PT0gMDtcblxuZXhwb3J0IGNvbnN0IG9kZFJvd3M6IENvbmRpdGlvbiA9ICgpOiBDb25kaXRpb25GdW5jdGlvbiA9PiAocG9pbnQsIGNvbCwgcm93KSA9PiByb3cgJSAyICE9PSAwO1xuXG5leHBvcnQgY29uc3Qgcm93cyA9XG4gICAgKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQ29uZGl0aW9uRnVuY3Rpb24gPT5cbiAgICAocG9pbnQsIGNvbCwgcm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cgPj0gc3RhcnQgJiYgcm93IDw9IGVuZDtcbiAgICB9O1xuXG5leHBvcnQgY29uc3QgY29scyA9XG4gICAgKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQ29uZGl0aW9uRnVuY3Rpb24gPT5cbiAgICAocG9pbnQsIGNvbCwgcm93KSA9PiB7XG4gICAgICAgIHJldHVybiBjb2wgPj0gc3RhcnQgJiYgY29sIDw9IGVuZDtcbiAgICB9O1xuIiwiaW1wb3J0IHsgQ29uZGl0aW9uLCBDb25kaXRpb25GdW5jdGlvbiB9IGZyb20gJy4vY29uZGl0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEdyaWRGdW5jdGlvbiA9IChwb2ludDogR3JpZFBvaW50LCBjb2w/OiBudW1iZXIsIHJvdz86IG51bWJlcikgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIEdyaWRQb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdyaWQge1xuICAgIHByaXZhdGUgcG9pbnRzOiBHcmlkUG9pbnRbXVtdID0gW1tdXTtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEluc3RhbnRpYXRlcyBhIG5ldyAyIERpbWVuc2lvbmFsIEdyaWQuXG4gICAgICogVGhlIGhvcml6b250YWwgZGlzdGFuY2UgYmV0d2VlbiBlYWNoIGNvbHVtbjogd2lkdGggLyAoY29scyAtIDEpXG4gICAgICogVGhlIHZlcnRpY2FsIGRpc3RhbmNlIGJldHdlZW4gZWFjaCByb3cgOiBoZWlnaHQgLyAocm93cyAtIDEpXG4gICAgICogQHBhcmFtIGNvbHNcbiAgICAgKiBAcGFyYW0gcm93c1xuICAgICAqIEBwYXJhbSB3aWR0aFxuICAgICAqIEBwYXJhbSBoZWlnaHRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb2xzOiBudW1iZXIsIHJvd3M6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc3RlcENvbHMgPSB3aWR0aCAvIChjb2xzIC0gMSk7XG4gICAgICAgIGNvbnN0IHN0ZXBSb3dzID0gaGVpZ2h0IC8gKHJvd3MgLSAxKTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGdyaWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzW2ldW2pdID0gbmV3IEdyaWRQb2ludChpICogc3RlcENvbHMsIGogKiBzdGVwUm93cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZmxhdCgpOiBHcmlkUG9pbnRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50cy5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHRoZSBjdXJyZW50IHBvaW50cyBvbiB0aGUgZ3JpZFxuICAgICAqIHdhcm5pbmc6IGdldHMgdGhlIHBvaW50cyBhcnJheSBieSByZWZlcmVuY2UuIENoYW5nZXMgdG8gaW5kaXZpZHVhbCBwb2ludHMgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlIG9yaWdpbmFsIGdyaWQgb2JqZWN0LlxuICAgICAqIFRvIGdldCBhIGRlZXAgY29weSB1c2UgZ3JpZC5jb3B5KCkuIGVnLiBncmlkLmNvcHkuZ2V0KClcbiAgICAgKi9cbiAgICBnZXQoKTogR3JpZFBvaW50W11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgLyByZXBsYWNlIGFsbCB0aGUgY3VycmVudCBwb2ludHMgb24gdGhlIGdyaWRcbiAgICAgKiB3YXJuaW5nOiBzZXRzIGEgcmVmZXJlbmNlIHRvIHRoZSBwcm92aWRlZCBwb2ludHMuIENoYW5nZXMgaW4gbWFkZSBieSB0aGlzIGdyaWQgb2JqZWN0IHRvIHRoZSBwb2ludHMgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlIHByb3ZpZGVkIHBvaW50cyBhcnJheS5cbiAgICAgKi9cbiAgICAvLyBUT0RPIHNldCBhIGRlZXAgY29weSBtYWtlcyBtb3JlIHNlbmNlPyBvciBtYWtlIGl0IG9wdGlvbmFsIGFuZCBwcm92aWRlIGEgZGVlcCBjb3B5IGhlbHBlciBmdW5jdGlvblxuICAgIHNldChwb2ludHM6IEdyaWRQb2ludFtdW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHBvaW50IGZyb20gZnJvbSBpbmRlY2VzIFtjb2wsIHJvd11cbiAgICAgKiBAcGFyYW0gY29sXG4gICAgICogQHBhcmFtIHJvd1xuICAgICAqL1xuXG4gICAgZ2V0UG9pbnQoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKTogR3JpZFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2NvbF1bcm93XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wcyBvdmVyIHRoZSBwb2ludHMgaW4gdGhlIGdyaWQsIHBhc3NpbmcgZWFjaCBwb2ludCB0byB0aGUgcHJvdmlkZWQgQHBhcmFtIGZ1bmNcbiAgICAgKiBQcm92aWRlIGEgZHJhd2luZyBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBmdW5jIGEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIGRyYXdpbmcgb2YgZWFjaCBpbmRpdmlkdWFsIHBvaW50XG4gICAgICovXG4gICAgZHJhdyhmdW5jOiBHcmlkRnVuY3Rpb24sIGNvbmRpdGlvbj86IENvbmRpdGlvbkZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+XG4gICAgICAgICAgICBjb2wuZm9yRWFjaCgocG9pbnQsIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhY29uZGl0aW9uICYmICFjb25kaXRpb24ocG9pbnQsIGNvbEluZGV4LCByb3dJbmRleCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBmdW5jKHBvaW50KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIGVudGlyZSBncmlkIGJ5IEBwYXJhbSB4IGVuIEBwYXJhbSB5IGNvb3JkaW5hdGVzXG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqL1xuICAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgY29uZGl0aW9uPzogQ29uZGl0aW9uRnVuY3Rpb24pOiBHcmlkIHtcbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT5cbiAgICAgICAgICAgIGNvbC5mb3JFYWNoKChwb2ludCwgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFjb25kaXRpb24gJiYgIWNvbmRpdGlvbihwb2ludCwgY29sSW5kZXgsIHJvd0luZGV4KSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgICBwb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIGN1cnJlbnQgZ3JpZCBvYmplY3RcbiAgICAgKi9cbiAgICBjb3B5KCk6IEdyaWQge1xuICAgICAgICBjb25zdCBjb2xzID0gdGhpcy5wb2ludHMubGVuZ3RoO1xuICAgICAgICAvLyBUT0RPIHRha2UgaW50byBhY2NvdW50IHBvc2liaWxpdHkgb2YgbW9kaWZpZWQgcm93XG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLnBvaW50c1swXS5sZW5ndGg7XG5cbiAgICAgICAgLy8gV2lkdGggYW5kIGhlaWdodCBvZiBncmlkIGRvIG5vdCBtYXR0ZXIsIHRoZXNlIHdpbGwgZ2V0IHNldFxuICAgICAgICBjb25zdCBjb3BpZWRHcmlkID0gbmV3IEdyaWQoY29scywgcm93cywgMCwgMCk7XG4gICAgICAgIGNvbnN0IHBvaW50c0RlZXBDb3B5OiBHcmlkUG9pbnRbXVtdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvaW50cykpO1xuICAgICAgICBjb3BpZWRHcmlkLnNldChwb2ludHNEZWVwQ29weSk7XG5cbiAgICAgICAgcmV0dXJuIGNvcGllZEdyaWQ7XG4gICAgfVxuXG4gICAgLyogXG4gICAgZ2V0U2VjdGlvbihzdGFydENvbDogbnVtYmVyLCBlbmRDb2w6IG51bWJlciwgc3RhcnRSb3c6IG51bWJlciwgZW5kUm93OiBudW1iZXIpOiBHcmlkIHtcbiAgICAgICAgY29uc3Qgc2xpY2UgPSB0aGlzLnBvaW50cy5zbGljZShzdGFydENvbCwgZW5kQ29sICsgMSkubWFwKChpKSA9PiBpLnNsaWNlKHN0YXJ0Um93LCBlbmRSb3cgKyAxKSk7XG4gICAgICAgIGNvbnN0IGdyaWRGcm9tU2xpY2UgPSBuZXcgR3JpZChzbGljZVswXS5sZW5ndGgsIHNsaWNlLmxlbmd0aCwgMCwgMCk7XG4gICAgICAgIGdyaWRGcm9tU2xpY2Uuc2V0KHNsaWNlKTtcbiAgICAgICAgcmV0dXJuIGdyaWRGcm9tU2xpY2U7XG4gICAgfVxuICAgICovXG59XG4iLCJpbXBvcnQgeyBDb25kaXRpb25GdW5jdGlvbiB9IGZyb20gJy4vY29uZGl0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIE9wZXJhdG9yID0gKC4uLmNvbmRpdGlvbnM6IENvbmRpdGlvbkZ1bmN0aW9uW10pID0+IENvbmRpdGlvbkZ1bmN0aW9uO1xuXG5leHBvcnQgY29uc3QgYW5kOiBPcGVyYXRvciA9ICguLi5jb25kaXRpb25zOiBDb25kaXRpb25GdW5jdGlvbltdKSA9PiB7XG4gICAgcmV0dXJuIChwb2ludCwgY29sLCByb3cpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY29uZGl0aW9uIG9mIGNvbmRpdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uKHBvaW50LCBjb2wsIHJvdykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG9yOiBPcGVyYXRvciA9ICguLi5jb25kaXRpb25zOiBDb25kaXRpb25GdW5jdGlvbltdKSA9PiB7XG4gICAgcmV0dXJuIChwb2ludCwgY29sLCByb3cpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY29uZGl0aW9uIG9mIGNvbmRpdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24ocG9pbnQsIGNvbCwgcm93KSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBHcmlkLCBHcmlkUG9pbnQgfSBmcm9tICcuL2dyaWQnO1xuZXhwb3J0IHsgQ29uZGl0aW9uLCBldmVuLCBvZGQsIGV2ZW5Db2xzLCBvZGRDb2xzLCBldmVuUm93cywgb2RkUm93cywgcm93cywgY29scyB9IGZyb20gJy4vY29uZGl0aW9ucyc7XG5leHBvcnQgeyBhbmQsIG9yIH0gZnJvbSAnLi9vcGVyYXRvcnMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9