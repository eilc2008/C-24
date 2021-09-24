const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(975,340,50,50);
    box2 = new Box(1100,340,50,50);
    box3 = new Box(975,275,50,50);
    box4 = new Box(1100,275,50,50);
    box5 = new Box(1035,215,50,50);

    log1 = new Log(1035,300,200,PI/2);
    log2 = new Log(1035,240,200,PI/2);
    log3 = new Log(980,200,90,PI/6);
    log4 = new Log(1090,200,90,-PI/6);
    
    ground = new Ground(width/2,height,width,20)

    pig1 = new Pig(1035,340);
    pig2 = new Pig(1035,275);

    bird = new Bird(0,0);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}