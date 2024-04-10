// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mypoint = [];


class Movingpoint {
  constructor(x,y){
    this.x = x; this.y = y;
    this.size = 20;
    this.c = color(random(255),random(255),random(255));

    this.xtime = random(10);
    this.ytime = random(10);
    this.maxSpeed = 5;
  }
  
  display(){
    fill(this.c);
    circle(this.x,this.y,10);
  }

  move(){
    let xspeed = noise(this.xtime);
    let yspeed = noise(this.ytime);
    xspeed = map(xspeed,0,1,-5,5);
    yspeed = map(yspeed,0,1,-5,5);

    this.x += xspeed;
    this.y += yspeed;
    this.ytime += 10;
    this.xtime += 10;
    
  }

  connect(){
  for(let it of mypoint){
    if(testdistance(it.x,it.y,this.x,this.y) && it != this){
      stroke(this.c);  
      line(it.x,it.y,this.x,this.y);
      }
    }
  }

  back(){
    if(this.x < 0 || this.x > width) this.x = width/2;
    if(this.y < 0 || this.y > height) this.y = height/2;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  myLoop("display");
  if(frameCount % 3 == 0)myLoop("move");
  myLoop("back");
  myLoop("connect")
}

function mouseClicked(){
  mypoint.push(new Movingpoint(mouseX,mouseY));

}

function myLoop(type){
  if(type == 'display'){
    for(let it of mypoint){
      it.display();
    }
  }
  if(type == "move"){
    for(let it of mypoint){
      it.move();
    }
  }
  if(type == "back"){
    for(let it of mypoint){
      it.back();
    }
  }

  if(type == "connect"){
    for(let it of mypoint){
      it.connect();
    }
  }
}

function testdistance(x1,y1,x2,y2){
  if(Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) < 100) return true;
  return false;
}