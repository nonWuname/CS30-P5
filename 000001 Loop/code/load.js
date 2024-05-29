





let doorset = [];

let roomset = [];


let temp, temp1;

function loadAssets() {

  doorset.length = 4;

  // a function load all game assets
  
  roomset.push(loadImage("assets/map.png"));

  // n w s e
  for(let i = 0; i < doorset.length; ++i){
    doorset[i] = loadImage("assets/ClosedDoor/" + i + '.png');
  }
 
}



function preload() {

  loadAssets();

}
