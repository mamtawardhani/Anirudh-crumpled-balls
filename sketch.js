const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var bp
var ball
var binn,bin1,bin2
var b


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

  
    ground=new Ground(0,windowHeight/1.2+20)

    binn=new Box(windowWidth/1.1,windowHeight/1.39,10,100)
    bin1=new Box(windowWidth/1.5,windowHeight/1.39,10,100)
    bin2=new Box(windowWidth/1.27,windowHeight/1.25,windowWidth/4,10)
    bp=new ball1(200,0)

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display()
  
    binn.display()
    bin1.display()
  
    bin2.display() 
      bp.display()
    
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(bp.Paper1,bp.Paper1.position,{x:85, y:-85})
    }
}
