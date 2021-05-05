const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber= new Rubber(600,550,60);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone= new Stone(400,550,80,40);
    iron=new Iron(350,550,50,80);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    stone.display();    
    iron.display();
}