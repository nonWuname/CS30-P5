// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myframecount = 0;
let myWalker = [];
const WALKER_NUM = 10;

class Walker{
  constructor(x,y,c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.size = 5;
    this.speed = random(2,10);
  }
  
  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);
  }

  move(){
    let choice = int(random(4));
    print(choice);
    if(choice == 0)this.x -= this.speed;
    else if(choice == 1) this.x += this.speed;
    else if(choice == 2)this.y -= this.speed;
    else if(choice == 3)this.y += this.speed;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let _=0; _ < WALKER_NUM; ++_){
    let c = color(random(255),random(255),random(255));
    myWalker.push(new Walker(width/2,height/2,c));
  }
}

function draw() {
  background(220);
  
  for(let w of myWalker){
    w.display();
  }
  
  if(frameCount % 15 == 0){
    for(let w of myWalker){
      w.move();
    }
  }
}
