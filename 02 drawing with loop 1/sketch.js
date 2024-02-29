  // drawing with loop 1
  // Luke Wu
  // February 27, 2024
  //
  // Extra for Experts:
  // use loop to create + Array to create some visulization


  function setup() {
    createCanvas(400, 300);
   

  }

  // function mousePressed(){
  //   point1.push(mouseX);
  //   point2.push(mouseY);
  // }

  function cornerAndMouse(){
    // draw same circles near each the four corners
    // and connect some line to mouse position
    
    
    
    
    let state = 0;
    for(let i = 1 ; i < 44 ; ++i){
      if(state === 3) state = 0;
      if(state === 0) fill(255,0,0);
      if(state === 1) fill(0,255,0);
      if(state === 2) fill(0,0,255);
      if(i === 11) continue;
      if(i === 22) continue;
      
      triangle(point1[i -1], point2[i - 1], point1[i], point2[i], mouseX, mouseY);
      
      state++;
    }
    
    

   
    fill(255,255,255);
    
    for(let i = 0; i < point1.length; ++i){
      fill(255,255,255);
      circle(point1[i],point2[i],20);
    }
    
    point1.length = 0;
    point2.length = 0;
    circle(mouseX,mouseY,20);


  }


function init(){
  for(let i = 0; i <=width; i+= 40)
  { 
    point1.push(i);
    point2.push(height);
  }

  for(let i = 0; i <= height ; i+= 30){
    point1.push(0);
    point2.push(i);
  }

  for(let i = 0 ; i <= width; i+= 40){
    point1.push(i);
    point2.push(0);
  }
  
  for(let i = 0 ; i <= height; i+=30){
    point1.push(width);
    point2.push(i);
  }
}

  function draw() {
    background(220);

    init();
    cornerAndMouse();
    
    // if(point1.length > 10 && point2.length > 10){
    //   point1.length = 0; 
    //   point2.length = 0; 
    // }
    
    
  }
