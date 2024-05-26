
let knight = [];

let floorset = [];
let wallset = [];









let temp, temp1;

function loadAssets(){
    // a function load all game assets
    
    // load floor
    for(let i =0 ; i < 8; ++i){
      floorset.push(loadImage("assets/floor/" + i + ".png"));
    }
  
    // load wall
    for(let i = 0; i < 3; ++i){
      wallset.push(loadImage("assets/wall/simple/mid/" + i + ".png"));
    }
    

     temp = loadImage("assets/Heroes/Knight/Death/0.png");
    loadSpriteSheet(temp,48,32,knight);


    temp1 = loadImage("assets/hello.png");
  }
  

  function loadSpriteSheet(img,w,h,arr){
    
    for(let x = 0; x <= img.width; x += 20){
      let temp;
      temp = img.get(x,0,w,h);
      arr.push(temp);
      
    }

  }

  function preload(){
  
    loadAssets();
    
  }
  