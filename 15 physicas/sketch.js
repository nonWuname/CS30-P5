// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const G = 0.1635;

let pos;
let a = -5;
let gravity;
let myparticle = [];

class Particle{

  constructor(x,y){
    this.position = createVector(x,y);
    this.s = 20;
    this.velocity = createVector(random(-3,3),random(-5,-3));
    this.initx = this.velocity.x;
    this.inity = this.velocity.y;
    this.c = color(0,100,random(150,225),100);
  }

  display(){
    strokeWeight(this.s);
    stroke(this.c);
    point(this.position);
  }

  move(){
    this.velocity.add(gravity);
    this.position.add(this.velocity);
  }

  check(){
    if(this.position.x >= width || this.position.x <= -200){
      this.position.x = 0;
      this.velocity.x = this.initx;
      this.velocity.y = this.initx;
    }
    if(this.position.y >= height || this.position.y <= -200){
      this.velocity.x = this.initx;
      this.velocity.y = this.initx;
      this.position.y = 0;
    }

  }

  action(){
    this.display();
    this.move();
    this.check();
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0,G);
  
  for(let _ = 0; _ < 40; ++_){
    myparticle.push(new Particle(int(random(0,width), int(random(0,height)))));
  }
}


function draw() {
  background(220);
  translate(200,200);
  
  for(let it of myparticle){
    it.action();
  }

  print(second());


}
