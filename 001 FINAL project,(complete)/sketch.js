// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let map1;








function setup() {
  createCanvas(180,180);
  
  stroke(255);
  // myplayer = new Player;
  // mymap = new Gamemap();
  // mymap.setup();

   map1 = new Dungeon();
   map1.setup();
   map1.display();


   
}

function draw() {

  
  
  // clear();

  // image(temp.get(0,0,48,32),mouseX,mouseY);
}



function mousePressed() {
  clear();
  
  for(let y = 0; y < 9; ++y){
    for(let x = 0; x < 9; ++x){
      fill(255,0,0);
      square(y * 20,x * 20, 20);
        
    }
}
  
  
  map1.setup();
  map1.display(); 
}



function keyPressed(){

}



