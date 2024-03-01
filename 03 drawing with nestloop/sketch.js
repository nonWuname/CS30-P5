// Gradient Background + Nested loop
// luke wu
// 2,29,2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectangleHeight = 10 , space = 20;

function setup() {
  createCanvas(300, 400);
}



function Gradientbackgorund(){
  
  for(let y = 0; y < height; y+=rectangleHeight){
    strokeWeight(0);
    let c = color(0,map(y,0,height,255,45),map(y,0,height,45,255));
    fill(c);
    rect(0,y,width ,rectangleHeight );
  }
  

}

function circle_distance(x1,y1,x2,y2){
  // given two point
  // return distance

  return Math.round(Math.sqrt((x1-x2)**2 + (y1-y2) **2) );
}

function nestedLoop(){
  strokeWeight(2);
  fill(255);
  for(let x = 0; x <= width; x += space){
    for(let y = 0; y <= height; y+= space){
      let d = circle_distance(x,y,mouseX,mouseY);

      if(d > 100) fill(0);
      else fill(255,0,0);
      
      circle(x,y,20);
      fill(25);
      textAlign(CENTER,CENTER);
      text(d,x,y);
    }
  }
}

function draw() {
  
  Gradientbackgorund();
  nestedLoop();
  
  // if(frameCount %2 === 0 & space < 20) space +=1.5;
  // else if(frameCount % 4 === 0 && space < 40) space += 0.5;
  // else if(frameCount % 4 === 0 && space < 80) space += 4;
  // else if(frameCount % 4 === 0 ) space +=8;
  
  // if(space > 200) space = 10;
  
  

}
