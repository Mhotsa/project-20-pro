var back, bg, brush, sleep, gym, eat, drink, move, astronaut, bath;
function preload() {
  bg = loadImage("images/iss.png");
  brush = loadImage("images/brush.png");
  sleep = loadImage("images/sleep.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png", "images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(380, 200);
  astronaut.addAnimation("sleep", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brush", brush);
    astronaut.changeAnimation("brush");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eat", eat);
    astronaut.changeAnimation("eat");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")) {
    astronaut.addAnimation("move", move);
    astronaut.changeAnimation("move");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
}