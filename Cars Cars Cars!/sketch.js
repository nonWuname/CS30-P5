// Cars Cars Cars!
// Luke Wu
// 16,4,2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let carsize_x = 50 , carsize_y = 20;

let upperSpeed = 20 , lowerSpeed = 0;

let travel_east = [];
let trave_west = [];

let linesize = 10; // a var i used to draw the line
// better to not  adjust it since this is good for this portion

let flashcondition = 0;// condition for flash

let carCondition = 0;// boolean for the car to move or not

let traffic;
let redFrame = 0; // for record the frame time for red
let yellowFrame = 0; // for record the frame time for yellow
let greenFrame = 0; // for record the frame time for green



// p5 js suggest me to not use LEFT and Right
// this is the const i used for differnt symbol
// rather than 1 and 0 to show the boolean expression
// RIGHT_MY is more good to look and understand
const RIGHT_MY = 0; const LEFT_MY = 1;
const SMALL_CAR = 0; const VAN = 1;
const RED_MY = 0, GREEN_MY = 1, YELLOW_MY = 2;
const UNFLASH = 0; const FLASH = 1;
const TRAVEL = 0, CREEP = 1,STOP = 2;



class TrafficLight{

  constructor(type){
    this.type = type;
  }

  display(){
    // main body
    fill(0);
    rect(width -100, 0,100,200);
    
  // --- three light
  if(this.type == RED_MY){//red
    fill(255,0,0); 
    carCondition = STOP;
  } 
  else fill(255);
  circle(width - 50,40,50);
  //---------------
  //----------------
  if(this.type == YELLOW_MY){//yellow
    fill(255,255,0);
    carCondition = CREEP;
  }
  else fill(255);
  circle(width -50, 100,50);
  //--------------------------
  //----------------
  if(this.type == GREEN_MY){
    fill(0,255,0);
    carCondition = TRAVEL;
  } 
  else fill(255);
  circle(width-50, 160,50);
  }
  //-------------
  //----------------

  command(){
    //check diff between each frame
    //print('frame - green',frameCount - greenFrame);
    //print("frame - yellow",frameCount - yellowFrame);
    //print("frame - red",frameCount - redFrame);


    //green
    if(frameCount - greenFrame >= 360){
      yellowFrame = frameCount;
      carCondition = CREEP;
      traffic.type = YELLOW_MY;
    }
    // yellow
    if(frameCount - yellowFrame >= 120){
      carCondition = STOP;
      traffic.type = RED_MY;
      redFrame = frameCount;
    }
    //red
    if(frameCount - redFrame >= 240){
      carCondition = TRAVEL;
      traffic.type = GREEN_MY;
      Myloop("uncreep");
    }

    // update each frame in diff condition;
    // ex. in travel, update all the frame except greenFrame
    // this make a perioidc changing
    if(carCondition == TRAVEL){
      yellowFrame = frameCount;
      redFrame = yellowFrame;
    }
    else if (carCondition == CREEP){
      greenFrame = frameCount;
      redFrame = frameCount;
    }
    else if(carCondition == STOP){
      yellowFrame = frameCount;
      greenFrame = frameCount;
    }
  }

}


class Mycar{  
  constructor(type,direction){
    this.type = type;
    this.color = color(int(random(255)),int(random(255)),int(random(255))); 
    if(direction == RIGHT_MY){// upper section to move east(right)
      this.y = int(random(height/4 + 30,height/2 - 30));
    }
    else if (direction == LEFT_MY){// lower section to move west(left)
      this.y = int(random(height/2 + 30,height * 3 / 4 - 30));
    }
    this.x = random(0,width);
    this.direction = direction;
    this.xSpeed = int(random(lowerSpeed,upperSpeed));
    this.buffer = 3;
  }

  display(){
    // draw vehicle
    // draw different vehicle with diff type
    stroke(255);
    strokeWeight(2);
    fill(this.color);
    if(this.type == SMALL_CAR){
      rect(this.x,this.y,carsize_x,carsize_y);//main body 
      fill(255);//fill tire
      rect(this.x+4,this.y-5,carsize_x-40,carsize_y-15);//LEFT_MY up
      rect(this.x+4,this.y+carsize_y,carsize_x-40,carsize_y-15);//LEFT_MY down
      rect(this.x + carsize_x -14, this.y-5,carsize_x-40,carsize_y-15);// right up
      rect(this.x + carsize_x -14,this.y+carsize_y, carsize_x-40,carsize_y-15);//right down
    }
    if(this.type == VAN){
      rect(this.x,this.y,carsize_x,carsize_y+10);//main body
      line(this.x +35 , this.y, this.x + 35, this.y+carsize_y+10);//front
    }
  }
  
  move(){
    this.totalspeed = this.buffer + this.xSpeed;
    if(this.direction == RIGHT_MY)this.x += this.totalspeed;
    else if(this.direction == LEFT_MY)this.x -= this.totalspeed;
  }

  check(){
    if(this.direction == RIGHT_MY && this.x > width)this.x = 0;
    else if(this.direction == LEFT_MY && this.x < 0)this.x = width;
  }

  speedDown(){
    if(this.totalspeed > lowerSpeed && percent_1())this.xSpeed -= 1;
  }

  speedUp(){
    if(this.totalspeed < upperSpeed && percent_1()) this.xSpeed += 1;
  }

  ChangeColor(){
    if(percent_1()) this.color = color(int(random(255)),int(random(255)),int(random(255)));
  }

  flash(){
    this.buffer = 40;
  }

  unflash(){
    this.buffer = 3;
  }

  creep(){
    if(this.totalspeed > lowerSpeed + 0.2)this.buffer-= 0.1;
  }
  uncreep(){
    this.buffer = 3;
  }

  action(){
    this.check();
    this.display();
    if(carCondition == TRAVEL)
    {
      this.move();
      this.speedDown();
      this.speedUp();
      this.ChangeColor();
    }
    if(carCondition == CREEP){
      this.move();
      this.creep();
      //print("speed is",this.totalspeed)
    }
  }


  error_check(){
    if(this.totalspeed < 0){
      print('ERROR AT ',this.x, ' ', this.y);
    }
  }
}


function setup() {
  createCanvas(1825, 958);
  
  // for the car to travel east(right)
  for(let _ = 0 ; _ < 20; ++_){
    travel_east.push(new Mycar(int(random(0,2)),RIGHT_MY));
  }
  
  // for the car to travel west(LEFT_MY)
  for(let _ = 0 ; _ < 20; ++_){
    trave_west.push(new Mycar(int(random(0,2)),LEFT_MY));
  }
 
  // int(random(0,2) is either 0 -> SMALL_CAR ; 1 -> VAN


  traffic = new TrafficLight(GREEN_MY);
}

function draw() {
  // init canavas
  drawRoad();
  
  // just action for all
  Myloop('action');
  Myloop('error_check')

  if(keyIsDown(CONTROL)){
    flashcondition = FLASH;
    Myloop('flash');
  }
  if(flashcondition == FLASH && !keyIsDown(CONTROL)) {
    flashcondition = UNFLASH;
    Myloop('unflash');
  }
  // check print(carcondition);

  // for traffic
  traffic.display();
  traffic.command();


  
  
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
    // check print('check west')
    trave_west.push(new Mycar(int(random(0,2)),LEFT_MY));
  }

  // add car in trave east
  else if (mouseButton === LEFT) {
    // check print('check')
    travel_east.push(new Mycar(int(random(0,2)),RIGHT));
  }

  // a bug to be notice, p5 suggest me to not used RIGHT and LEFT, i use ctr; +f
  // to replace all RIGHT to RIGHT_MY, and this affect my mouseButton === LEFT
  // ehhh, i was kind of confused when the car is not add and i didn't see 'check'
  // in screen

  // also a bug, mouseButton === LEFT && keyIsDown(SHIFT) should consider first
  // can used with other logic
}


function Myloop(type){
  // loop for all class to make draw function more clear
  // just give a string, this function will help me to do loop
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
  if(type == 'uncreep'){
    for(let it of trave_west){
      it.uncreep()
    }
    for(let it of travel_east){
      it.uncreep();
    }
  }

  
}