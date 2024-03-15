// Perlin Noise Project (Terrain Generation)
// Luke Wu
// March 11,2024
//
// create a moving hill using Perlin Noise, include flag(max point), line(average)

let rectwidth = 5,recttime = 0;// the width of rect and rect noise time
let backgroundcount = 0;// the count of the background, so the background is change

function generateTerrain(temprecttime){
  //generateTerrain graph
  //i believe this rate is reasonable
  backgroundcount+=0.4;
  // using modulo to represent period
  background(backgroundcount % 255);
  strokeWeight(40);
  // if this is in the dark, we draw white, vice versa
  //condition may be different
  if(backgroundcount % 255 < 255/2) {
    fill(255);
    circle(width-height/3,height/6,height/6);
  }
  else{
    fill(0);
    circle(width-height/5,height/10,height/10);
  }

  //make sure no stroke Weight
  strokeWeight(0);
  let term = 0, total = 0;
  // use array to explain it.
  // term is the length of array, and total is the total value of the array
  // average = total / term
  let ymax = 0,xmax = 0;
  //represent the x,y coordinate at max
  let localrectHeight;
  // help me to get the rectheight after loop
  for(let i = 0; i < width; i+=rectwidth){
    //do perlin noise
    let rectHeight = noise(temprecttime);
    temprecttime +=0.009;
    rectHeight = map(rectHeight,0,1,0,height*0.8);
    //find the max spot
    if(rectHeight > ymax){
      ymax = rectHeight;
      xmax = i;
    }
    //fill the color with this trend:
    // close will be different, far away will be blue
    fill(map(i,0,width,255,0),map(i*2,0,width,160,255),map(i*3,0,width,120,255));
    //draw rect
    rect(i,height-rectHeight,rectwidth,rectHeight);
    //term ++ and total need to be increase as the same as rectHeight
    term++; total+= rectHeight;
    // let the localrectHeight to carry out after the loop with the value of rect Height
    // it might be better to name as previousrectHeight, but i am lazy, they all mean the same:
    // to carry the rectHeight after loop
    localrectHeight = rectHeight;
  }
  //===================================================
  //this is for testing, now is not useful
  // because i didn't used rectmode(corner)
  // the way to put parameter will be differnt
  // that is the may problem i encounter with this programm;
  // way to solve is put (height - rectHeight) instead of rectHeight
  // this is because computer generate the y-axis as + go down, - go up
  // input rectHeight as y will be the height of 'height - rectHeight' 
  // input 'height - rectHeight' as y will be the height of 'rectHeight'
  // this discovery may be different if use rectmode(corner)
  // I don't want to spend time on this mainly because i am lazy
  //print("ymax is",ymax);
  //==========================================================
  
  //draw the flag after finish the hill
  drawFlag(xmax,height - ymax);
  
  //draw the line, in three part,each part have different colour
  let lineheight = height-total/term;
  let position = [0,width/3, width*2/3,width];
  strokeWeight(10);
  // _ means this variable is not worth anything, just a temp var;
  // last for loop i maybe should used _ instead of 'i' to keep consistency; 
  // but, i am the person who write the code first, then comment, so i don't want change;
  // because my comment can explain all the variable already and this is not a big deal for a small project
  for(let _ = 0; _ < 3; ++_){
    stroke(map(noise(_+localrectHeight),0,1,0,255),map(noise(_+localrectHeight+1),0,1,0,255),map(noise(_+localrectHeight+2),0,1,0,255));
    line(position[_],lineheight, position[_+1] ,lineheight)
  }
}
function drawFlag(x, y){
  // pretty easy function, just draw a flag;
  // with right triangle
  strokeWeight(10);
  stroke(0);
  line(x,y,x,y-120);
  fill(255,0,0);
  triangle(x,y-70,x,y-120,x+50,y-80);
}

function setup() {
  // set up the programm, generateTerrain with initial recttime
  createCanvas(windowWidth, windowHeight);
  generateTerrain(recttime);
}

function draw(){
  // main function, draw the Terrain graph each frame
  // so it will look like it is moving
  recttime += 0.03;
  generateTerrain(recttime);
}
