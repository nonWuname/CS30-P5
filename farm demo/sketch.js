// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = [];

let level = [

  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],

]

const COLUMNS = 5;
const ROWS = 5;
let TILE_SIZE = 100;
let playerX = 3;
let playerY = 4;

function preload() {
  for (let _ = 0; _ < 4; ++_) {
    tiles.push(loadImage("assets/" + _ + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  level[playerY][playerX] = 2;
}

function draw() {
  background(220);


  // draw the farm
  for(let _ = 0 ; _ < level.length;++_){
    for(let _i = 0; _i < level[_].length; ++_i ){
      image(tiles[level[_][_i]], _i * TILE_SIZE, _ * TILE_SIZE);
    }
  }

}
