
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball2;
var ball;
var ball3;
var chao;


let engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var ball_C = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1	
	}

	var ball2_C = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0.2
	}

	var ball3_C = {
		restitution: 0.10,
		friction: 0.03,
		frictionAir: 0.4
	}

	
	ball = Bodies.rectangle(680, 180, 40, 60, ball_C);
	World.add(world, ball);
	
	
	
	ball2 = Bodies.circle(400, 180, 80, ball2_C);
	World.add(world, ball2);
	


	
	ball3 = Bodies.circle(120, 180, 80, ball3_C);
	World.add(world, ball3);
	


	var chao_C = {
		isStatic: true
	}


	chao = Bodies.rectangle(600,580,1200,2, chao_C);
	World.add(world, chao);


	Engine.run(engine);
  
}


function draw() {
  	
	Engine.update(engine);
	
	rectMode(CENTER);
	background(120, 241, 90);
  
	push()
	fill(88,29,29)
	rect(ball.position.x, ball.position.y, 40, 60);
	pop()

	push()
	fill(88,29,29)
	ellipse(ball2.position.x, ball2.position.y, 80);
	pop()

	push()
	fill(88,29,29)
	ellipse(ball3.position.x, ball3.position.y, 80);
	pop()

	push()
	fill(120, 241, 90)
	rect(chao.position.x, chao.position.y,1200, 2);
	pop()

  	drawSprites();
 
}



