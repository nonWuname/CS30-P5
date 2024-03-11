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
  radiustime += 0.01;
  let a = map(radius_change,0,1,-4,5.5);
  inner = abs(inner + a);
  if(inner < 10) inener = 40;
  if(inner > 235) inner = 40;
  fill(0,0,255);
  circle(width/2,height/2,inner+60);
  
  erase();
  circle(width/2,height/2,inner);
  noErase(); 


}

function draw() {
  background(220);
  firstex();
}
