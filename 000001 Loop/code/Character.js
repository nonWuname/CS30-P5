class Character{

    constructor(){
  
    }
  
  }




class SpecialCharacter{
  constructor(x,y,atk,hp,ani){
    this.x = x;
    this.y = y;
    this.atk = atk;
    this.hp = hp;
    this.ani = ani; 


    this.debug = true;
    
    
    this.direction = "down";
    this.condition = "run";
  }

  setup(){

  }


  display(){
    this.ani.display(this.direction,this.condition,this.x,this.y);

    if(this.debug){
      // -22,  rect with length 22,10
      
      rectMode(CENTER);
      // door detect
      rect(hero.x,hero.y + 22,22,10);
      
      
      if(mouseIsPressed){
        rectMode(CORNER)
        // monster detecr
        rect(hero.x - 16, hero.y - 20,32,46)
      }
  
    }

  }


  


}