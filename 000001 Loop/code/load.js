





let ClosedDoorset = []; 
let OpenDoorset = []

let wallset = []; // 40 x 20
let floorset = []; // 38 x 17

let temp, temp1;

function loadAssets() {

  

  // a function load all game assets
  
  wallset.push(loadImage("assets/wall.png"));
  floorset.push(loadImage("assets/floor.png"))
  // n w s e
  for(let i = 0; i < 4; ++i){
    ClosedDoorset.push(loadImage("assets/ClosedDoor/" + i + '.png') );
    OpenDoorset.push(loadImage("assets/Opendoor/" + i + '.png'))
  }
 
}



function preload() {

  loadAssets();

}
