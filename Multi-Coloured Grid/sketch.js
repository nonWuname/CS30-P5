// Multi-Coloured Grid
// Luke Wu
// March 1,2024
//
// I will be showing off my looping skills.  make a colour grid, not very important and hard subject
// so i won't explain too much, just a assignment and with show some my art talent(maybe) 

let squaresize = 10;

function setup() {
  createCanvas(400, 400);
  document.addEventListener("contextmenu", event => event.preventDefault());
  createGrid();
}

function createGrid(){
  for(let x = 0; x <=width;  x+=squaresize){
    for(let y = 0; y <= height; y +=squaresize){
      let r = random(0,556) , g = random(0,556), b = random(0,556);
      fill(map(Math.round(r),0,555,0,255), map(Math.round(g),0,555,0,255), map(Math.round(b),0,555,0,255));

      square(x,y,squaresize);
    }
  }
}

function keyPressed() {
  createGrid();
}

function mousePressed() {
  if(mouseButton === LEFT) 
  { 
    while(true){

    }
  }
  else if(mouseButton === RIGHT) 
  { 
    squaresize ++;
  }  
  createGrid();
  
}

