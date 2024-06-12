
const ANIDIRECTION = ["down", 'left', 'right', 'up'];




let ClosedDoorset = []; 
let OpenDoorset = []

let wallset = []; // 40 x 20
let floorset = []; // 38 x 17










function loadAssets() {

  



  
  // main character
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
  for(let i = 0; i < 5; ++i){
    hero.ani.aniarr['die'].push(loadImage('assets/main Character/die/' + i + '.png'));
  }

  // skeleton shielder
  for(let i = 0 ; i < ANIDIRECTION.length; ++i){
    skeleton_shielder_ani.SavetimeLoad('run', ANIDIRECTION[i] , 'assets/Skeleton/Shielder/walk/'  , 7, 'walk');
  }
  for(let i = 0 ; i < ANIDIRECTION.length; ++i){
    skeleton_shielder_ani.SavetimeLoad('atk', ANIDIRECTION[i] , 'assets/Skeleton/Shielder/tuci/' , 7, 'tuci');
  }
  for(let i = 0; i < 1; ++i){
    skeleton_shielder_ani.deathLoad('die', 'down','assets/Skeleton/Shielder/die/' , 5 );
  }
  
  





  

  wallset.push(loadImage("assets/wall/wall.png"));
  floorset.push(loadImage("assets/floor/floor.png"))
  // n w s e
  for(let i = 0; i < 4; ++i){
    ClosedDoorset.push(loadImage("assets/ClosedDoor/" + i + '.png') );
    OpenDoorset.push(loadImage("assets/Opendoor/" + i + '.png'))
  }
 
  for(let i = 0; i < 2; ++i){
    mymusic.musicarr.push(loadSound('assets/music/' + i  + '.mp3'));
  }
  // mymusic.musicarr.push(loadSound('assets/周杰倫 Jay Chou【本草綱目Chinese Herbal Manual】-Official Music Video.mp3'));
  // mymusic.musicarr.push(loadSound('assets/周杰倫 Jay Chou【霍元甲 Fearless】-Official Music Video.mp3'));


}


function LoadSpecialAni(){

}



function preload() {

  loadAssets();

}
