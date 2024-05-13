
let objects = [];

// parent class
class AnimatedObject {
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.size = 1;
    }
    move(){
      this.x += random(-2,2);
      this.y += random(-2,2);
    }
  
    display(){
      strokeWeight(4);
      point(this.x,this.y);
    }
  }
  
  class circleObj extends AnimatedObject{
    constructor(x,y){
      super(x,y); // calls parent class
      this.size = random(20,40);
    }
    display(){//function override
      circle(this.x,this.y,this.size);
      if(dist(this.x,this.y,mouseX,mouseY) < this.size/2){
        fill(255,0,0)
      }
      else fill(255)
    }
  }
  
  class lineObj extends AnimatedObject{
    constructor(){
      super(random(width),random(height));
    }
  
    move(){
      super.move();
      this.x -=5;
      if(this.x < 0) this.x = width;
    }
    display(){
      if(mouseIsPressed)strokeWeight(10);
      else strokeWeight(2);
      line(this.x,this.y,this.x+15,this.y);
    }
  }