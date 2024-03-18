// Basic Transformations Sandbox


let originalSpacing = 20;
let scaleamount = 2.5;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawBasicGrid(220);
  
  let m = minute();
  let s = second();
  let h = hour();
  
  circle(width/2,height/2,500);

  push();
  translate(width/2,height/2);
  line(0,220,0,250);
  
  angleMode(DEGREES);
  // 1 hour
  for(let i = 0; i <= 360; i+=30){  
    strokeWeight(10);
    push();
    rotate(i);
    line(0,220,0,250);
    pop();
  }
  //l0 min
  for(let i = 0; i <= 360; i+=6){
    strokeWeight(4);
    push();
    rotate(i);
    if(i % 30 != 0)line(0,240,0,250);
    pop();
  }
  

  //hour
  push();
  strokeWeight(6);
  stroke(0,0,255);
  rotate((h%12)*30+m*0.5);
  line(0,0,0,-200);
  pop();
  //second
  push();
  stroke(255,0,0);
  strokeWeight(1);
  rotate(s*6);
  line(0,0,0,-60);
  pop();
  //min
  push();
  stroke(0,255,0);
  strokeWeight(4);
  rotate(m*6);
  line(0,0,0,-120);
  pop();

  //for the trans pop
  pop();

  // for(let i = 0; i < 360; i+=30){
  //   push();
  //   translate
  //   rotate(i);
  //   line(width/2,(height/2)-250,width/2,height/2-220);
  //  print(1);
  // }
  // pop();
  
  // push();
  // translate(150,50);
  // rectangleRed(0,0);
  // pop();



  //add push()  pop()

  //transformation two: SCALE
  // rectangleBlue(40,0);

  // push();
  // translate(140,140);
  // drawBasicGrid(130);
  // scale(scaleamount);
  // rectangleRed(40,0);
  // pop();



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // rotate(PI/4);
  // drawBasicGrid(120);
  // face(200,200);    


  //Combinations of Transformations

  

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}