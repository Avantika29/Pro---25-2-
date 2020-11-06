var box1, box2, box3, paper, ground,dustbinImg,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("images/dustbin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	ground = new Ground(width/2, height-35, width,10);

	paper = new Paper(110,660,25);

	box1 = new Box(550,650,120,20);
	
	
	box2 = new Box(480,585,20,150);
	
	box3 =  new Box(620,585,20,150);

	//  dustbin = createSprite(550,575,10,10)
	//  dustbin.scale = 0.4;
	//  dustbin.addImage(dustbinImg)

	// box1  = new Dustbin(550,650,120,20);
	// box2 = new Dustbin(480,585,20,150);


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);


  background(255);
  
  drawSprites();

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();

 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x : 35, y : -45});
	   
	}
}


