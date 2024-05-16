// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let floorset = [];
let wallset = [];

let map_arr = [];


let init_x = 0, init_y = 0;


let mymap;

function preload(){
  
  loadAssets();

}



function setup() {
  createCanvas(24*16,18*16);
  generateMap_arr();
  mymap = new Gamemap(map_arr);
  mymap.init();
}

function draw() {
  clear();
  mymap.display();
  
}


function loadAssets(){
  // a function load all game assets
  
  // load floor
  for(let i =0 ; i < 8; ++i){
    floorset.push(loadImage("assets/floor/" + i + ".png"));
  }

  // load wall
  wallset.push(loadImage("assets/wall/simple/mid/0.png"));
  

}

class Character{

  constructor(){

  }

}


class Ani{

  constructor(){

  }

}


class Tile{

  constructor(x,y,state){
    this.x = x;
    this.y = y;
    this.state = state;
  }
}

function generateMap_arr(){
  for(let y = 0; y < 30; ++y){
    let temp = [];
    for(let x =0; x < 30; ++x){
      temp.push(floorset[int(random(floorset.length))]);
    }
    map_arr.push(temp);
  }
}



function mousePressed() {
  init_x ++;
}

class Gamemap{

  constructor(arr){
    this.arr = arr;
    this.img;
  }

  init(){
    let temp_w = 0,temp_h = 0;
    
    // get data
    for(let y = 0; y < this.arr.length; ++y){
      temp_h += 16;
      for(let x = 0; x< this.arr[y].length; ++x){
        temp_w += 16;
      }
    }

    // set up
    this.img = createImage(temp_w,temp_w);
    this.img.loadPixels();

    // iterate then make the map
    for(let y = 0; y < this.arr.length * 16; ++y){
      for(let x = 0; x< this.arr[int(y/16)].length * 16; ++x){
        let c;
        let temp_x = int(x/16); let temp_y =int(y/16);
        c = this.arr[temp_y][temp_x].get(x%16,y%16); 
        this.img.set(x,y,c);
      }
    }
    

    this.img.updatePixels();
  }

  display(){
    image(this.img.get(init_x,init_y,width,height),0,0);
  }


}