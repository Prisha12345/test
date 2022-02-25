const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Ball;
var ground;
 

 function setup(){
engine=Engine.create();
world=engine.world;


BallOptions={
    restitution:1.0
}
Ball=Bodies.circle(200,0,40,BallOptions);

groundOptions={
    isStatic:true
}
ground=Bodies.rectangle(200,380,400,20,groundOptions);
World.add(world,ground);
World.add(world,Ball);
 }

function draw(){

createCanvas(400,400);
background(0);
 Engine.update(engine);
 fill("red");
 ellipseMode(CENTER);
 ellipse(Ball.position.x,Ball.position.y,40);
 rectMode(CENTER);
 fill("white");
 rect(ground.position.x,ground.position.y,400,20)
}