"use strict";
exports.__esModule = true;
exports.all = function () { return function (point, col, row) { return true; }; };
exports.even = function () { return function (point, col, row) { return col % 2 === 0 && row % 2 === 0; }; };
exports.odd = function () { return function (point, col, row) { return col % 2 !== 0 && row % 2 !== 0; }; };
exports.evenCols = function () { return function (point, col, row) { return col % 2 === 0; }; };
exports.oddCols = function () { return function (point, col, row) { return col % 2 !== 0; }; };
exports.evenRows = function () { return function (point, col, row) { return row % 2 === 0; }; };
exports.oddRows = function () { return function (point, col, row) { return row % 2 !== 0; }; };
exports.rows = function (start, end) {
    return function (point, col, row) {
        return row >= start && row <= end;
    };
};
exports.cols = function (start, end) {
    return function (point, col, row) {
        return col >= start && col <= end;
    };
};
