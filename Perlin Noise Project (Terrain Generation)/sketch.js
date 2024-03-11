// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectwidth = 5,recttime = 0;

function generateTerrain(){
  background(220);
  strokeWeight(0);
  fill(0);
  let ymax = 0,xmax = 0 ;
  for(let i = 0; i < width; i+=rectwidth){
    let rectHeight = noise(recttime);
    recttime +=0.009;
    rectHeight = map(rectHeight,0,1,0,height*0.8);
    if(rectHeight > ymax){
      ymax = rectHeight;
      xmax = i;
    }
    print(rectHeight);
    print(rectHeight);
    rect(i,height-rectHeight,rectwidth,rectHeight);
  }
  print("ymax is",ymax);
  drawFlag(xmax,height - ymax);
}

function keyPressed(){
  clear();
  generateTerrain();
}


function drawFlag(x, y){
  strokeWeight(10);
  fill(0);
  line(x,y,x,y-120);
  fill(255,0,0);
  triangle(x,y-70,x,y-120,x+50,y-80);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();


}


