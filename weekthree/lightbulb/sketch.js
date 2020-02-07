// variables to store images to show bulb statuses
let bulbOn;
let bulbOff;

// variable to store brightness of the buulb
let brightness = 1; //0: off 1: on

function setup() {
  createCanvas(400, 400);
  
  // load bulb images
  bulbOn = loadImage("images/bulb_on.png");
  bulbOff = loadImage("images/bulb_off.png");
  
}

function draw() {
  background(200);
  
  //set origin point of the image to the center of image
  imageMode(CENTER);
  
  // check whether brightness is 0:off or 1:on.
  if (brightness == 1){
    //show bulbOn image
    image(bulbOn,width/2,height/2,300,300);
  }else{
    //show bulbOff image
    image(bulbOff,width/2,height/2,300,300);
  }
  
  //switch on the bulb
  function off(){
    brightness = 0;
    print("the bulb is off!");
  }
  
  //when a mouse button is pressed
  function mousePressed(){
    //switch on the bulb
    on();
  }
  
  //when a mouse button is released
  function mouseReleased(){
  //switch off the bulb
  off();
  }
  
}