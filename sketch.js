const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world; 
var box1; 
var ground;
function setup() {
  createCanvas(400,400);
  engine =Engine.create();
  world=engine.world;


  box1= new Box(255,200,50,130);
  ground= new Ground(200,380,400,70);
}


function draw() {
    background(0); 
    Engine.update(engine);

    box1.display();
    ground.display();
  }


