// Cars Cars Cars!
// Luke Wu
// 16,4,2024
//
// Extra for Experts:
// For this first objects assignment, you'll create a Traffic Simulation where each vehicle on the road will be an object created from a Vehicle class you define.
//Base Requirements (up to 9/10):
//Create a Road:
//create a function called drawRoad(), which will draw a black road and dashed white lane dividing line. This function should be called once per frame in draw().

/*

efine your Vehicle class (constructor):

Create a Vehicle class, from which you'll make several Vehicle objects. This class should have the following class properties:

type
an integer,  0 or 1. This will determine how the vehicle is rendered:
0 - A Car
1 - A Truck/Van
note: The visuals can be quite crude, and don't have to resemble that type of vehicle too closely. The main thing is that the different types are drawn differently.
For example, here are my two vehicle types:  
a color.  Used for the primary fill color for that particular vehicle
x and y position
a direction (to represent if the vehicle is moving left to right, or vice versa). You could use a number for this (0 - moving left,  1 - moving right)
xSpeed to track how fast the vehicle is moving horizontally per frame

Expand your Vehicle class (class Functions):

Your vehicle should have the following functions:

display()     renders the vehicle (based on its type property)

move()    updates the x position based on the xSpeed property. If the vehicle exits the side of the Canvas, wrap around to the opposite side.

speedUp()    increase xSpeed slightly (up to a max of 15 or -15, depending on direction)

speedDown()   decrease xSpeed slightly (make sure to not slow down past 0. Vehicles should not be able to change direction)

changeColor()    give the vehicle a new primary color

action()   this will be main function for a Vehicle, which will call all of the other functions with the following frequency:

move()                      every frame
speedUp()              1% chance to call each frame
speedDown()       1% chance to call each frame
changeColor()      1% chance to call each frame
display()                    every frame
Before progressing further, I would highly recommend creating one Vehicle type variable and play around with calling .action() on it in draw() to ensure the functionality above is working correctly.

 

Create Collections of Vehicles

Create two globally-defined arrays at the top of your program:

let eastbound = [];
let westbound = [];
in setup(), use loops to push 20 Vehicles into each array:

Vehicles in eastbound should have positive xSpeed values
Vehicles in westbound should have negative xSpeed values
You should set the direction property in each Vehicle object accordingly.
Ensure the y value is random, but will land in the correct lane
 

Process the Vehicle Collections

Once you've populated your arrays with many Vehicle objects, it is time to get them driving. 

inside draw() use a loop (one for each array) to access each individual Vehicle object, and call the .action() function for that object.

since .action() calls the other class functions, this is the only line of code that will be needed in the loop.

Once you've done that, the base features should be complete! A sample of what this could look like for you is this:
*/

// there are some diff in this program, i name the some varible differently, but accomplish same thing(car traffic simulation)
// method don't have same effect, all explanation above should yield to this program first(when there is a different).







// the x and y coordinate for car
let carsize_x = 50 , carsize_y = 20;
// same meaning as name
let upperSpeed = 20 , lowerSpeed = 0;

// car list for car which due  east and west
let travel_east = [];
let trave_west = [];

let linesize = 10; // a var i used to draw the line
// better to not adjust it since this is good for this portion

let flashcondition = 0;// condition for flash

let carCondition = 0;// boolean for the car to move or not(or yellow light)

let traffic;// for traffic light
let redFrame = 0; // for record the frame time for red
let yellowFrame = 0; // for record the frame time for yellow
let greenFrame = 0; // for record the frame time for green



// p5 js suggest me to not use LEFT and Right
// this is the const i used for differnt symbol
// rather than 1 and 0 to show the boolean expression
// RIGHT_MY is more good to look and understand
// ALL the const is same mean as their name
// right is direction of the car
const RIGHT_MY = 0; const LEFT_MY = 1;
const SMALL_CAR = 0; const VAN = 1;
const RED_MY = 0, GREEN_MY = 1, YELLOW_MY = 2;
const UNFLASH = 0; const FLASH = 1;
const TRAVEL = 0, CREEP = 1,STOP = 2;



class TrafficLight{

  constructor(type){
    //type for the type of trafficLight(red,green,Yellow)
    this.type = type;
  }
  
  
  display(){
    //display the traffic light

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
    // traffic operation system
    
    //check diff between each frame
    //print('frame - green',frameCount - greenFrame);
    //print("frame - yellow",frameCount - yellowFrame);
    //print("frame - red",frameCount - redFrame);


    // the way i used can be seen as freeze frame;
    // once it is travel, i will freeze greenFrame;
    // then, once there diff is 360 frame(6 second),
    // i will changer trafficlight condition to yellow;
    // by this, commnad make a automatic operation system

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
    // create a object
    
    // type for car's type;
    // color for car's color
    // direction for car's direction;
    // xSpeed is the speed and buffer is extra speed
    // total speed is the sum of xspeed and buffer
    // x,y is the coordinate
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
    this.totalspeed = this.buffer + this.xSpeed;
  }

  display(){
    // draw vehicle
    // draw different vehicle with diff type
    // will have diff color
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
    // move the car
    if(this.direction == RIGHT_MY)this.x += this.totalspeed;
    else if(this.direction == LEFT_MY)this.x -= this.totalspeed;
  }

  check(){
    // for diff direction, i will check to ensure it didn't went off screen
    if(this.direction == RIGHT_MY && this.x > width)this.x = 0;
    else if(this.direction == LEFT_MY && this.x < 0)this.x = width;
  }

  speedDown(){
    // slow down for 1%
    if(this.totalspeed > lowerSpeed && percent_1())this.xSpeed -= 1;
  }

  speedUp(){
    // speed up for 1%
    if(this.totalspeed < upperSpeed && percent_1()) this.xSpeed += 1;
  }

  ChangeColor(){
    // change color for 1%
    if(percent_1()) this.color = color(int(random(255)),int(random(255)),int(random(255)));
  }

  flash(){
    // to make the car in flash mode
    this.buffer = 40;
  }

  unflash(){
    // undo flash
    this.buffer = 3;
  }

  creep(){
    // creep when yellow light
    if(this.totalspeed > lowerSpeed + 0.2)this.buffer-= 0.1;
  }
  uncreep(){
    // undo creep
    this.buffer = 3;
  }

  action(){
    // constructor is only init once, it won't repeat;
    // since the total are always change;
    // i would add this for every action
    this.totalspeed = this.buffer + this.xSpeed;

    
    // a function to call all function
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

    this.bugsolver();
    this.error_check();
  }

  bugsolver(){
    //this function help me solve all necessary bug(car run backward)
    this.totalspeed = abs(this.totalspeed);
  }

  error_check(){
    // can be disregard, use only when i am develop
    // now should be delete but i am lazy
    // i leave it so i don't  need to type again
    if(this.totalspeed < 0){
      print('ERROR AT ',this.x, ' ', this.y);
      noLoop();
    }
  }
}


function setup() {
  // same as the name
  createCanvas(1825, 958);
  
  // add the car to travel east(RIGHT_MY)
  for(let _ = 0 ; _ < 20; ++_){
    travel_east.push(new Mycar(int(random(0,2)),RIGHT_MY));
  }
  // add the car to travel west(LEFT_MY)
  for(let _ = 0 ; _ < 20; ++_){
    trave_west.push(new Mycar(int(random(0,2)),LEFT_MY));
  }
 
  // int(random(0,2) is either 0 -> SMALL_CAR ; 1 -> VAN

  // make a traffic light with inital condition (green)
  traffic = new TrafficLight(GREEN_MY);
}


//------------------------------------------------------------------#
// main function
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
// ----------------------------------------------------------------------#


function drawRoad(){
  
  stroke(255);// restart stroke condition
  strokeWeight(0);
  
  fill(255);// make the background
  rect(0,0,width,height);

  
  fill(0);// pave the raod
  rect(0,height/4,width,height/2);
  
  strokeWeight(6);// the yellow line
  stroke(255,255,0);
  for(let _ = 0; _ < width - linesize ; _ = _ + 2 * linesize* 2){
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
    travel_east.push(new Mycar(int(random(0,2)),RIGHT_MY));
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