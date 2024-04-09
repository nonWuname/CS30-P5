// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mycircle = [];
const CIRCLE_NUM = 3;


class RoundRacer{

  //xPosition,    yPosition,   xSpeed,   color
  constructor(ypos,c){
    this.xpos = 0;
    this.ypos = ypos;
    this.c = c;
    this.speed = int(random(3,16));
  }

  display(){
    fill(this.c);
    circle(this.xpos,this.ypos,10);
  }

  move(){
    this.xpos = this.xpos + this.speed;
  }


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let bisector = 2;
  for(let _ = 0; _ < CIRCLE_NUM; ++_){
    let c = color(random(0,255),random(0,255),random(0,255))
    
    let ypos = bisector * height / 5; 
    mycircle.push(new RoundRacer(ypos,c));
    bisector ++;
  }
}

function draw() {
  background(220);
  circle_class("display");
  if(frameCount % 10   == 0)circle_class("Move");
  circle_class("check");
}


function circle_class(type){
  if(type == "display"){
    for(let w of mycircle){
      w.display();
    }
  }
  if(type == "move" || type == "Move"){
    for(let w of mycircle){
      w.move();
    }
  }
  if(type == "check"){
    for(let w of mycircle){
      if(w.xpos > width){
        w.xpos = 0;
        w.speed = int(random(3,16));
      }
    }
  }
}
