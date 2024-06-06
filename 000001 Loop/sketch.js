// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let dungeon;

// for dungeon coordinate
let dungeonX = 0, dungeonY = 0;

// for dungeon paning
let paning = 0;
let paningstate = 'null';

let freezetime = 0;

let hero = new SpecialCharacter(100,100,20,20, new SpecialAni());


function setup() {
  createCanvas(40*16 + 5 * 16,20 * 16);
  
 

   dungeon = new Dungeon();
   dungeon.setup();
   dungeon.mini_map();




}

function draw() {
  clear();
  
  dungeonDisplay();



  hero.display();

  if(mouseIsPressed && !dungeon.map[dungeon.index[0]][dungeon.index[1]].played){
    dungeon.map[dungeon.index[0]][dungeon.index[1]].played = true;
  }

  hero.action();
  hero.skillAction();

  print("hero is currently" , hero.condition)
  

  // check for door
  
  dungeon.mini_map();
  



  textSize(20);

  rectMode(CORNER)
  fill(122);
  rect(40*16,5*16,5*16,15*16);
  fill(0);
  rect(40*16,5*16, 5 * 16 - map(hero.atkFreeze,0,hero.atkFreezeMax,0,5*16),3*16);
  fill(255);
  text('atk',41.5 * 16, 6.5 * 16);

  fill(102, 51, 153);
  rect(40*16,8*16, 5 * 16 - map(hero.defFreeze,0,hero.defFreezeMax,0,5*16),3*16);
  fill(255);
  text('def',41.5 * 16, 9.5 * 16);

  fill(0, 128, 0);
  rect(40*16,11*16, 5*16 - map(hero.shootFreeze,0,hero.shootFreezeMax,0,5*16),3*16);
  fill(255);
  text('shoot',41.5 * 16, 12.5 * 16);
  
  fill(135, 206, 235);
  rect(40*16,14*16, 5 * 16 - map(hero.magicFreeze,0,hero.magicFreezeMax,0,5*16),3*16);
  fill(255);
  text('magic',41.5 * 16, 15.5 * 16);


  if(mouseIsPressed){
    imageMode(CENTER)
    image(temp,hero.x,hero.y);
  }
  
  // clear();

  // image(temp.get(0,0,48,32),mouseX,mouseY);
}



function mousePressed() {
  
  
  
  image(temp,hero.x,hero.y);
  
  
  
  // dungeon.setup();
  // dungeon.mini_map(); 

}



function keyPressed(){
 
}








 //old
// myplayer = new Player;
// mymap = new Gamemap();
// mymap.setup();









  // test for map 
  //// let x = dungeon.index[1];
  // let y = dungeon.index[0];
  
  // if (keyIsDown(UP_ARROW) === true) {
  //   y -=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[0] -=1;
      
  //   }
  //   else{
  //     y+=1;
  //   }
  // }

  // if (keyIsDown( DOWN_ARROW) === true) {
  //   y +=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[0] +=1;
  //   }
  //   else{
  //     y-=1;
  //   }
  // }

  // if (keyIsDown(LEFT_ARROW) === true) {
  //   x -=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[1] -=1;
  //   }
  //   else{
  //     x+=1;
  //   }
  // }

  // if (keyIsDown(RIGHT_ARROW) === true) {
  //   x +=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[1] +=1;
  //   }
  //   else{
  //     x-=1;
  //   }
  // }









  // down 308 - 326 , 274
  // up 308 - 326 , 12
  // left 28, 144 - 154
  // right 612, 144 - 154