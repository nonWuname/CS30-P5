// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let map1;











function setup() {
  createCanvas(24*16,18*16);
  
  // myplayer = new Player;
  // mymap = new Gamemap();
  // mymap.setup();

   map1 = new gameMap();

   map1.setup();
}

function draw() {

  clear();

  image(temp.get(0,0,48,32),mouseX,mouseY);
}



function mousePressed() {
  myplayer.y ++;
  myplayer.x ++;
}



function keyPressed(){

}



