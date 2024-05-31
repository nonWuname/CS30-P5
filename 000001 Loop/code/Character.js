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
    
    
    this.direction = "down";
    this.condition = "run";
  }

  setup(){

  }


  display(){
    this.ani.display(this.direction,this.condition,this.x,this.y);
  }



}