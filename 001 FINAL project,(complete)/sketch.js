// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let map1;








function setup() {
  createCanvas(40*16 + 5 * 16,20 * 16);
  
  
  // myplayer = new Player;
  // mymap = new Gamemap();
  // mymap.setup();

   map1 = new Dungeon();
   map1.setup();
   map1.mini_map();


   
}

function draw() {
  
  map1.mini_map();
  
  // clear();

  // image(temp.get(0,0,48,32),mouseX,mouseY);
}



function mousePressed() {
  
  

 
  
  
  
  map1.setup();
  map1.mini_map(); 

}



function keyPressed(){
  
  let x = map1.index[1];
  let y = map1.index[0];
  
  if (keyIsDown(UP_ARROW) === true) {
    y -=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[0] -=1;
      if(!map1.map[y][x].played)map1.map[y][x].played = true;
    }
    else{
      y+=1;
    }
  }

  if (keyIsDown( DOWN_ARROW) === true) {
    y +=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[0] +=1;
      if(!map1.map[y][x].played)map1.map[y][x].played = true;
    }
    else{
      y-=1;
    }
  }

  if (keyIsDown(LEFT_ARROW) === true) {
    x -=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[1] -=1;
      if(!map1.map[y][x].played)map1.map[y][x].played = true;
    }
    else{
      x+=1;
    }
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x +=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[1] +=1;
      if(!map1.map[y][x].played)map1.map[y][x].played = true;
    }
    else{
      x-=1;
    }
  }
}



