// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let map1;




let hero = new SpecialCharacter(100,100,20,20, new SpecialAni());


function setup() {
  createCanvas(40*16 + 5 * 16,20 * 16);
  
 

   map1 = new Dungeon();
   map1.setup();
   map1.mini_map();




}

function draw() {
  clear();
  

 

  imageMode(CORNER);
  image(map1.map[map1.index[0]][map1.index[1]].wall,0,0);
  image(map1.map[map1.index[0]][map1.index[1]].floor,16,32);

  for(let i = 0; i < direction.length; ++i){
    imageMode(CENTER);
    if(map1.map[map1.index[0]][map1.index[1]].noWall[i]){
      // ori is 20 , 10; 19.5 and 9 is shift
      if(map1.map[map1.index[0]][map1.index[1]].played)image(OpenDoorset[i], (20 + 19.5 * direction[i][1]) * 16, (10 + 9 * direction[i][0]) * 16);
      else image(ClosedDoorset[i], (20 + 19.5 * direction[i][1]) * 16, (10 + 9 * direction[i][0]) * 16);  
    }
  }



  hero.display();

  if(mouseIsPressed && !map1.map[map1.index[0]][map1.index[1]].played){
    map1.map[map1.index[0]][map1.index[1]].played = true;
  }


  if(keyIsDown(68)){

    if(map1.map[map1.index[0]][map1.index[1]].noWall[3] && map1.map[map1.index[0]][map1.index[1]].played){
      if(hero.x === 612 && hero.y < 154 && hero.y > 138){
        hero.x = 28;
        map1.index[1]++;
      }
    }

    if(hero.x < 612 && hero.condition === 'run')hero.x+= 4;

    hero.direction = 'right';
    hero.condition = 'run';
  }
  else if(keyIsDown(65)  ){
    if(map1.map[map1.index[0]][map1.index[1]].noWall[1] && map1.map[map1.index[0]][map1.index[1]].played){
      if(hero.x === 28 && hero.y < 154 && hero.y > 138){
        hero.x = 612;
        map1.index[1]--;
      }
    }

    if(hero.x  > 28 && hero.condition === 'run' ) hero.x-= 4;
    hero.direction = 'left';
    hero.condition = 'run';
  }
  else if(keyIsDown(87) ){
    if(map1.map[map1.index[0]][map1.index[1]].noWall[0] && map1.map[map1.index[0]][map1.index[1]].played){
      if(hero.y === 12 && hero.x < 330 && hero.x > 308){
        hero.y = 276;
        map1.index[0]--;
      }
    }
    
    if(hero.y > 12  && hero.condition === 'run' ) hero.y -= 4;
    hero.direction = 'up';
    hero.condition = 'run';
  }
  else if(keyIsDown(83) ){
    if(map1.map[map1.index[0]][map1.index[1]].noWall[2] && map1.map[map1.index[0]][map1.index[1]].played){
      if(hero.y === 276 && hero.x < 330 && hero.x > 308){
        hero.y = 12;
        map1.index[0]++;
      }
    }
    if(hero.y < 276 && hero.condition !== 'atk' ) hero.y += 4;
    
    hero.direction = 'down';
    hero.condition = 'run';
  }
  else if(keyIsDown(76)){
    hero.condition = 'def';
  }
  else if(keyIsDown(74)){
    hero.condition = 'atk';
  }
  else if(keyIsDown(75)){
    hero.condition = 'magic';
  }
  else if(keyIsDown(85)){
    hero.condition = 'shoot';
  }
  else hero.condition = 'idle';

  print("hero is currently" , hero.condition)
  

  // check for door
  
  map1.mini_map();
  
  // clear();

  // image(temp.get(0,0,48,32),mouseX,mouseY);
}



function mousePressed() {
  
  
  
 
  
  
  
  // map1.setup();
  // map1.mini_map(); 

}



function keyPressed(){
  
  
}







 //old
// myplayer = new Player;
// mymap = new Gamemap();
// mymap.setup();




















  // test for map 
  //// let x = map1.index[1];
  // let y = map1.index[0];
  
  // if (keyIsDown(UP_ARROW) === true) {
  //   y -=1;
  //   if(map1.in_range(y,x) && map1.map[y][x].visited){
  //     map1.index[0] -=1;
      
  //   }
  //   else{
  //     y+=1;
  //   }
  // }

  // if (keyIsDown( DOWN_ARROW) === true) {
  //   y +=1;
  //   if(map1.in_range(y,x) && map1.map[y][x].visited){
  //     map1.index[0] +=1;
  //   }
  //   else{
  //     y-=1;
  //   }
  // }

  // if (keyIsDown(LEFT_ARROW) === true) {
  //   x -=1;
  //   if(map1.in_range(y,x) && map1.map[y][x].visited){
  //     map1.index[1] -=1;
  //   }
  //   else{
  //     x+=1;
  //   }
  // }

  // if (keyIsDown(RIGHT_ARROW) === true) {
  //   x +=1;
  //   if(map1.in_range(y,x) && map1.map[y][x].visited){
  //     map1.index[1] +=1;
  //   }
  //   else{
  //     x-=1;
  //   }
  // }









  // down 308 - 326 , 274
  // up 308 - 326 , 12
  // left 28, 144 - 154
  // right 612, 144 - 154