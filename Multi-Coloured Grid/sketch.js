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


let colorchoice = [color(),color(),color(),color()];

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
  let color = [-1,-1,-1];
  let times = 0;
  let prestrokecolor = 0;
 
  


  for(let x = 0; x < width ;  x+=squaresize){
    
    // same method as what i did for the color of square, make random stroke weight and color for each column
    let tempstrokecolor = 0;
    do { tempstrokecolor = random(0,256); }while( tempstrokecolor == prestrokecolor);
    stroke(tempstrokecolor,prestrokecolor,(prestrokecolor + tempstrokecolor)%255); 
    prestrokecolor = tempstrokecolor;
    strokeWeight(random(0,25));
    for(let y = 0; y <= width; y +=squaresize){;
      for(let i = 0; i < 3; ++i)
      {
        let j = 0;
        do { j = random(0,256); }while(color[i] == j);
        color[i] = j;
      }// this allows user that none of the color on the left will be the same,
      // maybe can add more algorithm to make sure that all colour will not be the same
      // i believe should not make that complicated to have a user defined variable in a vector
      // so, i will remain as first attempt
      if(times % 10 != 0){
      // every 10 times, we will add a special color to the grid instead of the color made by random
      //each time we draw a square, times++
        fill(color[0],color[1],color[2]);
      }
      else{

      }

      square(x,y,squaresize);

      times++;
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
