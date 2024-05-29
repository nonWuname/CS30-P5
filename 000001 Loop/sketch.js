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
  imageMode(CORNER);
  let currx = map1.index[1];
  let curry = map1.index[0];
 
  image(map1.map[curry][currx].img,0,0);


  for(let i = 0; i < direction.length; ++i){
    if(map1.map[curry][currx].played){
      if(map1.map[curry][currx].noWall[i]){
        let extra = 0
        if(i === 3){
          extra = 1;
        }

        image(doorset[i], (19 + direction[i][1] * 19 + extra) * 16, (9 + direction[i][0] * 9) * 16);

        
      }
    }
  }




  print(mouseX,mouseY);


  

  // check for door
  
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





