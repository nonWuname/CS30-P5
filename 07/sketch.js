// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL,lionR,currlion;
let lionstate = 0;
let pin = [];
let currfram = 0;
function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let _ = 0; _ < 9; ++_){
    pin.push(loadImage("assets/pin-0"+ _ +".png"));
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(lionstate % 2 == 0)currlion = lionL;
  else currlion = lionR;
  image(currlion,mouseX,mouseY,lionL.width/2,lionL.height/2);
  if(frameCount % 5 ==0)
  {
  currfram++;
  }
  image(pin[currfram % 9],width/2,height/2);
  if(mouseIsPressed) lionstate ++;

  print(currfram,frameCount);
}
