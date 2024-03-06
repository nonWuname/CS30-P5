// Multi-Coloured Grid
// Luke Wu
// March 1,2024
//
// I will be showing off my looping skills.  make a colour grid, not very important and hard subject
// so i won't explain too much, just a assignment and might show some my art talent(maybe) 

let squaresize = 0; // the size of square, 0 means i didn't init it
let factor = []; // two solution to solve, by complete or cut square; 
//i don't want waste time to come up two solution with no bonus, thus only with factor: fit entirely,
// cut square is not consider anymore
let factor_index = 0; // the index of factor, notice the less the index is, the less the squaersize is since i iterate from small to large

function setup() {
  let size = 3100;// canvans size
  createCanvas(size, size);

  // to ignore the right click
  document.addEventListener("contextmenu", event => event.preventDefault());
  
  //initial the factor list so player can know the 
  init_factor();
  //after init factor, init squaersize at the middle of the list
  squaresize = factor[factor_index];
  // obviously, createGrid
  createGrid(); 
}

function init_factor()
{
  // this help me to init the factor of the canvans since only and only if a|width, the size of 'a' will work perfectly
  
  // main case, travesal from 20--width, all the i|width will be put into the factor list
  // if there are 60 more square(60 x 60), we ignore it, by this, no more edge case are there
  // actually, this if(factor.length == 0 ) is not needed, 
  //but i am lazy and i don't want to change the code as long as it run completely
  if(factor.length == 0){
    for(let i = 1; i <= width ; ++i){
      if(width % i == 0 && (width / i) <= 60) factor.push(i);
    }
  }
  // since the index is not init yet, i will do that right here
  factor_index = Math.round(factor.length / 2);
}

function createGrid(){
  // this is the basic function,
  // no need to explain too much
  // just use nested loop to create a grid with square and fill with colour
  for(let x = 0; x < width ;  x+=squaresize){
    for(let y = 0; y <= width; y +=squaresize){;
      let r = random(0,256) , g = random(0,256), b = random(0,256);
      stroke(random(x,y));
      strokeWeight(x%10);
      stroke((x**2)%255,(y**2)%255,(x*y)%255);
      fill(r,g,b);
      square(x,y,squaresize);
    }
  }
}

function keyPressed() {
  // to create grid and paint again after press key
  createGrid();
}

function mousePressed() {
  // do the if statement first, since the list is already sort in order,
  // i can do this in whatever i want, go left means size go smaller, vice versa


  if(mouseButton == LEFT && factor_index <= factor.length - 2 ) squaresize = factor[++factor_index];
  else if(mouseButton == RIGHT && factor_index >= 1 ) squaresize = factor[--factor_index];
  
  //if(mouseButton != CENTER) this can avoid do nothing and fill agian when press center, however Mr.scott said it is not needed, thus put as comment
  
  //afrer change it, we redraw the grid
  createGrid();
  
}

// sidenote, the cut solution is possible, but inconvenience, we just need to make sure stop traversal at the point width - squaresize * 2 if(width % y != 0) break;
// and add bunch code fix something, but it is not important and i am lazy
