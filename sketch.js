
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrain = Matter.Constrain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	 bob= new Bob(200,390,50);
     
	 bobObject1 = new Bob(340,470,20);
	 bobObject2 = new Bob(380,470,20);
	 bobObject3 = new Bob(420,470,20);
	 bobObject4 = new Bob(460,470,20);
	 bobObject5 = new Bob(500,470,20);

	 rope=new Rope();

	 rope1= new Rope(bobObject1.body,roof.body,-40*2,0);
	 rope2= new Rope(bobObject1.body,roof.body,-20*2,0);
	 rope3= new Rope(bobObject1.body,roof.body,-0*2,0);
	 rope4= new Rope(bobObject1.body,roof.body,20*2,0);
	 rope5= new Rope(bobObject1.body,roof.body,40*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  roof.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



  drawSprites();
 
}



