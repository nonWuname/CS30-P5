// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const WHITE = 255; const BLACK = 0;

let grid =
[
  [0,255,0,255,0],
  [0,0,0,0,0],
  [0,0,0,255,0],
  [255,255,255,255,255]
];

let dy = [1,-1,0,0];
let dx = [0,0,1,-1];

let squaresize = 50;
const NUM_ROWS = 4; const NUM_COLS = 5;

let point_my;


class Pair{
  constructor(y,x){
    this.y = y;
    this.x = x;
  }
}

function setup() {
  createCanvas(NUM_COLS * squaresize, NUM_ROWS * squaresize);
}

function draw() {
  drawGrid();

}

function drawGrid(){
  for(let y = 0; y < NUM_ROWS; ++y){
    for(let x = 0; x < NUM_COLS;++x){
      let fillvalue = grid[y][x];
      fill(fillvalue);
      square(x*squaresize,y*squaresize,squaresize);
    }
  }
}

function getlocation(){
  let constrainX = constrain(mouseX,0,width-1);
  let constrainY = constrain(mouseY,0,height-1);
  
  point_my = new Pair(int(mouseY / squaresize), int(mouseX / squaresize))
  
}

function mouseClicked(){
  if(mouseButton == LEFT){
    getlocation();
    flip();
  }
  
}

function flip(){
  //case 1
  if(grid[point_my.y][point_my.x] == BLACK){
    grid[point_my.y][point_my.x] = WHITE;
    
  }
  //case 2
  else{
    grid[point_my.y][point_my.x] = BLACK;
  }

  temp();

  
}



// old
//


/*

if(grid[point_my.y + dy[_]][point_my.x + dx[_]] == WHITE){
          grid[point_my.y + dy[_]][point_my.x + dx[_]]= BLACK;
        }
        else if(grid[ point_my.y + dy[_]][point_my.x + dx[_]] == BLACK){
          grid[point_my.y + dy[_]][point_my.x + dx[_]]= WHITE;
        }


*/


function temp(){
  for(let _ = 0; _ < 4; ++_){
    if((point_my.y + dy[_] >= 0 && point_my.y + dy[_] < NUM_ROWS) && (point_my.x + dx[_] >= 0 && point_my.x + dx[_] < NUM_COLS)){
      if(grid[point_my.y + dy[_]][point_my.x + dx[_]] == WHITE){
        grid[point_my.y + dy[_]][point_my.x + dx[_]]= BLACK;
      }
      else if(grid[ point_my.y + dy[_]][point_my.x + dx[_]] == BLACK){
        grid[point_my.y + dy[_]][point_my.x + dx[_]]= WHITE;
      }
    }
  }
}