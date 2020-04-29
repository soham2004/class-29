const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var ball
var string
var score=0
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450,height,900,20);
   stand1=new Stand(420,300,300,10)

   stand2=new Stand(700,150,150,10)


   box1= new Box(300,275,30,40)
   box2= new Box(330,275,30,40)
   box3= new Box(360,275,30,40)

   box4= new Box(390,275,30,40)
   box5= new Box(420,275,30,40)
   box6= new Box(450,275,30,40)

   box7= new Box(480,275,30,40)
   box8= new Box(509,275,30,40)
   box9= new Box(540,275,30,40)

   box10= new Box(310,230,30,40)
   box11= new Box(350,230,30,40)
   box12= new Box(390,230,30,40)


   box13= new Box(430,230,30,40)
   box14= new Box(470,230,30,40)
   box15= new Box(510,230,30,40)


   box16= new Box(323,180,30,40)
   box17= new Box(370,180,30,40)
   box18= new Box(415,180,30,40)
  
   box19= new Box(460,180,30,40)
   box20= new Box(500,180,30,40)
   
   
   box21= new Box(350,120,30,40)
   box22= new Box(390,120,30,40)
   box23= new Box(430,120,30,40)
   
   box24= new Box(470,120,30,40)
   box25= new Box(470,120,30,40)
   box26= new Box(404,44,30,40)
   box27= new Box(660,125,30,40)
   box28= new Box(690,125,30,40)
  
  
   box29= new Box(720,125,30,40)
   box30= new Box(750,125,30,40)
   box31= new Box(720,125,30,40)


   box32= new Box(660,70,30,40)
   box33= new Box(700,70,30,40)
   box34= new Box(740,70,30,40)

   box35= new Box(700,20,30,40)
  var options={
      restitution:1
  }
ball=Bodies.circle(100,200,25,options)
   World.add(world,ball)

 string=new Chain(ball,{x:100,y:200})
}

function draw(){
    background(0000);
    fill("white")
    text("score="+score, 750,50)
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    stand1.display();
    stand2.display();
    fill("blue")
    box1.display(); 
    box2.display(); 
    box3.display(); 
   
    box4.display(); 
    box5.display(); 
    box6.display(); 

    box7.display(); 
    box8.display(); 
    box9.display(); 

box10.display(); 
box11.display(); 
box12.display(); 

box13.display(); 
box14.display(); 
box15.display(); 

box16.display(); 
box17.display(); 
box18.display(); 

box19.display(); 
box20.display(); 
box21.display(); 

box22.display(); 
box23.display(); 
box24.display(); 

box25.display(); 


box26.display();
box27.display(); 
box28.display(); 


box29.display(); 
box30.display();
box31.display(); 

box32.display(); 
box33.display(); 
box34.display(); 

box35.display();


box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()
box17.score()
box18.score()
box19.score()
box20.score()
box22.score()
box23.score()
box24.score()
box25.score()
box26.score()
box27.score()
box28.score()
box29.score()
box30.score()
box31.score()
box32.score()
box33.score()
box34.score()
box35.score()



fill("yellow")
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,25,25)

string.display(); 

}
function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    string.fly()
}
function keyPressed(){
if(keyCode === 32){
    string.attach(ball)

}

}