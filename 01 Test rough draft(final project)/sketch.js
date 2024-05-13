// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let hero = [];

let a;

let heroidx = 0;
let state = true;
let x; 
let y;

let mycamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mycamera = createCamera();
  mycamera.setPosition(x,y,0);
  x = width/2;
  y = height/2
}

function draw() {
  background(220);

  image(hero[heroidx % 4],x,y);
  if(state){
    if(frameCount % 8 == 0)heroidx++;
  }
}

function preload(){
  for(let _ = 1; _ <= 4; _++){
    hero.push(loadImage("assets/hero" + _ + ".png"));
  }
}

function keyPressed(){
  if(keyIsDown(RIGHT)){
    x+=20;
  }
}