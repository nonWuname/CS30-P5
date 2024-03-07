// noisy number
// Luke Wu
// 3,4,2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let semgmentLength = 3;
let bally = 200, yspeed, balltime = 10;

function setup() {
  createCanvas(400, 400);
  
}

function semgmentLine(){
  
  strokeWeight(10);
  let grayTime = 0;
  for(let x = 0; x <= width; x+=3){

    grayValue = noise(grayTime);
    grayTime += 1;
    print(grayValue);
    grayValue = map(grayValue,0,1,0,255);
    
    
    stroke(grayValue);
    line(x,height/2,x+semgmentLength,height/2);
  }

}

function moveBall(){
  
  stroke(0),strokeWeight(1);
  yspeed = noise(balltime);
  balltime += 0.01;
  bally = map(yspeed,0,1,-100,100);

  circle(width*0.7,bally,30);
}

function draw() {
  background(220);
  semgmentLine();
  moveBall();
}
