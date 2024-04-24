// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let a = [];



function setup() {
  createCanvas(windowWidth,windowHeight);

  for(let _ = 0 ; _ < 1; ++_){
    a.push(new asdasda());
  }
}



function randomelement(currlen){
  push();
  rotate(random(360));
  while(currlen > 5){
    
    rotate(random(-40,40));
    line(0,0,0,currlen);
    translate(0,currlen);
    currlen*=0.75;
  }
  pop();
}

function draw() {
  for(let it of a){
    it.change();
    it.display();
  }
}

function mouseClicked()
{
  noLoop();
}

class asdasda{

  constructor(){
    this.x = int(random(4));
    this.x1 = int(random(5));
    this.xtotal = this.x + this.x1;
  }

  change(){
    this.x--;
  }

  display(){
    print(this.xtotal);
  }

}