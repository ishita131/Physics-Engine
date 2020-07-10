const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball_options={
        restitution:0.8

    }
    ball1_options={
        restitution:0.8
    }
 ball=Bodies.rectangle(200,200,10,10,ball_options)
 ball1=Bodies.rectangle(150,200,10,10,ball1_options)
 World.add(world,ball1)
 World.add(world,ball)
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball2_options={
    restitution:1
    }
 ball2=Bodies.circle(200,100,20,ball2_options)
 ball3_options={
     restitution:1
 }
 ball3=Bodies.circle(150,100,30,ball3_options)
 World.add(world,ball2)
 World.add(world,ball3)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ball.position.x,ball.position.y,30,30)
    rect(ball1.position.x,ball1.position.y,30,30)
ellipseMode(RADIUS)
ellipse(ball2.position.x,ball2.position.y,20,20)
ellipse(ball3.position.x,ball3.position.y,30,30)
}