const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paperBall;
var ground;
var Box1,Box2,Box3;
function setup() {
  createCanvas(800,400);
  

  paperBall = new Paper(56,45,55,55);
  ground = new Ground(600,height,800,20);
  fill("white"); 
	Box1 = new Box(330,630,15,60);
	fill("white");
	Box2 = new Box(372,650,100,20);
	fill("white");
	Box3 = new Box(420,630,15,60);
  engine=Engine.create();
  world=engine.world;
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  paperBall.dispay();
  Box1.display();
  Box2.display();
  Box3.display();
keyPressed();
  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paperBall.Body,paperBall.Body.position,{x:85,y:-85});
}

}