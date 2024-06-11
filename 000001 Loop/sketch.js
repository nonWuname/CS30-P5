// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let showmusic = false;


let dungeon;

// for dungeon coordinate
let dungeonX = 0, dungeonY = 0;

// for dungeon paning
let paning = 0;
let paningstate = 'null';

let freezetime = 0;

let hero = new SpecialCharacter(100,100,20,20, new SpecialAni());

let mymusic = new Music();





let a = new Collider(20*16,10*16,20,20,'rect',0,'null','null',true)//constructor(x,y,width,height,Shapemode,damage,damageType,damageDirection){


let skeleton_shielder_ani = new SpecialAni();

let monsterList = [];

const EDGE = {
  xstart:28,
  xend: 612,
  ystart: 12,
  yend: 276
}



function setup() {
  createCanvas(40*16 + 5 * 16,20 * 16);
  
 

   dungeon = new Dungeon();
   dungeon.setup();
   dungeon.mini_map();

   for (let i = 0; i < mymusic.musicarr.length; ++i) {
    mymusic.musicarr[i].onended( 
            mymusic.shuffle(i));
 }


  monsterList.push(new Enemy(32,32,10,10,skeleton_shielder_ani,'shielder'));



}

function draw() {
  clear();
  

  if(showmusic){
    mymusic.play();
  }
  

  dungeonDisplay();



  hero.all_in_one();

  if(mouseIsPressed && !dungeon.map[dungeon.index[0]][dungeon.index[1]].played){
    dungeon.map[dungeon.index[0]][dungeon.index[1]].played = true;
  }

  hero.action();
  hero.skillAction();


  for(let it of monsterList){
    it.display();
  }
  


  

  // check for door
  
  dungeon.mini_map();
  



  uiBar();


  rectMode(CENTER); 
  fill(255)
  if(a.CheckCollision(hero.Skillcollider))fill(255,0,0);
  a.display();

  
  // clear();

  // image(temp.get(0,0,48,32),mouseX,mouseY);

  image(skeleton_shielder_ani.aniarr['run']['right'][skeleton_shielder_ani.index % 7],mouseX,mouseY);
  if(frameCount % 7 === 0)skeleton_shielder_ani.index ++;

}



function mousePressed() {
  
  showmusic = true;
  

  
  // monsterList.push(new Enemy(32,32,10,10,skeleton_shielder_ani,'shielder'));
  
  // dungeon.setup();
  // dungeon.mini_map(); 
  
}



function keyPressed(){
  if(keyIsDown(DOWN_ARROW)){monsterList[0].speed = 0}
  else if(keyIsDown(UP_ARROW)){monsterList[0].speed = 1}
}



function uiBar(){
  textSize(20);

  rectMode(CORNER)
  fill(122);
  rect(40*16,5*16,5*16,15*16);
  fill(0);
  rect(40*16,5*16, 5 * 16 - map(hero.atkFreeze,0,hero.atkFreezeMax,0,5*16),3*16);
  fill(255);
  text('atk',41.5 * 16, 6.5 * 16);

  fill(102, 51, 153);
  rect(40*16,8*16, 5 * 16 - map(hero.defFreeze,0,hero.defFreezeMax,0,5*16),3*16);
  fill(255);
  text('def',41.5 * 16, 9.5 * 16);

  fill(0, 128, 0);
  rect(40*16,11*16, 5*16 - map(hero.shootFreeze,0,hero.shootFreezeMax,0,5*16),3*16);
  fill(255);
  text('shoot',41.5 * 16, 12.5 * 16);
  
  fill(135, 206, 235);
  rect(40*16,14*16, 5 * 16 - map(hero.magicFreeze,0,hero.magicFreezeMax,0,5*16),3*16);
  fill(255);
  text('magic',41.5 * 16, 15.5 * 16);
}




 //old
// myplayer = new Player;
// mymap = new Gamemap();
// mymap.setup();









  // test for map 
  //// let x = dungeon.index[1];
  // let y = dungeon.index[0];
  
  // if (keyIsDown(UP_ARROW) === true) {
  //   y -=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[0] -=1;
      
  //   }
  //   else{
  //     y+=1;
  //   }
  // }

  // if (keyIsDown( DOWN_ARROW) === true) {
  //   y +=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[0] +=1;
  //   }
  //   else{
  //     y-=1;
  //   }
  // }

  // if (keyIsDown(LEFT_ARROW) === true) {
  //   x -=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[1] -=1;
  //   }
  //   else{
  //     x+=1;
  //   }
  // }

  // if (keyIsDown(RIGHT_ARROW) === true) {
  //   x +=1;
  //   if(dungeon.in_range(y,x) && dungeon.map[y][x].visited){
  //     dungeon.index[1] +=1;
  //   }
  //   else{
  //     x-=1;
  //   }
  // }









  // down 308 - 326 , 274
  // up 308 - 326 , 12
  // left 28, 144 - 154
  // right 612, 144 - 154