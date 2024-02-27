  // drawing with loop 1
  // Luke Wu
  // February 27, 2024
  //
  // Extra for Experts:
  // use loop to create + Array to create some visulization

  let point1, point2;

  function setup() {
    createCanvas(400, 300);
    point1 = [width*0.05, width * 0.05 , width *0.95 , width * 0.95];
    point2 = [height*0.05, height*0.95,height*0.05 , height*0.95];
  }

  function mousePressed(){
    point1.push(mouseX);
    point2.push(mouseY);
  }

  function cornerAndMouse(){
    // draw same circles near each the four corners
    // and connect some line to mouse position
    
    fill(255);
    

    
    for(let i = 0; i < point1.length; ++i){
      circle(point1[i],point2[i],20);
    }
    
    for(let i = 0; i < point1.length; ++i){
      line(point1[i], point2[i], mouseX, mouseY);
    }

  }

  function draw() {
    background(220);

    cornerAndMouse();

    if(point1.length > 10 && point2.length > 10){
      point1.length = 4;
      point2.length = 4; 
    }
    
  }
