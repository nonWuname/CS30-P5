// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let $ = 0; $ < 10; ++$){
    objects.push(new AnimatedObject(random(width),random(height)));
    objects.push(new circleObj(random(width),random(height)));
    objects.push(new lineObj());
  }
}

function draw() {
  background(220);

  for(let it of objects){
    it.display();
    it.move();
  }
}


