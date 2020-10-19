//namespacing - giving small name to reduce the size 
// const is like variable that stores data/value in computer's memory but it's vlaue does not change througout program 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//body
var ground, ball;

function setup() {
  createCanvas(800,400);
  
  //creating engine- helps us manipulate world
  engine = Engine.create();

  //creating world using engine
  world = engine.world;

  var ground_options = {

    // ground will have only one property from physics i.e. static
    // isStatic is boolean data type - either true or false
    isStatic: true
  }
  //creating body - ground
  ground = Bodies.rectangle(200, 400, 800, 20, ground_options);
  World.add(world, ground);


var ball_options ={

    // ground will have only one property from physics i.e. static
    // isStatic is boolean data type - either true or false
    restitution : 1.0
  }
  //creating body - ground
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);
  //console.log(ball);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20 );

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y, 20, 20);

}