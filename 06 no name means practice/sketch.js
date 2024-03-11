// practice
// luke wu
// 3,8,2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let inner=100, radiustime = 0;

function setup() {
  createCanvas(400, 400); 
}

function firstex(){

  

  let radius_change = noise(radiustime)
  radiustime += 0.03;
  radius_change = map(radius_change,0,1,-4,4);
  inner = abs(inner + radius_change);
  fill(0,0,255);
  circle(width/2,height/2,inner+60);
  
  erase();
  circle(width/2,height/2,inner);
  noErase(); 


}

function draw() {
  background(220);
  firstex();
  print(inner);
}
