// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let map1;








function setup() {
  createCanvas(40*16 + 5 * 16,20 * 16);
  
  stroke(255);
  // myplayer = new Player;
  // mymap = new Gamemap();
  // mymap.setup();

   map1 = new Dungeon();
   map1.setup();
   map1.display();

   background(0)

   
}

function draw() {
  
  
  // clear();

  // image(temp.get(0,0,48,32),mouseX,mouseY);
}



function mousePressed() {
  clear();
  

 
  
  for(let y = 0; y < 5; ++y){
    for(let x = 0; x < 5 ; ++x){
      fill(255,0,0);
      square(y * 16,x * 16, 16);
        
    }

  

    
}
  
  
  map1.setup();
  map1.display(); 
}



function keyPressed(){

}



