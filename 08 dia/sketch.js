// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let space = 40;
let coordinate= [];
let mazetime = 0;
let currsize;
function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(220);
  
  let tempmazetime = mazetime;
  currsize = coordinate.length - 3;

  space = map(mouseX,0,width,60,10);
  
  for(let y = 0; y < height; y+=space){
    coordinate.push();
    for(let x = 0; x < width; x+=space){
      coordinate.push(x+space);
      coordinate.push(y);
      coordinate.push(x)
      coordinate.push(y+space);
    } 
  }
  
  for(let _ = 0; _ < currsize ; _+=4){
    
    let currtime = noise(tempmazetime);

    let x1 = coordinate[_], y1 = coordinate[_+1];
    let x2 = coordinate[_+2], y2 =coordinate[_+3];
    
    tempmazetime +=0.4;
    strokeWeight(map(currtime,0,1,0,6)); 
    stroke(map(currtime,0,1,0,255));
    if(currtime > 0.5)line(x1,y1,x2,y2);
    else line(x1,y1+space,x2,y2-space);
  }
  
  
  currsize = 0;
}
