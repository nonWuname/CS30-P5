// Cars Cars Cars!
// Luke Wu
// 16,4,2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let carsize_x = 50 , carsize_y = 20;

let upperSpeed = 14 , lowerSpeed = 4;

let travel_east = [];
let trave_west = [];

let linesize = 10;

let condition = 0;

const UNFLASH = 0; const FLASH = 1;

// p5 js suggest me to not use LEFT and Right
// this is the const i used for differnt symbol
// rather than 1 and 0 to show the boolean expression
// RIGHT_MY is more good to look and understand
const RIGHT_MY = 0; const LEFT_my = 1;
const SMALL_CAR = 0; const VAN = 1;

class Mycar{
  

  constructor(type,direction){
    this.type = type;
    this.color = color(int(random(255)),int(random(255)),int(random(255))); 
    if(direction == RIGHT){// upper section to move east(right)
      this.y = int(random(height/4 + 30,height/2 - 30));
    }
    else if (direction == LEFT_my){
      this.y = int(random(height/2 + 30,height * 3 / 4 - 30));
    }
    this.x = random(0,width);
    this.direction = direction;
    this.xSpeed = int(random(lowerSpeed,upperSpeed));
  }

  display(){
    stroke(255);
    strokeWeight(2);
    fill(this.color);
    if(this.type == SMALL_CAR){
      rect(this.x,this.y,carsize_x,carsize_y);//main body 
      fill(255);//fill tire
      rect(this.x+4,this.y-5,carsize_x-40,carsize_y-15);//LEFT_my up
      rect(this.x+4,this.y+carsize_y,carsize_x-40,carsize_y-15);//LEFT_my down
      rect(this.x + carsize_x -14, this.y-5,carsize_x-40,carsize_y-15);// right up
      rect(this.x + carsize_x -14,this.y+carsize_y, carsize_x-40,carsize_y-15);//right down
    }
    if(this.type == VAN){
      rect(this.x,this.y,carsize_x,carsize_y+10);//main body
      line(this.x +35 , this.y, this.x + 35, this.y+carsize_y+10);//front
    }
  }
  
  move(){
    if(this.direction == RIGHT)this.x += this.xSpeed;
    if(this.direction == LEFT_my)this.x -= this.xSpeed;
  }

  check(){
    if(this.direction == RIGHT && this.x > width)this.x = 0;
    else if(this.direction == LEFT_my && this.x < 0)this.x = width;
  }

  speedDown(){
    if(this.xSpeed > lowerSpeed && percent_1())this.xSpeed -= 1;
  }

  speedUp(){
    if(this.xSpeed < upperSpeed && percent_1()) this.xSpeed += 1;
  }

  ChangeColor(){
    if(percent_1()) this.color = color(int(random(255)),int(random(255)),int(random(255)));
  }

  flash(){
    this.xSpeed = 40;
  }

  unflash(){
    this.xSpeed = int(random(lowerSpeed,upperSpeed));
  }

  action(){
    this.check();
    this.display();
    this.move();
    this.speedDown();
    this.speedUp();
    this.ChangeColor();
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // for the car to travel east(right)
  for(let _ = 0 ; _ < 20; ++_){
    travel_east.push(new Mycar(int(random(0,2)),RIGHT));
  }
  
  // for the car to travel west(LEFT_my)
  for(let _ = 0 ; _ < 20; ++_){
    trave_west.push(new Mycar(int(random(0,2)),LEFT_my));
  }
 
  // int(random(0,2) is either 0 -> SMALL_CAR ; 1 -> VAN
}

function draw() {
  // init canavas
  drawRoad();
  
  // just action
  Myloop('action');
  
  if(keyIsDown(CONTROL)){
    condition = FLASH;
    Myloop('flash');
  }

  if(condition == FLASH && !keyIsDown(CONTROL)) {
    condition = UNFLASH;
    Myloop('unflash');
  }
  print(condition);
}


function drawRoad(){
  
  stroke(255);// restart stroke condition
  strokeWeight(0);
  
  fill(255);// make the background
  rect(0,0,width,height);

  
  fill(0);// pave the raod
  rect(0,height/4,width,height/2);
  
  strokeWeight(6);// the yellow line
  stroke(255,255,0);
  for(let _ = 0; _ < width - linesize  ; _ = _ + 2 * linesize* 2){
    line(_,height/2,_+linesize,height/2);
  }
}

function percent_1(){
  // boolean function to check
  // 1 percent possibility
  let outcome = int(random(0,101));
  if(outcome == 1) return true;
  return false;
}

function mouseClicked(){

  // add car in trave west
  if(mouseButton === LEFT && keyIsDown(SHIFT)) {
    print('check west')
    trave_west.push(new Mycar(int(random(0,2)),LEFT_my));
  }

  // add car in trave east
  else if (mouseButton === LEFT) {
    print('check')
    travel_east.push(new Mycar(int(random(0,2)),RIGHT));
  }

  // a bug to be notice, p5 suggest me to not used RIGHT and LEFT, i use ctr; +f
  // to replace all RIGHT to RIGHT_MY, and this affect my mouseButton === LEFT
  // ehhh, i was kind of confused when the car is not add and i didn't see 'check'
  // in screen

  // also a bug, mouseButton === LEFT && keyIsDown(SHIFT) should consider first
}


function Myloop(type){
  if(type == 'action'){
    for(let it of trave_west){
      it.action()
    }
    for(let it of travel_east){
      it.action();
    }
  }

  if(type == 'flash'){
    for(let it of trave_west){
      it.flash()
    }
    for(let it of travel_east){
      it.flash();
    }
  }

  if(type == 'unflash'){
    for(let it of trave_west){
      it.unflash()
    }
    for(let it of travel_east){
      it.unflash();
    }
  }
  
}