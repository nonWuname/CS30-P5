// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth,windowHeight);
  stroke(0,80);
  angleMode(DEGREES);
  background(220);

}

function randomelement(currlen){
  push();
  rotate(random(360));
  while(currlen > 5){
    
    rotate(random(-40,40));
    line(0,0,0,currlen);
    translate(0,currlen);
    currlen*=0.75;
  }
  pop();
}

function draw() {
  translate(width/2,height/2);
  randomelement(75);
}
