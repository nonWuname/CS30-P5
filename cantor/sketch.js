// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noFill();
  strokeWeight(4);
  circleFractal(width/2,height/2,width/3,10);
}


function cantor(x,y,len,depth){
  if(depth > 1){
    rect(x,y,len,10);
    y+=20;
    cantor(x,y,len/3,depth-1);
    cantor(x + width * 2 / 3,y,len , depth - 1);
  }
}

function circleFractal(x,y,diameter,depth){
  if(depth > 0){
    circle(x,y,diameter);
    
    // recurse 
    circleFractal(x-diameter/2,y,diameter/2,depth-1);
    circleFractal(x+diameter/2,y,diameter/2,depth-1);
    circleFractal(x,y+diameter/2,diameter/2,depth-1);
  }
}