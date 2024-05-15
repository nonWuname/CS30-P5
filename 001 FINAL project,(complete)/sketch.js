// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let floorset = [];
let wallset = [];



let temp;

function preload(){
  
  loadAssets();

}



function setup() {
  createCanvas(24*16,18*16);
  
}

function draw() {
  background(220);
  image(temp,mouseX,mouseY);
}


function loadAssets(){
  // a function load all game assets
  
  // load floor
  for(let i =0 ; i < 8; ++i){
    floorset.push(loadImage("assets/floor/" + i + ".png"));
  }

  // load floor spike
  temp = loadImage("assets\\wall\\simple\\column_wall.png")

}

class Character{

  constructor(){

  }

}


class Ani{

  constructor(){

  }

}



function grid(){
  for(let y = 0; y < height; y+=16){
    for(let x = 0; x < width; x +=16){
      image(floorset[int(random(floorset.length))],x,y);
    }
  }
}