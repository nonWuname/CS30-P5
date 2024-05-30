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
  clear();
  
  let currx = map1.index[1];
  let curry = map1.index[0];
 

  imageMode(CORNER);
  image(map1.map[curry][currx].wall,0,0);
  image(map1.map[curry][currx].floor,16,32);

  for(let i = 0; i < direction.length; ++i){
    imageMode(CENTER);
    if(map1.map[curry][currx].noWall[i]){
      // ori is 20 , 10; 19.5 and 9 is shift
      if(map1.map[curry][currx].played)image(OpenDoorset[i], (20 + 19.5 * direction[i][1]) * 16, (10 + 9 * direction[i][0]) * 16);
      else  image(ClosedDoorset[i], (20 + 19.5 * direction[i][1]) * 16, (10 + 9 * direction[i][0]) * 16);  
    }

  }



  if(mouseIsPressed && !map1.map[curry][currx].played){
    map1.map[curry][currx].played = true;
  }




  print(mouseX,mouseY);


  

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
  
  let x = map1.index[1];
  let y = map1.index[0];
  
  if (keyIsDown(UP_ARROW) === true) {
    y -=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[0] -=1;
      
    }
    else{
      y+=1;
    }
  }

  if (keyIsDown( DOWN_ARROW) === true) {
    y +=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[0] +=1;
    }
    else{
      y-=1;
    }
  }

  if (keyIsDown(LEFT_ARROW) === true) {
    x -=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[1] -=1;
    }
    else{
      x+=1;
    }
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x +=1;
    if(map1.in_range(y,x) && map1.map[y][x].visited){
      map1.index[1] +=1;
    }
    else{
      x-=1;
    }
  }
}





