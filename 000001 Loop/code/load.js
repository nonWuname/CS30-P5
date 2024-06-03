
const ANIDIRECTION = ["down", 'left', 'right', 'up'];




let ClosedDoorset = []; 
let OpenDoorset = []

let wallset = []; // 40 x 20
let floorset = []; // 38 x 17











function loadAssets() {

  




  // a function load all game assets
  
  for(let i = 0 ; i < ANIDIRECTION.length; ++i){
    hero.ani.loadAni('run', ANIDIRECTION[i] , 'assets/main Character/run/' + ANIDIRECTION[i]  + '/' , 7);
  }
  for(let i = 0 ; i < ANIDIRECTION.length; ++i){
    hero.ani.loadAni('atk', ANIDIRECTION[i] , 'assets/main Character/atk/' + ANIDIRECTION[i]  + '/' , 7);
  }
  for(let i = 0 ; i < ANIDIRECTION.length; ++i){
    hero.ani.loadAni('def', ANIDIRECTION[i] , 'assets/main Character/def/' + ANIDIRECTION[i]  + '/' , 5);
  }
  for(let i = 0 ; i < ANIDIRECTION.length; ++i){
    hero.ani.loadAni('magic', ANIDIRECTION[i] , 'assets/main Character/magic/' + ANIDIRECTION[i]  + '/' , 6);
  }
  for(let i = 0 ; i < ANIDIRECTION.length; ++i){
    hero.ani.loadAni('shoot', ANIDIRECTION[i] , 'assets/main Character/shoot/' + ANIDIRECTION[i]  + '/' , 5);
  }
  



  

  wallset.push(loadImage("assets/wall/wall.png"));
  floorset.push(loadImage("assets/floor/floor.png"))
  // n w s e
  for(let i = 0; i < 4; ++i){
    ClosedDoorset.push(loadImage("assets/ClosedDoor/" + i + '.png') );
    OpenDoorset.push(loadImage("assets/Opendoor/" + i + '.png'))
  }
 
}


function LoadSpecialAni(){

}



function preload() {

  loadAssets();

}
