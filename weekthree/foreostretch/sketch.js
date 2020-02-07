// variables to store images to show foreo actions
let foreoNormal;
let foreoStretch;

// variable to stretchness of foreo
let stretchness = 1; //0: off 1: on

function setup() {
  createCanvas(400, 400);
  
  // load foreo images
  foreoNormal = loadImage("image/foreo_normal.png");
  foreoStretch = loadImage("image/foreo_stretch.png");
  
}

function draw() {
  background(200);
  
  //set origin point of the image to the center of image
  imageMode(CENTER);
  
  // check whether stretchness is 0:off or 1:on.
  if (stretchness == 1){
    //show foreoNormal image
    image(foreoNormal,width/2,height/2,300,300);
  }else{
    //show foreoStretch image
    image(foreoStretch,width/2,height/2,300,300);
  }

}

var sound;

function preload() {

	sound = loadSound("sound/stretch_sound.mp3");
}


  //unstretch foreo
  function on(){
    stretchness = 1;
    print("foreo is normal!");
  }
  
  //stretch foreo
  function off(){
    stretchness = 0;
    print("foreo is stretched!");
  }
  
  //when a mouse button is pressed
  function mousePressed(){
    //stretch foreo
    off();
    sound.play();
  }
  
  //when a mouse button is released
  function mouseReleased(){
  //unstretch foreo
  on();
  }

// var sound;

// function preload() {

// 	sound = loadSound("sound/stretch_sound.mp3");
// }

// function setup() {
//   createCanvas(400, 400);
// }

// function mousePressed() {
// 	sound.play();
// }  

// function mouseReleased(){
//   off();
// }
