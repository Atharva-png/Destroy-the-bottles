const Engine =Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var fire,fireIm
var gameState = "onsling"
var bg
var boy 
var score=0
var playerCount=0

function preload(){
bg=loadImage("bg.jpg")
//firIm=loadImage("fire.png")

}
function setup(){
     createCanvas(windowWidth,windowHeight);
    engine=Engine.create()
    world=engine.world

   /* fire=createSprite(width-1000,height-10,100,100);
    fire.addImage(fireIm)*/

    
    ground=new Ground(width-1500,height-100,2500,20)
    bottle=new Bottle(width-500,height-120,500,500)
    b1=new Bottle(width-550,height-120,500,500)
    b2=new Bottle(width-525,height-120,500,500)
    b3=new Bottle(width-570,height-120,500,500)
    b4=new Bottle(width-520,height-120,500,500)
    b5=new Bottle(width-575,height-120,500,500)
    b6=new Bottle(width-515,height-120,500,500)
    b7=new Bottle(width-510,height-120,500,500)
    b8=new Bottle(width-505,height-120,500,500)
    b9=new Bottle(width-500,height-120,500,500)
   

    ball=new Ball(width-1450,height-310,50,50);
    slingshot=new SlingShot(ball.body,{x:width-1450,y:height-260})

}

function draw(){
background(bg) 
Engine.update(engine);
//image(fire,width-200,height-10,200,200)

noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

        textSize(35)
        fill("white")
        text("Target-2000",width-700,50)

      




ground.display()
bottle.display()
bottle.score()
b1.display()
b1.score()
b2.display()
b2.score()
b3.display()
b3.score()
b4.display()
b4.score()
b5.display()
b5.score()
b6.display()
b6.score()
b7.display()
b7.score()
b8.display()
b8.score()
b9.display()
b9.score()


ball.display()
slingshot.display()


//boy.display()

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY})

}
function mouseReleased(){
    slingshot.fly()
    gameState="launched"
}
function keyPressed(){
    if(keyCode===32){
        ball.trajectory=[]
        Matter.Body.setPosition (ball.body,{x:width-1450,y:height-260})
        slingshot.attach(ball.body)
    }
}
