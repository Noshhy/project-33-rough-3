const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;
var snowmanImg;
var snowman ,snow;
var invisibleGround;
var snow ;

function preload(){
  bg = loadImage("snow2.jpg");
  snowmanImg = loadImage("Snowman.png");

}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  // Creating Snowman sprite
  snowman = createSprite(100, 410, 50, 50);
  snowman.addImage( snowmanImg);
  snowman.scale = 0.5;

  // Creating invisible round ground so that snowman does not fall.
  invisibleGround = createSprite(100, 520, 500, 50);
  invisibleGround.visible= false;
}

function draw() {
  background(bg);

  Engine.update(engine);

  stroke("Black");
  fill("Black");
  textSize(20);
  text("Press space to make the snowman jump", 30, 90);
  
  // Making snowman collide with ground so it stops.
  snowman.collide(invisibleGround);

   rand = Math.round(random(1,4));

   if(frameCount%5===0) {
       snow.push(new Snow(random(0, 800), 30, 30))
       
     }
     for(var j = 0; j<snow; j++) {
       snow[j].display()
     }

  drawSprites();
}

function keyPressed(){

  // When Space is pressed, the snowman will start jumping.
  if(keyCode === 32 && snowman.y >= 340 ){
      snowman.velocityY = -12;
    }
    snowman.velocityY = snowman.velocityY + 0.8;
    console.log(snowman.y);
     
    // When down arrow key is pressed, the snowman will stop jumping
    if(keyDown("DOWN_ARROW ")){
      snowman.velocityY = 0;
    }
}
