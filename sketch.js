
var monkey , monkey_running
var banana ,bananaImage,  obstacleImage
var FoodGroup, obstacleGroup
var score
let obstacle;
var ground;

var PLAY=1,END=0;
var gameState;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
monkey = createSprite(50,400,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.095
  score = 0
  FoodGroup=new Group();
 obstacleGroup=new Group();
}


function draw() {
background("white")
  if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
  text("Score: "+ score, 400,50);
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(gameState===PLAY){
    
  }
  
  else if(gameState===END){
    obstacle.velocityX=0;
    banana.velocityX=0;
  }
  //creating ground
  ground=createSprite(400,400,4999999,30)
   ground.velocityX = -4;
   monkey.collide(ground);
  
  if(ground.velocityX=-1){
    score=score+1
  }
 
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  rock();
  if(obstacleGroup.isTouching(monkey)){
      score=0
    obstacle.velocityX=0;
    gameState=END;
    }
food()
  drawSprites();
}

function rock(){
   if(World.frameCount%80===0){
   obstacle=createSprite(520,365,20,20);  
     obstacle.addImage("obstacle",obstacleImage)
     obstacle.scale=0.095
     obstacle.velocityX=-6
    obstacleGroup.add(obstacle)
}
}

function food(){
  if(World.frameCount%80===0){
    banana=createSprite(1100,200,50,50);
    banana.addImage("banana",bananaImage)
    banana.velocityX=-6;
 banana.scale=0.095;
  }
}

