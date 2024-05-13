// Puzzle Game
// Luke Wu
// 4,25,2024
//
// Extra for Experts:
/*
As a class, we created the mechanics for a simple puzzle game, where:

Game board data is stored in a 2D array
The program renders the board based on the array contents each frame
Mouse clicks updates the contents of the array (which in turn is reflected in what is drawn to the screen each frame)
Puzzle Game Demo

Your Assignment is to take the program where we left off and to add some additional features.

Begin by downloading the following code Download following code and using it as a starting place.


Features to Implement:

Cheater Cheater!

Add functionality so that a shift - click (mouse click while the shift key is held down) will only flip the square the mouse is over. This will be useful for testing some of the other features.


Win Condition

Create a function that will look through the contents of the array to determine if the contents are all identical (all elements are 0 or all elements are 255). If this is the case, display the message "You Win" on the Window.

Randomized Starting Arrangement

Create a function that can be called once in setup() to randomize the starting board.

Expert Challenge:
Overlay
Extend the program so that there is a colored overlay to indicate which rectangles will be impacted on a click.
puzzle overlay

 
Cross or Square
Presently, the rectangles being flipped are in a cross arrangement. Extend your project so that the user can press space to change between flipping in a cross pattern or a square pattern.
puzzle overlay square   cross puzzle overlay
Submit your completed project as a zip. Don't forget a comment header and inline comments! (If using my starter code, I will only be grading whether you've commented the functions you implemented yourself!)

*/

// the const i used is same as the name;
// black for color and cross for the type of overlay
const WHITE = 255; const BLACK = 0;
const CROSS_MY = 0; const SQUARE_MY = 1;

// dy,dx is the arr i used to check the neighbor,
// _ cross means this is for the type cross
let dy_cross = [1,-1,0,0];
let dx_cross = [0,0,1,-1];
// similar mean as above
let dy_square = [1,0,1];
let dx_square = [1,1,0];

// the data for grid
let grid = [];

// var for row and column that assign by player
let row, column;

// for unfriendly player to check how many times player give a invalid input
let row_bad = 1, col_bad = 1;

let squaresize = 50;//size for square

let mycol = [WHITE,BLACK]; // the array for black and white color

let point_my; // my point to check player's point

let cheat_time = 0; // the cheat time player did
let wincount = -1;// win count to slow down the time for propmt

let flipPattern = CROSS_MY;// the flipPattern, can be either cross or square

let Play = true; // a boolean to show play or not

function setup() {
  //check below for more detail for each function
  let decision = int(prompt("What mode do you want to choose, 0 for default mode, press other to make a optional design, the default is 5x5 grid"));

  if(decision === 0){
    row = 5;
    column = 5;
  }
  else{
    Get_input();
  }

  // basic set up, after get input , make it into the array
  My_set_up();

  point_my = new Pair();
  createCanvas(column * squaresize, row * squaresize);

}

function draw() {
  // to delay the time for prompt
  if(wincount > 0){
    wincount --;
  }
  else if(wincount == 0){
    // to tell player cheat time and know will player play agian or not
    if(cheat_time === 0) alert("What a wonderful player!!!")
    else alert("this Game is not that HARD!!!! try to not cheat!!!")
    alert(`YOU WIN with ${cheat_time} times cheat`);
    
    let DoyouPlay;
    do {
      DoyouPlay = prompt("Do you want to play again? Pressed Y or N please");
    } while(DoyouPlay != "Y" && DoyouPlay != "N");
    if(DoyouPlay === "Y"){
      alert("I will generate another game for you");
      let decision = int(prompt("What mode do you want to choose, 0 for default mode, press other to make a optional design, the default is 5x5 grid"));
      reset(decision);
    }
    else if(DoyouPlay === "N"){
      alert("Bye, Have a nice Day")
      noLoop();
      Play = false;
      createCanvas(0,0);
    }    
  }
  
  // basic set up for the game
  drawGrid();
  getlocation();
  overlay(flipPattern);

}

function My_set_up(){
  // make a user scale grid
  for(let _ = 0; _ < row; ++_){
    grid.push([]);
    for(let _i = 0; _i < column; ++_i){
      grid[_].push(mycol[int(random(2))]);
    }
  }
}

class Pair{
  // create a object to store x and y for current location
  constructor(x,y){
    this.y = y;
    this.x = x;
  }
}


function Get_input(){
  // get input for column and row
  do{
    row = int(prompt(`What numerical value would you like to assign to the row? Please provide an number(i will round to integer). This is your ${row_bad} times!!!!!!`));
    row_bad++;
  }while(!Number.isInteger(row));
  do{
    column = int(prompt(`What numerical value would you like to assign to the column? Please provide an number(i will round to integer). This is your ${col_bad} times!!!!!!`));
    col_bad++;
  }while(!Number.isInteger(column));

  if(row > 20){
    row = 20;
    alert("Your input is not applicable in this range. The row has been changed to 20. Press cancel or type anything to continue.");
  } 
  if(column > 20){
    column = 20;
    alert("Your input is not applicable in this range. The column has been changed to 20. Press cancel or type anything to continue.");
  } 
  if(row <= 0){
    row = 5;
    alert("Your input is not applicable in this range. The row has been changed to 5. Press cancel or type anything to continue.");
  } 
  if(column <= 0){
    column = 5;
    alert("Your input is not applicable in this range. The column has been changed to 5. Press cancel or type anything to continue.");
  }

  // The friendly regrad for unfriendly player
  if(row_bad >= 10){
    alert("Why do you mess up on row more than 10 times???????????");
  }
  if(col_bad >= 10){
    alert("Why do you mess up on column more than 10 times???????????");
  }
}

function drawGrid(){
  for(let i = 0; i < row; ++i){
    for(let j = 0 ; j < column; ++j){
      fill(grid[i][j]);
      square(j*squaresize,i*squaresize,squaresize);



///////// MMMMMMMARK HERE!!!!!!!!!!!!!!!!!!!!!!!!  
//  square(i*squaresize,j*squaresize,squaresize);
// create a bug that the overlay cross doesn't match the actual play cross;
// this is because in drawGrid is square(y,x,size)
// in overlay it is square(x,y,size)
// later i change it, it is fine
    }
  }
}

function getlocation(){
  // getlocation for player 
  let constrainX = constrain(mouseX,0,width-1);
  let constrainY = constrain(mouseY,0,height-1);
  point_my = new Pair(int(constrainX / squaresize), int(constrainY / squaresize))
}


function mouseClicked(){
  // doing the check once player click the mouse
  
  if(Play){
    if(mouseButton == LEFT){
      if(mouseX >= 0 && mouseX < width-1 && mouseY >= 0 && mouseY < height - 1)
      {
        flip(); 
        cheat_time ++;
      }
    }
    if(!keyIsDown(SHIFT) && mouseX >= 0 && mouseX < width-1 && mouseY >= 0 && mouseY < height - 1){
      neighbor_check(flipPattern);
      cheat_time --;
      if(cheat_time < 0) cheat_time = 0;
    }
    if(Win_check()){
      
      wincount = 3;
    }
  }
  
}

function flip(){
  //case 1
  if(grid[point_my.y][point_my.x] == BLACK){
    grid[point_my.y][point_my.x] = WHITE;
    
  }
  //case 2
  else{
    grid[point_my.y][point_my.x] = BLACK;
  }
 
}



// old
//
/*

if(grid[point_my.y + dy[_]][point_my.x + dx[_]] == WHITE){
          grid[point_my.y + dy[_]][point_my.x + dx[_]]= BLACK;
        }
        else if(grid[ point_my.y + dy[_]][point_my.x + dx[_]] == BLACK){
          grid[point_my.y + dy[_]][point_my.x + dx[_]]= WHITE;
        }
*/
function neighbor_check(type){
  // check the neighbor around the MouseX and mouseY
  // with different type
  if(type == CROSS_MY){
    for(let _ = 0; _ < dx_cross.length; ++_){
      if((point_my.y + dy_cross[_] >= 0 && point_my.y + dy_cross[_] < row) && (point_my.x + dx_cross[_] >= 0 && point_my.x + dx_cross[_] < column)){
        if(grid[point_my.y + dy_cross[_]][point_my.x + dx_cross[_]] == WHITE){
          grid[point_my.y + dy_cross[_]][point_my.x + dx_cross[_]]= BLACK;
        }
        else if(grid[ point_my.y + dy_cross[_]][point_my.x + dx_cross[_]] == BLACK){
          grid[point_my.y + dy_cross[_]][point_my.x + dx_cross[_]]= WHITE;
        }
      }
    }
  }
  
  else if(type === SQUARE_MY){
    for(let _ = 0; _ < dx_square.length; ++_){
      if((point_my.y + dy_square[_] >= 0 && point_my.y + dy_square[_] < row) && (point_my.x + dx_square[_] >= 0 && point_my.x + dx_square[_] < column)){
        if(grid[point_my.y + dy_square[_]][point_my.x + dx_square[_]] == WHITE){
          grid[point_my.y + dy_square[_]][point_my.x + dx_square[_]]= BLACK;
        }
        else if(grid[ point_my.y + dy_square[_]][point_my.x + dx_square[_]] == BLACK){
          grid[point_my.y + dy_square[_]][point_my.x + dx_square[_]]= WHITE;
        }
      }
    }
  }

}


function Win_check(){
  // do a win check if only all are white 
  for(let _ = 0; _ < grid.length; ++_){
    for(let _i = 0 ; _i < grid[_].length; ++_i){
      if(grid[_][_i] === BLACK) return false;
    }
  }

  return true;
}


function overlay(type){
  // show the overlay for player

  fill(0,132,233,120);
  square(point_my.x * squaresize , point_my.y *squaresize,squaresize);

  if(!keyIsDown(SHIFT)){
    if(type == CROSS_MY){//0 for cross, later i add const, so this is cross
      for(let _ = 0; _ < 4; ++_){
        if((point_my.y + dy_cross[_] >= 0 && point_my.y + dy_cross[_] < row) && (point_my.x + dx_cross[_] >= 0 && point_my.x + dx_cross[_] < column)){
          fill(0,132,233,120);
          square((point_my.x + dx_cross[_])* squaresize , (point_my.y + dy_cross[_])*squaresize,squaresize);
       }
      }
    }
  
  if(type == SQUARE_MY){// 1 for square
      for(let _ = 0; _ < dx_square.length; ++_){
        if((point_my.y + dy_square[_] >= 0 && point_my.y + dy_square[_] < row) && (point_my.x + dx_square[_] >= 0 && point_my.x + dx_square[_] < column)){
          fill(0,132,233,120);
          square((point_my.x + dx_square[_])* squaresize , (point_my.y + dy_square[_])*squaresize,squaresize);
        }
      }
    }
  }
}


function reset(decision){
  // reset the game 
  
  grid.length = 0;
  if(decision === 0){
    row = 5;
    column = 5;
  }
  else{
    Get_input();
  }

  // basic set up, after get input , make it into the array
  My_set_up();
  createCanvas(column * squaresize, row * squaresize);
  cheat_time = 0;
  wincount = -1;
  row_bad = 1, col_bad = 1;

}


function keyPressed(){
  // to change flip pattern once player pressed space
  if(keyIsDown(32)){
    if(flipPattern == CROSS_MY)flipPattern = SQUARE_MY;
    else flipPattern = CROSS_MY;
  }
}