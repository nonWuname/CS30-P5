// Art Replication Warm-up
// Luke Wu
// 3,28,2024
// Extra for Experts:
// a warm-up project, inspired by 
//“Ninety Parallel Sinusoids With Linearly Increasing Period” [early 1960s]
// The top sinusoid was expressed mathematically and then repeated again and again.
// The result closely approximates the op-art painting “Current” by Bridget Riley.


// can't do random before set up
let start,y_height;
let choice;
// my color set
let colors = ['#00A8C6','#40C0CB','#AEE239','#F38630','#351330','#424254','#64908A'];
let previous = -1;

function setup() {
  // can't use screen width and height since if it is too large, then the graph will be terrible
  
  //choose which method to be used to draw the wave
  choice = int(random(2));

  createCanvas(749,383);


  background(220);
  // used degree mode since its range is better
  angleMode(DEGREES);
  
  // random for start position
  start = random(0,100);
  y_height = random(0,100);

  //move the plane, a essential point to do;
  // my old method might work, but move plane save my brain cells
  translate(start,y_height);
  
  // this is old method, with no translate and cause me headache
  // for(let i = 0; i < 5; ++i){
  // start = start + 2*PI*shrink;
  // print(start);
  // combowave(start,1/shrink,expand,y_height);
  // shrink= random(10,40); 
  // }

  // call bigwave to execute and finish the assignment
  if(choice == 0)bigwave();
  else if(choice == 1) increase_wave();

}

function bigwave(){
  // a function with no parameter and call combowave() to generate final wave
  for(let temp = start; temp < width - start * 2;){
    let expand = int(random(1,10));
    let shrink = int(random(2,20)); 
    temp = temp + 360/shrink;
    combowave(shrink,expand);
    translate(360/shrink,0);
  }
}

function combowave(shrink_of_x,expand_of_y){
  // a function that call wave() to generate mutiple wave
  // in a vertical line and different colour for different combowave
  let mycolour;
  // a new way i add to ensure no two adjacent wave shall be same colour
  do {mycolour = int(random(0,colors.length));}while(mycolour == previous);
  stroke(colors[mycolour]);

  for(let tempheight = 0; tempheight < height - 2 * y_height; tempheight+=4){ 
    push();
    translate(0,tempheight)
    wave(shrink_of_x,expand_of_y);
    pop();
  }
  previous = mycolour;
}

function wave(shrink_of_x,expand_of_y){
  // the starting point of this program(single wave), and in my old method, i need have bunch of unnecessary parameter;
  // less parameter, easy to fix hence i apply new method;
  let period = 360/shrink_of_x;
  for(let x=0; x <= period; x+=1){
    let y = expand_of_y * sin(x * shrink_of_x);
    point(x,y);
  }
}

function increase_wave(){
  // the function that similar to original wave
  // this function allow user to create a wave that is linear(actually, 2^x, exponential growth) growth
  // the period of single wave will become smaller and smaller
  let shirnk_inc = 1;
  let mutiple = 1;
  let times = int(random(3,8));
  let expand = 5;
  for(let _ = 0; _ <= times; ++_){
    combowave(shirnk_inc,expand);
    translate(360/shirnk_inc,0);
    shirnk_inc = mutiple * 3;
    mutiple++;
    
  }
}