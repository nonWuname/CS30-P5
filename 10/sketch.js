// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  for(let i = 40; i < height - 200; i+=4){ 
    wave(40,1/200,40,i);
  }
  
}



function wave(begin,shirnk_of_x,expand_of_y,horizontal){
  
  let period = 2*PI/shirnk_of_x;

  for(let x=begin; x < period; x+=0.8){
    let y = expand_of_y * sin(x * shirnk_of_x) + horizontal;
    point(x,y);
  }
  
}