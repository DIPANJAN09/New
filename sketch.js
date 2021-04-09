var a;
var b;
var ball;
var bat;
var ball2,bat2;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(400,200,50,50);

  ball=createSprite(100,100,20,20);
  ball.velocityX=3;

  bat =createSprite(600,100,20,50);

  ball2=createSprite(100,200,20,20);
  ball2.velocityY=3;

  bat2=createSprite(100,300,20,50);
}

function draw() {
  background(255,255,255);  
 b.x=World.mouseX;
 b.y=World.mouseY;

 if(a.isTouching(b)){
   a.shapeColor="red";
   b.shapeColor="red";
 }
 else{
   a.shapeColor="blue";
   b.shapeColor="blue";
 }
 ball.bounceOff(bat);
 ball2.bounceOff(bat2);

//isTouching();
  drawSprites();
}
