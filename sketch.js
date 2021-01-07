var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1500, 550);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(380,150,300,30);
	World.add(world, roof);

	bobObject1 = new Bob(280,400);
	bobObject2 = new Bob(330,400);
	bobObject3 = new Bob(380,400);
	bobObject4 = new Bob(430,400);
	bobObject5 = new Bob(480,400);
	

	rope1 = new Rope(bobObject1.body,roof.body,-100,0);
	 World.add(world, rope1);

	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	World.add(world, rope2);

	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	World.add(world, rope3);

	rope4 = new Rope(bobObject4.body,roof.body,+50,0);
	World.add(world, rope4);

	rope5 = new Rope(bobObject5.body,roof.body,+100,0);
	World.add(world, rope5);


	Engine.run(engine);
  
}


function draw() {

	background(255,160,122)

  Engine.update(engine);
  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

   roof.display();
  
    if(keyWentDown("1")){
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-850,y:0});
	}

    if(keyWentDown("2")){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-850,y:0});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-850,y:0});
	}

	if(keyWentDown("3")){
    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-850,y:0});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-850,y:0});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-850,y:0});
    }
			
	if(keyWentDown("4")){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-850,y:0});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-850,y:0});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-850,y:0});
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-850,y:0});
	}
	 
	textSize(40)
	stroke("blue")
	strokeWeight(7)
	fill("white")
	text("Press 1 to move only one bob",800,190)
	text("Press 2 to move two bobs",800,250)
	text("Press 3 to move three bobs",800,310)
    text("Press 4 to move four bobs",800,370)
	
    
	textSize(60)
	stroke("yellow")
	strokeWeight(10)
	fill("grey")
	text("Newton's cradle",400,75)
		
	
}
