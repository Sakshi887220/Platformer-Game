var AUP
var AUP_Animation
var BG
var Platform_Img
var Score = 0
var LoveWater
var BottleOLoveWater
var DeadBoiDino
var DeadBoiDino_Img
var PatPatFromMe
var InvisibleGround
var platform, platformImg
var coinImg, coin

var coinGroup, miniGroup
var invisibleground

var gameState="start";

function preload() {
  AUP_Animation = loadAnimation("aup/aup1.png", "aup/aup2.png", "aup/aup3.png", "aup/aup4.png", "aup/aup5.png")
  BG = loadImage("back3.jpg")
  //Platform_Img = loadImage("Platform (Platformer Game).png")
  //BottleOLoveWater = loadImage("Lava (Platformer Game).png")
  platformImg=loadImage("plat4.jpg");
  miniplatformImg=loadImage("plat6.png")
  coinImg=loadAnimation("coins/coin1.png", "coins/coin2.png", "coins/coin3.png", "coins/coin4.png", "coins/coin5.png",
   "coins/coin6.png", "coins/coin7.png", "coins/coin8.png", "coins/coin9.png", "coins/coin10.png", "coins/coin11.png", 
   "coins/coin12.png", "coins/coin13.png", "coins/coin14.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  AUP = createSprite(displayWidth/2-400,displayHeight/2+330,20,20)
  AUP.addAnimation("InnerSloth", AUP_Animation)
  AUP.scale=2;

  platform=createSprite(displayWidth/2, displayHeight/2+330, displayWidth, displayHeight);
  platform.addImage("platform", platformImg)
  platform.scale=2.8

  invisibleground=createSprite(displayWidth/2-400, displayHeight/2+340, displayWidth,-130);
  invisibleground.collide(AUP)
  invisibleground.visible=true

miniGroup=new Group();
coinGroup=new Group();

  

}
function draw() {
  background(BG);
  textSize(28)
  fill("Orange");
 fontSize("20px")

 
  text('Score: '+Score,displayWidth/2-620, displayHeight/2-310)  
  Score = Math.round(frameCount/6)
  
  platform.velocityX=-5;
  if(platform.x<0){

    platform.x=platform.width/2;
  }

if (keyDown("space")|| keyDown("UP_ARROW")){
  AUP.velocityY = -7
}
AUP.velocityY = AUP.velocityY + 0.5

AUP.collide(invisibleground)
   
 mplatform()            


drawSprites();
}

function mplatform() {
if (frameCount%250===0){
miniplatform = createSprite(displayWidth,displayHeight/2-120,15,15)
miniplatform.velocityX = -6
miniplatform.y=Math.round(random(height/2-140, height/2+10))
miniplatform.addImage(miniplatformImg)
miniplatform.scale=0.8;
miniplatform.lifetime=displayWidth
miniGroup.add(miniplatform);


for(var i=0; i<5 ;i++){
coin = createSprite(displayWidth+i*50,displayHeight/2-180,15,15)
  coin.velocityX = -6
  coin.y= miniplatform.y;
  coin.addAnimation("coin", coinImg)
  coin.scale=1;
  coin.lifetime=displayWidth
  coinGroup.add(coin);

}
}
}

