const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world,engine
var ground,ball,box1
function setup() {
  createCanvas(600,600);

  engine= Engine.create();
  world=  engine.world
  ground = new Ground(300,580,600,20);
  box1 = new Box(300,550,50,50);
  box2 = new Box(345,480,50,100);
}

function draw() {
  background(10,10,10);
  Engine.update(engine)
  
  ground.display();
  box1.display(); 
  box2.display();
}
 