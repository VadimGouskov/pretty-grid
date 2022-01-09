console.log(this)

const grid = new prettyGrid.Grid(5, 5, 500, 500); 

function setup() {
    createCanvas(500, 500);
}
  
function draw() {
    background(32);
    fill('yellow');
    grid.draw(point => circle(point.x, point.y, 20));
}