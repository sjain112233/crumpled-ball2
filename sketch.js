var ball,ground,log;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800,400);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    //Create a Ground
	ground = new Ground(400,380,900,20);

	dustbin1=new Dustbin(595,300,20,140);

	dustbin2=new Dustbin(655,362,100,18);

	dustbin3=new Dustbin(715,300,20,140);



	ball=new Ball(80,200,50,50);

	Engine.run(engine);
  }


function draw() {
   background("grey");
	ball.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-180})

	}
}




