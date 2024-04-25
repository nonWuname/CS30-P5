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

// the data for grid
let grid;

// var for row and column that assign by player
let row, column;

// for unfriendly player
let row_bad = 1, col_bad = 1;

let squaresize = 50;//size for square

function setup() {
  createCanvas(windowWidth, windowHeight);
  //check below for more detail for each function
  Get_input();

}

function draw() {
  background(220);
  print('row is',row);
  print(column);
}

function Get_input(){
  // get input for column and row
  do{
    row = int(prompt(`What numerical value would you like to assign to the row? Please provide an number(i will round to integer). This is your ${row_bad} times!!!!!!`));
    row_bad++;
  }while(!Number.isInteger(row));
  do{
    column = int(prompt(`What numerical value would you like to assign to the row? Please provide an number(i will round to integer). This is your ${col_bad} times!!!!!!`));
    col_bad++;
  }while(!Number.isInteger(column));

  if(row > 20){
    row = 20;
    prompt("Your input is not applicable in this range. The row has been changed to 20. Press cancel or type anything to continue.");
  } 
  if(column > 20){
    column = 20;
    prompt("Your input is not applicable in this range. The column has been changed to 20. Press cancel or type anything to continue.");
  } 
  if(row <= 0){
    row = 5;
    prompt("Your input is not applicable in this range. The row has been changed to 5. Press cancel or type anything to continue.");
  } 
  if(column <= 0){
    column = 5;
    prompt("Your input is not applicable in this range. The column has been changed to 5. Press cancel or type anything to continue.");
  }

  // The friendly regrad for unfriendly player
  if(row_bad >= 10){
    prompt("Why do you mess up on row more than 10 times???????????");
  }
  if(col_bad >= 10){
    prompt("Why do you mess up on column more than 10 times???????????");
  }
}

function My_set_up(){

}