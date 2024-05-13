// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let music,boundsound;

let started = false;
let pos,vel;
let  totalbounce = 0;


function setup() {
  createCanvas(400, 300);
  textSize(30);
  textAlign(CENTER);
  pos = createVector(width/2,height/2);
  vel = createVector(5,3);
  boundsound.setVolume(1);

  if(localStorage.getItem("bounce") === null){
    localStorage.setItem("bounce",0)
  }
  else{
    totalbounce = int(localStorage.getItem("bounce"));
  }
}

function draw() {
  background(220);
  if(!started){
    text("click to begin",width/2,height/2);
    if(mouseIsPressed){
      started = true;
      music.setVolume(0.1);
      music.loop();
    }
  }
  else{
    updateBall();
    text(totalbounce,width/2,height/2);
  }
  
  localStorage.setItem("bounce",totalbounce);


}

function preload(){
  // wait loading for complete

  music = loadSound("./assets/background.mp3");
  boundsound = loadSound("./assets/bounceSound.wav");
}


function updateBall(){
  pos.add(vel);
  
  if(pos.x < 0 || pos.x > width){
    vel.x *= -1;
    boundsound.play();
    totalbounce++;
  }

  if(pos.y < 0 || pos.y > height){
    vel.y *= -1;
    boundsound.play();
    totalbounce++;
  }
  circle(pos.x,pos.y,20);
}

