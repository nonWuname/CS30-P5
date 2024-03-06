// Representationing Rectangle
// Luke Wu
// March 6th
//
// Creating some geometry that can be
// move up and moved around

let x,y,rWidth,rHeight;
let rleft,rright,rtop,rbottom;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rWidth = 200; rHeight = 100;
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function drawrectangle(){
  //render the rectangle calculate the movement
  updateedgeposition();
  
  if( abs(x-mouseX) <= 3 && abs(y-mouseY) <= 3)fill(34,234,12);
  else fill(123,32,234);

  if((x != mouseX) || (y != mouseY) ){
    
    if(x <= mouseX) x+=2;
    if(x >= mouseX )x -=2;
    if(y >= mouseY )y -=2;
    if(y <= mouseY)y +=2;
    
}
    

  rect(x,y,rWidth,rHeight);
}

function inrectangle(){
  // boolean function to test is it in rectangle
  if(mouseX >= rleft && mouseX <= rright && mouseY <= rbottom && mouseY >= rtop ) return true;
  return false;
}



function updateedgeposition(){
  //update top,bottom,right,left value
  rleft = x - rWidth / 2; rright = x + rWidth /2;
  rtop = y - rHeight / 2; rbottom = y + rHeight /2;
}

function draw() {
  background(220);
  drawrectangle();
  print(mouseX, mouseY,x,y);



}


