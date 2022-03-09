!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.prettyGrid=n():t.prettyGrid=n()}(this,(function(){return(()=>{"use strict";var t,n={d:(t,r)=>{for(var o in r)n.o(r,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};n.r(r),n.d(r,{Grid:()=>e,GridPoint:()=>o,GridShape:()=>t,and:()=>d,cols:()=>h,even:()=>i,evenCols:()=>f,evenRows:()=>s,not:()=>y,odd:()=>u,oddCols:()=>c,oddRows:()=>p,or:()=>l,rows:()=>a}),function(t){t[t.RECTANGLE=0]="RECTANGLE",t[t.ELLIPSE=1]="ELLIPSE"}(t||(t={}));var o=function(t,n){this.x=t,this.y=n},e=function(){function n(n,r,o,e,i){this.points=[[]],0===n&&(n=1,console.warn("Cannot create a grid with 0 columns, cols defaults to 1")),0===r&&(r=1,console.warn("Cannot create a grid with 0 rows, rows defaults to 1")),i===t.ELLIPSE?this.initEllipseGrid(n,r,o,e):this.initRectangleGrid(n,r,o,e)}return n.prototype.initRectangleGrid=function(t,n,r,e){for(var i=r/(t-1),u=e/(n-1),f=0;f<t;f++){this.points[f]=[];for(var c=0;c<n;c++)this.points[f][c]=new o(f*i,c*u)}},n.prototype.initEllipseGrid=function(t,n,r,e){for(var i=e/n,u=r/n,f=2*Math.PI/t,c=0;c<t;c++){this.points[c]=[];for(var s=c*f,p=n;p>=1;p--){var a=p*i,h=p*u/2*Math.cos(s),d=a/2*Math.sin(s);this.points[c][p-1]=new o(h,d)}}},n.prototype.get=function(){return this.points},n.prototype.set=function(t){this.points=t},n.prototype.getPoint=function(t,n){return this.points[t][n]},n.prototype.getFlat=function(){return this.points.reduce((function(t,n){return t.concat(n)}),[])},n.prototype.draw=function(t,n){return this.points.forEach((function(r,o){return r.forEach((function(r,e){n&&!n(r,o,e)||t(r)}))})),this},n.prototype.translate=function(t,n,r){return this.points.forEach((function(o,e){return o.forEach((function(o,i){r&&!r(o,e,i)||(o.x+=t,o.y+=n)}))})),this},n.prototype.copy=function(){var t=new n(this.points.length,this.points[0].length,0,0),r=JSON.parse(JSON.stringify(this.points));return t.set(r),t},n}(),i=function(){return function(t,n,r){return n%2==0&&r%2==0}},u=function(){return function(t,n,r){return n%2!=0&&r%2!=0}},f=function(){return function(t,n,r){return n%2==0}},c=function(){return function(t,n,r){return n%2!=0}},s=function(){return function(t,n,r){return r%2==0}},p=function(){return function(t,n,r){return r%2!=0}},a=function(t,n){return function(r,o,e){return e>=t&&e<=n}},h=function(t,n){return function(r,o,e){return o>=t&&o<=n}},d=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n,r,o){for(var e=0,i=t;e<i.length;e++)if(!(0,i[e])(n,r,o))return!1;return!0}},l=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n,r,o){for(var e=0,i=t;e<i.length;e++)if((0,i[e])(n,r,o))return!0;return!1}},y=function(t){return function(n,r,o){return!t(n,r,o)}};return r})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFOUVtQyxFQUE2QixXQUFpQixnQkFBQ2YsRUFBT3BCLEVBQUtFLEdBQVEsT0FBQUEsRUFBTSxHQUFNLElBRS9Fa0MsRUFBNEIsV0FBaUIsZ0JBQUNoQixFQUFPcEIsRUFBS0UsR0FBUSxPQUFBQSxFQUFNLEdBQU0sSUFFOUV0QixFQUNULFNBQUN5RCxFQUFlQyxHQUNoQixnQkFBQ2xCLEVBQU9wQixFQUFLRSxHQUNULE9BQU9BLEdBQU9tQyxHQUFTbkMsR0FBT29DLElBR3pCM0QsRUFDVCxTQUFDMEQsRUFBZUMsR0FDaEIsZ0JBQUNsQixFQUFPcEIsRUFBS0UsR0FDVCxPQUFPRixHQUFPcUMsR0FBU3JDLEdBQU9zQyxJQ3pCekJDLEVBQWdCLFcsSUFBQyxzREFDMUIsT0FBTyxTQUFDbkIsRUFBT3BCLEVBQUtFLEdBQ2hCLElBQXNCLFVBQUFzQyxFQUFBLGVBQ2xCLEtBQUt2QixFQURTLE1BQ0NHLEVBQU9wQixFQUFLRSxHQUFNLE9BQU8sRUFFNUMsT0FBTyxJQUlGdUMsRUFBZSxXLElBQUMsc0RBQ3pCLE9BQU8sU0FBQ3JCLEVBQU9wQixFQUFLRSxHQUNoQixJQUFzQixVQUFBc0MsRUFBQSxlQUNsQixJQUFJdkIsRUFEVSxNQUNBRyxFQUFPcEIsRUFBS0UsR0FBTSxPQUFPLEVBRTNDLE9BQU8sSUFJRndDLEVBQWdCLFNBQUN6QixHQUMxQixPQUFPLFNBQUNHLEVBQU9wQixFQUFLRSxHQUFRLE9BQUNlLEVBQVVHLEVBQU9wQixFQUFLRSxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmV0dHlHcmlkLy4vc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByZXR0eUdyaWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcmV0dHlHcmlkLy4vc3JjL2NvbmRpdGlvbnMudHMiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC8uL3NyYy9vcGVyYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJldHR5R3JpZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwcmV0dHlHcmlkXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsImltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJy4vY29uZGl0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEdyaWRGdW5jdGlvbiA9IChwb2ludDogR3JpZFBvaW50LCBjb2w/OiBudW1iZXIsIHJvdz86IG51bWJlcikgPT4gdm9pZDtcblxuLyoqXG4gKiBFbnVtIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBncmlkIHNoYXBlIGluIHRoZSBbR3JpZF17QGxpbmsgI0dyaWR9IGNvbnN0cnVjdG9yXG4gKiBAcmVhZG9ubHlcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBlbnVtIEdyaWRTaGFwZSB7XG4gICAgUkVDVEFOR0xFID0gMCxcbiAgICBFTExJUFNFID0gMSxcbn1cblxuLyoqXG4gKiBSZXByZXNlbnQgYSBzaW5nbGUgcG9pbnQgb24gdGhlIGdyaWQuXG4gKiBAY2xhc3NcbiAqIEBuYW1lIEdyaWRQb2ludFxuICogQHBhcmFtIHtudW1iZXJ9IHggdGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50XG4gKiBAcHJvcGVydHkge251bWJlcn0geCB0aGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEdyaWRQb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgbWFpbiBHcmlkIGNsYXNzIGNvbnRhaW5pbmcgYWxsIGEgdHdvIGRpbWVuc2lvbmFsIGFycmF5IG9mIEdyaWRQb2ludHMgYW5kIG1ldGhvZHMgdG8gbWFuaXB1bGF0ZSB0aGUgR3JpZFBvaW50cyBvbiBncmlkLlxuICogQGNsYXNzXG4gKiBAbmFtZSBHcmlkXG4gKiBAcGFyYW0ge251bWJlcn0gY29scyB0aGUgYW1vdW50IG9mIGNvbHVtbnMgdGhlIGdyaWQgbmVlZHMgdG8gY29udGFpblxuICogQHBhcmFtIHtudW1iZXJ9IHJvd3MgdGhlIGFtb3VudCBvZiByb3dzIHRoZSBncmlkIG5lZWRzIHRvIGNvbnRhaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCB0aGUgd2lkdGggb2YgdGhlIGdyaWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgdGhlIGhlaWdodCBvZiB0aGUgZ3JpZFxuICogQHBhcmFtIHtHcmlkU2hhcGV9IFtzaGFwZV0gdGhlIHNoYXBlIG9mIHRoZSBncmlkIChSRUNUQU5HTEUgb3IgRUxMSVBTRSkuIERlZmF1bHRzIHRvIGEgcmVjdGFuZ3VsYXIgc2hhcGVkIGdyaWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmlkIHtcbiAgICBwcml2YXRlIHBvaW50czogR3JpZFBvaW50W11bXSA9IFtbXV07XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBuZXcgMiBEaW1lbnNpb25hbCBHcmlkLlxuICAgICAqIFRoZSBob3Jpem9udGFsIGRpc3RhbmNlIGJldHdlZW4gZWFjaCBjb2x1bW46IHdpZHRoIC8gKGNvbHMgLSAxKVxuICAgICAqIFRoZSB2ZXJ0aWNhbCBkaXN0YW5jZSBiZXR3ZWVuIGVhY2ggcm93IDogaGVpZ2h0IC8gKHJvd3MgLSAxKVxuIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbHM6IG51bWJlciwgcm93czogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2hhcGU/OiBHcmlkU2hhcGUpIHtcbiAgICAgICAgaWYgKGNvbHMgPT09IDApIHtcbiAgICAgICAgICAgIGNvbHMgPSAxO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgY3JlYXRlIGEgZ3JpZCB3aXRoIDAgY29sdW1ucywgY29scyBkZWZhdWx0cyB0byAxJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm93cyA9PT0gMCkge1xuICAgICAgICAgICAgcm93cyA9IDE7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBjcmVhdGUgYSBncmlkIHdpdGggMCByb3dzLCByb3dzIGRlZmF1bHRzIHRvIDEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluaXRpYWxpemUgZ3JpZFxuICAgICAgICBpZiAoc2hhcGUgPT09IEdyaWRTaGFwZS5FTExJUFNFKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRFbGxpcHNlR3JpZChjb2xzLCByb3dzLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gcmVjdGFuZ2xlIGdyaWRcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlY3RhbmdsZUdyaWQoY29scywgcm93cywgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRSZWN0YW5nbGVHcmlkKGNvbHM6IG51bWJlciwgcm93czogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBzdGVwQ29scyA9IHdpZHRoIC8gKGNvbHMgLSAxKTtcbiAgICAgICAgY29uc3Qgc3RlcFJvd3MgPSBoZWlnaHQgLyAocm93cyAtIDEpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50c1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50c1tpXVtqXSA9IG5ldyBHcmlkUG9pbnQoaSAqIHN0ZXBDb2xzLCBqICogc3RlcFJvd3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RWxsaXBzZUdyaWQoY29sczogbnVtYmVyLCByb3dzOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhlaWdodFN0ZXAgPSBoZWlnaHQgLyByb3dzO1xuICAgICAgICBjb25zdCB3aWR0aFN0ZXAgPSB3aWR0aCAvIHJvd3M7XG4gICAgICAgIGNvbnN0IHJhZGlhbFN0ZXAgPSAoTWF0aC5QSSAqIDIpIC8gY29scztcblxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgdGhpcy5wb2ludHNbY29sXSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgdGhldGEgPSBjb2wgKiByYWRpYWxTdGVwO1xuXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSByb3dzOyByb3cgPj0gMTsgcm93LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByaW5nV2lkdGggPSByb3cgKiB3aWR0aFN0ZXA7XG4gICAgICAgICAgICAgICAgY29uc3QgcmluZ0hlaWdodCA9IHJvdyAqIGhlaWdodFN0ZXA7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9pbnRYID0gKHJpbmdXaWR0aCAvIDIpICogTWF0aC5jb3ModGhldGEpO1xuICAgICAgICAgICAgICAgIGxldCBwb2ludFkgPSAocmluZ0hlaWdodCAvIDIpICogTWF0aC5zaW4odGhldGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHNbY29sXVtyb3cgLSAxXSA9IG5ldyBHcmlkUG9pbnQocG9pbnRYLCBwb2ludFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCB0aGUgY3VycmVudCBwb2ludHMgb24gdGhlIGdyaWRcbiAgICAgKiB3YXJuaW5nOiBnZXRzIHRoZSBwb2ludHMgYXJyYXkgYnkgcmVmZXJlbmNlLiBDaGFuZ2VzIHRvIGluZGl2aWR1YWwgcG9pbnRzIHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZSBvcmlnaW5hbCBncmlkIG9iamVjdC5cbiAgICAgKiBUbyBnZXQgYSBkZWVwIGNvcHkgdXNlIGdyaWQuY29weSgpLiBlZy4gZ3JpZC5jb3B5LmdldCgpXG4gICAgICogXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBuYW1lIGdldFxuICAgICAqIEByZXR1cm5zIHtHcmlkUG9pbnRbXVtdfVxuICAgICAqXG5cbiAgICAgKi9cbiAgICBnZXQoKTogR3JpZFBvaW50W11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhbGwgdGhlIGN1cnJlbnQgcG9pbnRzIG9uIHRoZSBncmlkXG4gICAgICogPGI+IHdhcm5pbmc6IHNldHMgYSByZWZlcmVuY2UgdG8gdGhlIHByb3ZpZGVkIHBvaW50cy4gQ2hhbmdlcyBpbiBtYWRlIGJ5IHRoaXMgZ3JpZCBvYmplY3QgdG8gdGhlIHBvaW50cyB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgcHJvdmlkZWQgcG9pbnRzIGFycmF5LiA8L2I+XG4gICAgICogQG1ldGhvZFxuICAgICAqIEBuYW1lIHNldFxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgc2V0KHBvaW50czogR3JpZFBvaW50W11bXSk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPIHNldCBhIGRlZXAgY29weSBtYWtlcyBtb3JlIHNlbmNlPyBvciBtYWtlIGl0IG9wdGlvbmFsIGFuZCBwcm92aWRlIGEgZGVlcCBjb3B5IGhlbHBlciBmdW5jdGlvblxuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgcG9pbnQgZnJvbSBmcm9tIGluZGVjZXMgW2NvbCwgcm93XVxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbmFtZSBnZXRQb2ludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgLSB0aGUgY29sIGluZGV4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIHRoZSByb3cgaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7R3JpZFBvaW50fVxuICAgICAqL1xuXG4gICAgZ2V0UG9pbnQoY29sOiBudW1iZXIsIHJvdzogbnVtYmVyKTogR3JpZFBvaW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2NvbF1bcm93XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGEgb25lIGRpbWVuc2lvbmFsIGFycmF5IG9mIEdyaWRQb2ludHMgb2YgdGhlIGdyaWQuIE9uZSBjb2x1bW4gcHVzaGVkIGFmdGVyIHRoZSBvdGhlci5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG5hbWUgZ2V0RmxhdFxuICAgICAqIEB0eXBlIHtHcmlkUG9pbnRbXX1cbiAgICAgKi9cbiAgICBnZXRGbGF0KCk6IEdyaWRQb2ludFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3BzIG92ZXIgdGhlIHBvaW50cyBpbiB0aGUgZ3JpZCwgcGFzc2luZyBlYWNoIHBvaW50IHRvIHRoZSBwcm92aWRlZCBmdW5jIHBhcmFtZXRlclxuICAgICAqIFByb3ZpZGUgYSBkcmF3aW5nIGZ1bmN0aW9uXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBuYW1lIGRyYXdcbiAgICAgKiBAcGFyYW0ge0dyaWRGdW5jdGlvbn0gZnVuYyAtIGEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIGRyYXdpbmcgb2YgZWFjaCBpbmRpdmlkdWFsIHBvaW50XG4gICAgICogQHBhcmFtIHtDb25kaXRpb259IGNvbmRpdGlvbiAtIGFuIG9wdGlvbmFsIGNvbmRpdGlvbiBmb3Igd2hpY2ggcG9pbnRzIHRvIGRyYXdcbiAgICAgKiBAcmV0dXJucyB7IEdyaWQgfSByZXR1cm5zIEB0aGlzIEdyaWQgT2JqZWN0LiBVc2VkIGZvciBjaGFpbmluZyBHcmlkIG1ldGhvZHNcbiAgICAgKi9cbiAgICBkcmF3KGZ1bmM6IEdyaWRGdW5jdGlvbiwgY29uZGl0aW9uPzogQ29uZGl0aW9uKTogR3JpZCB7XG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+XG4gICAgICAgICAgICBjb2wuZm9yRWFjaCgocG9pbnQsIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhY29uZGl0aW9uICYmICFjb25kaXRpb24ocG9pbnQsIGNvbEluZGV4LCByb3dJbmRleCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBmdW5jKHBvaW50KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBlbnRpcmUgZ3JpZCBieSB4IGVuIHkgY29vcmRpbmF0ZXNcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG5hbWUgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSB0aGUgeCBjb29yZGluYXRlcyB0byB0cmFuc2xhdGUgdGhlIHBvaW50cyB3aXRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSB0aGUgeSBjb29yZGluYXRlcyB0byB0cmFuc2xhdGUgdGhlIHBvaW50cyB3aXRoXG4gICAgICogQHBhcmFtIHtDb25kaXRpb259IFtjb25kaXRpb25dIC0gYW4gb3B0aW9uYWwgY29uZGl0aW9uIGZvciB3aGljaCBwb2ludHMgdG8gdHJhbnNsYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7IEdyaWQgfSByZXR1cm5zIEB0aGlzIEdyaWQgT2JqZWN0LiBVc2VkIGZvciBjaGFpbmluZyBHcmlkIG1ldGhvZHNcbiAgICAgKi9cbiAgICB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbmRpdGlvbj86IENvbmRpdGlvbik6IEdyaWQge1xuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PlxuICAgICAgICAgICAgY29sLmZvckVhY2goKHBvaW50LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIWNvbmRpdGlvbiAmJiAhY29uZGl0aW9uKHBvaW50LCBjb2xJbmRleCwgcm93SW5kZXgpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgcG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICAgIHBvaW50LnkgKz0geTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSBjdXJyZW50IGdyaWQgb2JqZWN0XG4gICAgICogQG1ldGhvZFxuICAgICAqIEBuYW1lIGNvcHlcbiAgICAgKiBAcmV0dXJucyB7IEdyaWQgfSBhIG5ldyBpbnN0YW5jZSBvZiBHcmlkIG9mIHdpdGggdGhlIHNhbWUgY29vcmRpbmF0ZSB2YWx1ZXMgYXMgQHRoaXMgR3JpZFxuICAgICAqL1xuICAgIGNvcHkoKTogR3JpZCB7XG4gICAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLnBvaW50cy5sZW5ndGg7XG4gICAgICAgIC8vIFRPRE8gdGFrZSBpbnRvIGFjY291bnQgcG9zaWJpbGl0eSBvZiBtb2RpZmllZCByb3dcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMucG9pbnRzWzBdLmxlbmd0aDtcblxuICAgICAgICAvLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGdyaWQgZG8gbm90IG1hdHRlciwgdGhlc2Ugd2lsbCBnZXQgc2V0XG4gICAgICAgIGNvbnN0IGNvcGllZEdyaWQgPSBuZXcgR3JpZChjb2xzLCByb3dzLCAwLCAwKTtcbiAgICAgICAgY29uc3QgcG9pbnRzRGVlcENvcHk6IEdyaWRQb2ludFtdW10gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9pbnRzKSk7XG4gICAgICAgIGNvcGllZEdyaWQuc2V0KHBvaW50c0RlZXBDb3B5KTtcblxuICAgICAgICByZXR1cm4gY29waWVkR3JpZDtcbiAgICB9XG5cbiAgICAvKiBcbiAgICBnZXRTZWN0aW9uKHN0YXJ0Q29sOiBudW1iZXIsIGVuZENvbDogbnVtYmVyLCBzdGFydFJvdzogbnVtYmVyLCBlbmRSb3c6IG51bWJlcik6IEdyaWQge1xuICAgICAgICBjb25zdCBzbGljZSA9IHRoaXMucG9pbnRzLnNsaWNlKHN0YXJ0Q29sLCBlbmRDb2wgKyAxKS5tYXAoKGkpID0+IGkuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdyArIDEpKTtcbiAgICAgICAgY29uc3QgZ3JpZEZyb21TbGljZSA9IG5ldyBHcmlkKHNsaWNlWzBdLmxlbmd0aCwgc2xpY2UubGVuZ3RoLCAwLCAwKTtcbiAgICAgICAgZ3JpZEZyb21TbGljZS5zZXQoc2xpY2UpO1xuICAgICAgICByZXR1cm4gZ3JpZEZyb21TbGljZTtcbiAgICB9XG4gICAgKi9cbn1cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHcmlkUG9pbnQgfSBmcm9tICcuL2dyaWQnO1xuXG5leHBvcnQgdHlwZSBDb25kaXRpb24gPSAocG9pbnQ6IEdyaWRQb2ludCwgY29sPzogbnVtYmVyLCByb3c/OiBudW1iZXIpID0+IGJvb2xlYW47XG5cbmV4cG9ydCB0eXBlIENvbmRpdGlvbkNyZWF0b3IgPSAoLi4uYXJnczogYW55W10pID0+IENvbmRpdGlvbjtcblxuZXhwb3J0IGNvbnN0IGFsbDogQ29uZGl0aW9uQ3JlYXRvciA9ICgpOiBDb25kaXRpb24gPT4gKHBvaW50LCBjb2wsIHJvdykgPT4gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IGV2ZW46IENvbmRpdGlvbkNyZWF0b3IgPSAoKTogQ29uZGl0aW9uID0+IChwb2ludCwgY29sLCByb3cpID0+IGNvbCAlIDIgPT09IDAgJiYgcm93ICUgMiA9PT0gMDtcblxuZXhwb3J0IGNvbnN0IG9kZDogQ29uZGl0aW9uQ3JlYXRvciA9ICgpOiBDb25kaXRpb24gPT4gKHBvaW50LCBjb2wsIHJvdykgPT4gY29sICUgMiAhPT0gMCAmJiByb3cgJSAyICE9PSAwO1xuXG5leHBvcnQgY29uc3QgZXZlbkNvbHM6IENvbmRpdGlvbkNyZWF0b3IgPSAoKTogQ29uZGl0aW9uID0+IChwb2ludCwgY29sLCByb3cpID0+IGNvbCAlIDIgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBvZGRDb2xzOiBDb25kaXRpb25DcmVhdG9yID0gKCk6IENvbmRpdGlvbiA9PiAocG9pbnQsIGNvbCwgcm93KSA9PiBjb2wgJSAyICE9PSAwO1xuXG5leHBvcnQgY29uc3QgZXZlblJvd3M6IENvbmRpdGlvbkNyZWF0b3IgPSAoKTogQ29uZGl0aW9uID0+IChwb2ludCwgY29sLCByb3cpID0+IHJvdyAlIDIgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBvZGRSb3dzOiBDb25kaXRpb25DcmVhdG9yID0gKCk6IENvbmRpdGlvbiA9PiAocG9pbnQsIGNvbCwgcm93KSA9PiByb3cgJSAyICE9PSAwO1xuXG5leHBvcnQgY29uc3Qgcm93cyA9XG4gICAgKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQ29uZGl0aW9uID0+XG4gICAgKHBvaW50LCBjb2wsIHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93ID49IHN0YXJ0ICYmIHJvdyA8PSBlbmQ7XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGNvbHMgPVxuICAgIChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IENvbmRpdGlvbiA9PlxuICAgIChwb2ludCwgY29sLCByb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbCA+PSBzdGFydCAmJiBjb2wgPD0gZW5kO1xuICAgIH07XG4iLCJpbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICcuL2NvbmRpdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBPcGVyYXRvciA9ICguLi5jb25kaXRpb25zOiBDb25kaXRpb25bXSkgPT4gQ29uZGl0aW9uO1xuXG5leHBvcnQgY29uc3QgYW5kOiBPcGVyYXRvciA9ICguLi5jb25kaXRpb25zOiBDb25kaXRpb25bXSkgPT4ge1xuICAgIHJldHVybiAocG9pbnQsIGNvbCwgcm93KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNvbmRpdGlvbiBvZiBjb25kaXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbihwb2ludCwgY29sLCByb3cpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBvcjogT3BlcmF0b3IgPSAoLi4uY29uZGl0aW9uczogQ29uZGl0aW9uW10pID0+IHtcbiAgICByZXR1cm4gKHBvaW50LCBjb2wsIHJvdykgPT4ge1xuICAgICAgICBmb3IgKGxldCBjb25kaXRpb24gb2YgY29uZGl0aW9ucykge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihwb2ludCwgY29sLCByb3cpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3Q6IE9wZXJhdG9yID0gKGNvbmRpdGlvbjogQ29uZGl0aW9uKSA9PiB7XG4gICAgcmV0dXJuIChwb2ludCwgY29sLCByb3cpID0+ICFjb25kaXRpb24ocG9pbnQsIGNvbCwgcm93KTtcbn07XG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwidGhpcyIsIkdyaWRTaGFwZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwieCIsInkiLCJjb2xzIiwicm93cyIsIndpZHRoIiwiaGVpZ2h0Iiwic2hhcGUiLCJwb2ludHMiLCJjb25zb2xlIiwid2FybiIsIkVMTElQU0UiLCJpbml0RWxsaXBzZUdyaWQiLCJpbml0UmVjdGFuZ2xlR3JpZCIsInN0ZXBDb2xzIiwic3RlcFJvd3MiLCJpIiwiaiIsIkdyaWRQb2ludCIsImhlaWdodFN0ZXAiLCJ3aWR0aFN0ZXAiLCJyYWRpYWxTdGVwIiwiTWF0aCIsIlBJIiwiY29sIiwidGhldGEiLCJyb3ciLCJyaW5nSGVpZ2h0IiwicG9pbnRYIiwiY29zIiwicG9pbnRZIiwic2luIiwic2V0IiwiZ2V0UG9pbnQiLCJnZXRGbGF0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiY29uY2F0IiwiZHJhdyIsImZ1bmMiLCJjb25kaXRpb24iLCJmb3JFYWNoIiwiY29sSW5kZXgiLCJwb2ludCIsInJvd0luZGV4IiwidHJhbnNsYXRlIiwiY29weSIsImNvcGllZEdyaWQiLCJHcmlkIiwibGVuZ3RoIiwicG9pbnRzRGVlcENvcHkiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJldmVuIiwib2RkIiwiZXZlbkNvbHMiLCJvZGRDb2xzIiwiZXZlblJvd3MiLCJvZGRSb3dzIiwic3RhcnQiLCJlbmQiLCJhbmQiLCJjb25kaXRpb25zIiwib3IiLCJub3QiXSwic291cmNlUm9vdCI6IiJ9