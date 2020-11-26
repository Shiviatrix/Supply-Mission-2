var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1sprt,box2sprt,box3sprt;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	box1sprt=createSprite(360,650,200,20);
	box1sprt.shapeColor = "red";

	box2sprt = createSprite(270,610,20,100);
	box2sprt.shapeColor = "red";

	box3sprt = createSprite(450,610,20,100);
	box3sprt.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxPart1 = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
    World.add(world,ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.collide(box1sprt);
  packageSprite.collide(box2sprt);
  packageSprite.collide(box3sprt);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
  }
}



