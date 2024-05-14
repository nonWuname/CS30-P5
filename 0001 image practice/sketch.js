// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let img;


let imgset = [];


function preload(){

  img = loadImage("assets/1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  ImageHelper(img.width,img.height,16,imgset,img);
  




}

function draw() {
  background(220);
  image(img,0,0);

  image(imgset[1][0],0,0);
  
}


function ImageHelper(w,h,pixel,array,img){
  // this is a function that will help 
  // me to transfer the png into a small protion into the game by coding.
  // rather than use sprite sheet
  // i would like to make the as a 2d array because the img is 2d

  for(let y = 0; y < h; y += pixel){
    let temp = [];
    for(let x = 0; x < w; x += pixel){
      temp.push(img.get(x,y,pixel,pixel));
    }
    array.push(temp);
  }

}
  

