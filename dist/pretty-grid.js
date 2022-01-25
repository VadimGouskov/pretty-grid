!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.prettyGrid=n():t.prettyGrid=n()}(this,(function(){return(()=>{"use strict";var t={d:(n,r)=>{for(var o in r)t.o(r,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{Grid:()=>o,GridPoint:()=>r,and:()=>d,cols:()=>a,even:()=>e,evenCols:()=>u,evenRows:()=>c,odd:()=>i,oddCols:()=>f,oddRows:()=>s,or:()=>h,rows:()=>p});var r=function(t,n){this.x=t,this.y=n},o=function(){function t(t,n,o,e){this.points=[[]];for(var i=o/(t-1),u=e/(n-1),f=0;f<t;f++){this.points[f]=[];for(var c=0;c<n;c++)this.points[f][c]=new r(f*i,c*u)}}return Object.defineProperty(t.prototype,"flat",{get:function(){return this.points.reduce((function(t,n){return t.concat(n)}),[])},enumerable:!1,configurable:!0}),t.prototype.get=function(){return this.points},t.prototype.set=function(t){this.points=t},t.prototype.getPoint=function(t,n){return this.points[t][n]},t.prototype.draw=function(t,n){this.points.forEach((function(r,o){return r.forEach((function(r,e){n&&!n(r,o,e)||t(r)}))}))},t.prototype.translate=function(t,n,r){return this.points.forEach((function(o,e){return o.forEach((function(o,i){r&&!r(o,e,i)||(o.x+=t,o.y+=n)}))})),this},t.prototype.copy=function(){var n=new t(this.points.length,this.points[0].length,0,0),r=JSON.parse(JSON.stringify(this.points));return n.set(r),n},t}(),e=function(){return function(t,n,r){return n%2==0&&r%2==0}},i=function(){return function(t,n,r){return n%2!=0&&r%2!=0}},u=function(){return function(t,n,r){return n%2==0}},f=function(){return function(t,n,r){return n%2!=0}},c=function(){return function(t,n,r){return r%2==0}},s=function(){return function(t,n,r){return r%2!=0}},p=function(t,n){return function(r,o,e){return e>=t&&e<=n}},a=function(t,n){return function(r,o,e){return o>=t&&o<=n}},d=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n,r,o){for(var e=0,i=t;e<i.length;e++)if(!(0,i[e])(n,r,o))return!1;return!0}},h=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n,r,o){for(var e=0,i=t;e<i.length;e++)if((0,i[e])(n,r,o))return!0;return!1}};return n})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixnQkFBQ1osRUFBT1AsRUFBS0MsR0FBUSxPQUFBRCxFQUFNLEdBQU0sR0FBS0MsRUFBTSxHQUFNLElBRTNGbUIsRUFBNkIsV0FBaUIsZ0JBQUNiLEVBQU9QLEVBQUtDLEdBQVEsT0FBQUQsRUFBTSxHQUFNLElBRS9FcUIsRUFBNEIsV0FBaUIsZ0JBQUNkLEVBQU9QLEVBQUtDLEdBQVEsT0FBQUQsRUFBTSxHQUFNLElBRTlFc0IsRUFBNkIsV0FBaUIsZ0JBQUNmLEVBQU9QLEVBQUtDLEdBQVEsT0FBQUEsRUFBTSxHQUFNLElBRS9Fc0IsRUFBNEIsV0FBaUIsZ0JBQUNoQixFQUFPUCxFQUFLQyxHQUFRLE9BQUFBLEVBQU0sR0FBTSxJQUU5RWhCLEVBQ1QsU0FBQ3VDLEVBQWVDLEdBQ2hCLGdCQUFDbEIsRUFBT1AsRUFBS0MsR0FDVCxPQUFPQSxHQUFPdUIsR0FBU3ZCLEdBQU93QixJQUd6QnpDLEVBQ1QsU0FBQ3dDLEVBQWVDLEdBQ2hCLGdCQUFDbEIsRUFBT1AsRUFBS0MsR0FDVCxPQUFPRCxHQUFPd0IsR0FBU3hCLEdBQU95QixJQ3pCekJDLEVBQWdCLFcsSUFBQyxzREFDMUIsT0FBTyxTQUFDbkIsRUFBT1AsRUFBS0MsR0FDaEIsSUFBc0IsVUFBQTBCLEVBQUEsZUFDbEIsS0FBS3ZCLEVBRFMsTUFDQ0csRUFBT1AsRUFBS0MsR0FBTSxPQUFPLEVBRTVDLE9BQU8sSUFJRjJCLEVBQWUsVyxJQUFDLHNEQUN6QixPQUFPLFNBQUNyQixFQUFPUCxFQUFLQyxHQUNoQixJQUFzQixVQUFBMEIsRUFBQSxlQUNsQixJQUFJdkIsRUFEVSxNQUNBRyxFQUFPUCxFQUFLQyxHQUFNLE9BQU8sRUFFM0MsT0FBTyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmV0dHlHcmlkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcmV0dHlHcmlkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ByZXR0eUdyaWQvLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly9wcmV0dHlHcmlkLy4vc3JjL2NvbmRpdGlvbnMudHMiLCJ3ZWJwYWNrOi8vcHJldHR5R3JpZC8uL3NyYy9vcGVyYXRvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJldHR5R3JpZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwcmV0dHlHcmlkXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICcuL2NvbmRpdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBHcmlkRnVuY3Rpb24gPSAocG9pbnQ6IEdyaWRQb2ludCwgY29sPzogbnVtYmVyLCByb3c/OiBudW1iZXIpID0+IHZvaWQ7XG5cbi8qKlxuICogUmVwcmVzZW50IGEgc2luZ2xlIHBvaW50IG9uIHRoZSBncmlkLlxuICogQGNsYXNzXG4gKiBAbmFtZSBHcmlkUG9pbnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4OiB0aGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHk6IHRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50XG4gKi9cbmV4cG9ydCBjbGFzcyBHcmlkUG9pbnQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIG1haW4gR3JpZCBjbGFzcyBjb250YWluaW5nIGFsbCBhIHR3byBkaW1lbnNpb25hbCBhcnJheSBvZiBHcmlkUG9pbnRzIGFuZCBtZXRob2RzIHRvIG1hbmlwdWxhdGUgdGhlIEdyaWRQb2ludHMgb24gZ3JpZC5cbiAqIEBjbGFzc1xuICogQG5hbWUgR3JpZFxuICovXG5leHBvcnQgY2xhc3MgR3JpZCB7XG4gICAgcHJpdmF0ZSBwb2ludHM6IEdyaWRQb2ludFtdW10gPSBbW11dO1xuXG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGVzIGEgbmV3IDIgRGltZW5zaW9uYWwgR3JpZC5cbiAgICAgKiBUaGUgaG9yaXpvbnRhbCBkaXN0YW5jZSBiZXR3ZWVuIGVhY2ggY29sdW1uOiB3aWR0aCAvIChjb2xzIC0gMSlcbiAgICAgKiBUaGUgdmVydGljYWwgZGlzdGFuY2UgYmV0d2VlbiBlYWNoIHJvdyA6IGhlaWdodCAvIChyb3dzIC0gMSlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gY29sc1xuICAgICAqIEBwYXJhbSByb3dzXG4gICAgICogQHBhcmFtIHdpZHRoXG4gICAgICogQHBhcmFtIGhlaWdodFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbHM6IG51bWJlciwgcm93czogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBzdGVwQ29scyA9IHdpZHRoIC8gKGNvbHMgLSAxKTtcbiAgICAgICAgY29uc3Qgc3RlcFJvd3MgPSBoZWlnaHQgLyAocm93cyAtIDEpO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgZ3JpZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wb2ludHNbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHNbaV1bal0gPSBuZXcgR3JpZFBvaW50KGkgKiBzdGVwQ29scywgaiAqIHN0ZXBSb3dzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGEgb25lIGRpbWVuc2lvbmFsIGFycmF5IG9mIEdyaWRQb2ludHMgb2YgdGhlIGdyaWQuIE9uZSBjb2x1bW4gcHVzaGVkIGFmdGVyIHRoZSBvdGhlci5cbiAgICAgKiBAbmFtZSBmbGF0XG4gICAgICogQHR5cGUge0dyaWRQb2ludFtdfVxuICAgICAqL1xuICAgIGdldCBmbGF0KCk6IEdyaWRQb2ludFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGhlIGN1cnJlbnQgcG9pbnRzIG9uIHRoZSBncmlkXG4gICAgICogd2FybmluZzogZ2V0cyB0aGUgcG9pbnRzIGFycmF5IGJ5IHJlZmVyZW5jZS4gQ2hhbmdlcyB0byBpbmRpdmlkdWFsIHBvaW50cyB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgb3JpZ2luYWwgZ3JpZCBvYmplY3QuXG4gICAgICogVG8gZ2V0IGEgZGVlcCBjb3B5IHVzZSBncmlkLmNvcHkoKS4gZWcuIGdyaWQuY29weS5nZXQoKVxuICAgICAqIFxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbmFtZSBnZXRcbiAgICAgKiBAcmV0dXJucyB7R3JpZFBvaW50W11bXX1cbiAgICAgKlxuXG4gICAgICovXG4gICAgZ2V0KCk6IEdyaWRQb2ludFtdW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5wb2ludHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYWxsIHRoZSBjdXJyZW50IHBvaW50cyBvbiB0aGUgZ3JpZFxuICAgICAqIHdhcm5pbmc6IHNldHMgYSByZWZlcmVuY2UgdG8gdGhlIHByb3ZpZGVkIHBvaW50cy4gQ2hhbmdlcyBpbiBtYWRlIGJ5IHRoaXMgZ3JpZCBvYmplY3QgdG8gdGhlIHBvaW50cyB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGUgcHJvdmlkZWQgcG9pbnRzIGFycmF5LlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbmFtZSBzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHNldChwb2ludHM6IEdyaWRQb2ludFtdW10pOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETyBzZXQgYSBkZWVwIGNvcHkgbWFrZXMgbW9yZSBzZW5jZT8gb3IgbWFrZSBpdCBvcHRpb25hbCBhbmQgcHJvdmlkZSBhIGRlZXAgY29weSBoZWxwZXIgZnVuY3Rpb25cbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHBvaW50IGZyb20gZnJvbSBpbmRlY2VzIFtjb2wsIHJvd11cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG5hbWUgZ2V0UG9pbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sIC0gdGhlIGNvbCBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSB0aGUgcm93IGluZGV4XG4gICAgICogQHJldHVybnMge0dyaWRQb2ludH1cbiAgICAgKi9cblxuICAgIGdldFBvaW50KGNvbDogbnVtYmVyLCByb3c6IG51bWJlcik6IEdyaWRQb2ludCB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50c1tjb2xdW3Jvd107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9vcHMgb3ZlciB0aGUgcG9pbnRzIGluIHRoZSBncmlkLCBwYXNzaW5nIGVhY2ggcG9pbnQgdG8gdGhlIHByb3ZpZGVkIGZ1bmMgcGFyYW1ldGVyXG4gICAgICogUHJvdmlkZSBhIGRyYXdpbmcgZnVuY3Rpb25cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG5hbWUgZHJhd1xuICAgICAqIEBwYXJhbSB7R3JpZEZ1bmN0aW9ufSBmdW5jIC0gYSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgZHJhd2luZyBvZiBlYWNoIGluZGl2aWR1YWwgcG9pbnRcbiAgICAgKiBAcGFyYW0ge0NvbmRpdGlvbn0gY29uZGl0aW9uIC0gYW4gb3B0aW9uYWwgY29uZGl0aW9uIGZvciB3aGljaCBwb2ludHMgdG8gZHJhd1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXcoZnVuYzogR3JpZEZ1bmN0aW9uLCBjb25kaXRpb24/OiBDb25kaXRpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT5cbiAgICAgICAgICAgIGNvbC5mb3JFYWNoKChwb2ludCwgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFjb25kaXRpb24gJiYgIWNvbmRpdGlvbihwb2ludCwgY29sSW5kZXgsIHJvd0luZGV4KSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGZ1bmMocG9pbnQpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyB0aGUgZW50aXJlIGdyaWQgYnkgeCBlbiB5IGNvb3JkaW5hdGVzXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBuYW1lIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gdGhlIHggY29vcmRpbmF0ZXMgdG8gdHJhbnNsYXRlIHRoZSBwb2ludHMgd2l0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gdGhlIHkgY29vcmRpbmF0ZXMgdG8gdHJhbnNsYXRlIHRoZSBwb2ludHMgd2l0aFxuICAgICAqIEBwYXJhbSB7Q29uZGl0aW9ufSBbY29uZGl0aW9uXSAtIGFuIG9wdGlvbmFsIGNvbmRpdGlvbiBmb3Igd2hpY2ggcG9pbnRzIHRvIHRyYW5zbGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMgeyBHcmlkIH0gcmV0dXJucyBAdGhpcyBHcmlkIE9iamVjdC4gVXNlZCBmb3IgY2hhaW5pbmcgR3JpZCBtZXRob2RzXG4gICAgICovXG4gICAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBjb25kaXRpb24/OiBDb25kaXRpb24pOiBHcmlkIHtcbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT5cbiAgICAgICAgICAgIGNvbC5mb3JFYWNoKChwb2ludCwgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFjb25kaXRpb24gJiYgIWNvbmRpdGlvbihwb2ludCwgY29sSW5kZXgsIHJvd0luZGV4KSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgICBwb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiB0aGUgY3VycmVudCBncmlkIG9iamVjdFxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbmFtZSBjb3B5XG4gICAgICogQHJldHVybnMgeyBHcmlkIH0gYSBuZXcgaW5zdGFuY2Ugb2YgR3JpZCBvZiB3aXRoIHRoZSBzYW1lIGNvb3JkaW5hdGUgdmFsdWVzIGFzIEB0aGlzIEdyaWRcbiAgICAgKi9cbiAgICBjb3B5KCk6IEdyaWQge1xuICAgICAgICBjb25zdCBjb2xzID0gdGhpcy5wb2ludHMubGVuZ3RoO1xuICAgICAgICAvLyBUT0RPIHRha2UgaW50byBhY2NvdW50IHBvc2liaWxpdHkgb2YgbW9kaWZpZWQgcm93XG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLnBvaW50c1swXS5sZW5ndGg7XG5cbiAgICAgICAgLy8gV2lkdGggYW5kIGhlaWdodCBvZiBncmlkIGRvIG5vdCBtYXR0ZXIsIHRoZXNlIHdpbGwgZ2V0IHNldFxuICAgICAgICBjb25zdCBjb3BpZWRHcmlkID0gbmV3IEdyaWQoY29scywgcm93cywgMCwgMCk7XG4gICAgICAgIGNvbnN0IHBvaW50c0RlZXBDb3B5OiBHcmlkUG9pbnRbXVtdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvaW50cykpO1xuICAgICAgICBjb3BpZWRHcmlkLnNldChwb2ludHNEZWVwQ29weSk7XG5cbiAgICAgICAgcmV0dXJuIGNvcGllZEdyaWQ7XG4gICAgfVxuXG4gICAgLyogXG4gICAgZ2V0U2VjdGlvbihzdGFydENvbDogbnVtYmVyLCBlbmRDb2w6IG51bWJlciwgc3RhcnRSb3c6IG51bWJlciwgZW5kUm93OiBudW1iZXIpOiBHcmlkIHtcbiAgICAgICAgY29uc3Qgc2xpY2UgPSB0aGlzLnBvaW50cy5zbGljZShzdGFydENvbCwgZW5kQ29sICsgMSkubWFwKChpKSA9PiBpLnNsaWNlKHN0YXJ0Um93LCBlbmRSb3cgKyAxKSk7XG4gICAgICAgIGNvbnN0IGdyaWRGcm9tU2xpY2UgPSBuZXcgR3JpZChzbGljZVswXS5sZW5ndGgsIHNsaWNlLmxlbmd0aCwgMCwgMCk7XG4gICAgICAgIGdyaWRGcm9tU2xpY2Uuc2V0KHNsaWNlKTtcbiAgICAgICAgcmV0dXJuIGdyaWRGcm9tU2xpY2U7XG4gICAgfVxuICAgICovXG59XG4iLCJpbXBvcnQgeyBHcmlkUG9pbnQgfSBmcm9tICcuL2dyaWQnO1xuXG5leHBvcnQgdHlwZSBDb25kaXRpb24gPSAocG9pbnQ6IEdyaWRQb2ludCwgY29sPzogbnVtYmVyLCByb3c/OiBudW1iZXIpID0+IGJvb2xlYW47XG5cbmV4cG9ydCB0eXBlIENvbmRpdGlvbkNyZWF0b3IgPSAoLi4uYXJnczogYW55W10pID0+IENvbmRpdGlvbjtcblxuZXhwb3J0IGNvbnN0IGFsbDogQ29uZGl0aW9uQ3JlYXRvciA9ICgpOiBDb25kaXRpb24gPT4gKHBvaW50LCBjb2wsIHJvdykgPT4gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IGV2ZW46IENvbmRpdGlvbkNyZWF0b3IgPSAoKTogQ29uZGl0aW9uID0+IChwb2ludCwgY29sLCByb3cpID0+IGNvbCAlIDIgPT09IDAgJiYgcm93ICUgMiA9PT0gMDtcblxuZXhwb3J0IGNvbnN0IG9kZDogQ29uZGl0aW9uQ3JlYXRvciA9ICgpOiBDb25kaXRpb24gPT4gKHBvaW50LCBjb2wsIHJvdykgPT4gY29sICUgMiAhPT0gMCAmJiByb3cgJSAyICE9PSAwO1xuXG5leHBvcnQgY29uc3QgZXZlbkNvbHM6IENvbmRpdGlvbkNyZWF0b3IgPSAoKTogQ29uZGl0aW9uID0+IChwb2ludCwgY29sLCByb3cpID0+IGNvbCAlIDIgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBvZGRDb2xzOiBDb25kaXRpb25DcmVhdG9yID0gKCk6IENvbmRpdGlvbiA9PiAocG9pbnQsIGNvbCwgcm93KSA9PiBjb2wgJSAyICE9PSAwO1xuXG5leHBvcnQgY29uc3QgZXZlblJvd3M6IENvbmRpdGlvbkNyZWF0b3IgPSAoKTogQ29uZGl0aW9uID0+IChwb2ludCwgY29sLCByb3cpID0+IHJvdyAlIDIgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBvZGRSb3dzOiBDb25kaXRpb25DcmVhdG9yID0gKCk6IENvbmRpdGlvbiA9PiAocG9pbnQsIGNvbCwgcm93KSA9PiByb3cgJSAyICE9PSAwO1xuXG5leHBvcnQgY29uc3Qgcm93cyA9XG4gICAgKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQ29uZGl0aW9uID0+XG4gICAgKHBvaW50LCBjb2wsIHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93ID49IHN0YXJ0ICYmIHJvdyA8PSBlbmQ7XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGNvbHMgPVxuICAgIChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IENvbmRpdGlvbiA9PlxuICAgIChwb2ludCwgY29sLCByb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbCA+PSBzdGFydCAmJiBjb2wgPD0gZW5kO1xuICAgIH07XG4iLCJpbXBvcnQgeyBDb25kaXRpb24gfSBmcm9tICcuL2NvbmRpdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBPcGVyYXRvciA9ICguLi5jb25kaXRpb25zOiBDb25kaXRpb25bXSkgPT4gQ29uZGl0aW9uO1xuXG5leHBvcnQgY29uc3QgYW5kOiBPcGVyYXRvciA9ICguLi5jb25kaXRpb25zOiBDb25kaXRpb25bXSkgPT4ge1xuICAgIHJldHVybiAocG9pbnQsIGNvbCwgcm93KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNvbmRpdGlvbiBvZiBjb25kaXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIWNvbmRpdGlvbihwb2ludCwgY29sLCByb3cpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBvcjogT3BlcmF0b3IgPSAoLi4uY29uZGl0aW9uczogQ29uZGl0aW9uW10pID0+IHtcbiAgICByZXR1cm4gKHBvaW50LCBjb2wsIHJvdykgPT4ge1xuICAgICAgICBmb3IgKGxldCBjb25kaXRpb24gb2YgY29uZGl0aW9ucykge1xuICAgICAgICAgICAgaWYgKGNvbmRpdGlvbihwb2ludCwgY29sLCByb3cpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn07XG4iXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwidGhpcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwieCIsInkiLCJjb2xzIiwicm93cyIsIndpZHRoIiwiaGVpZ2h0IiwicG9pbnRzIiwic3RlcENvbHMiLCJzdGVwUm93cyIsImkiLCJqIiwiR3JpZFBvaW50IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiY29uY2F0Iiwic2V0IiwiZ2V0UG9pbnQiLCJjb2wiLCJyb3ciLCJkcmF3IiwiZnVuYyIsImNvbmRpdGlvbiIsImZvckVhY2giLCJjb2xJbmRleCIsInBvaW50Iiwicm93SW5kZXgiLCJ0cmFuc2xhdGUiLCJjb3B5IiwiY29waWVkR3JpZCIsIkdyaWQiLCJsZW5ndGgiLCJwb2ludHNEZWVwQ29weSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImV2ZW4iLCJvZGQiLCJldmVuQ29scyIsIm9kZENvbHMiLCJldmVuUm93cyIsIm9kZFJvd3MiLCJzdGFydCIsImVuZCIsImFuZCIsImNvbmRpdGlvbnMiLCJvciJdLCJzb3VyY2VSb290IjoiIn0=