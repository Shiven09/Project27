
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,500,100); 
	bob2 = new Bob(600,500,100); 
	bob3 = new Bob(800,500,100);
	bob4 = new Bob(1000,500,100);
	bob5 = new Bob(1200,500,100);
	
	
	ground=new Ground(width/2,height/4,width/7,20);

	rope1 = new Rope(ground.body,bob1.body); 
	rope2 = new Rope(ground.body,bob2.body); 
	rope3 = new Rope(ground.body,bob3.body); 
	rope4 = new Rope(ground.body,bob4.body); 
	rope5 = new Rope(ground.body,bob5.body);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("black");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ground.display();
 
}



