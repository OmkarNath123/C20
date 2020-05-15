var ball1,ball2;

function setup() {
  createCanvas(800,800);
  ball1=createSprite(400, 400, 50, 50);
  ball1.shapeColor="green";
  ball2=createSprite(550,200,50,50);
  ball2.shapeColor="green";
}

function draw() {
  background("Cyan"); 
  ball2.x=mouseX;
  ball2.y=mouseY; 
  if(ball1.x-ball2.x<ball1.width/2+ball2.width/2&&ball2.x-ball1.x<ball1.width/2+ball2.width/2&&ball2.y-ball1.y<ball2.height/2+ball1.height/2&&ball1.y-ball2.y<ball1.height/2+ball2.height/2){
    ball1.shapeColor="red";
    ball2.shapeColor="red";
  }
  else{
    ball1.shapeColor="green";
    ball2.shapeColor="green";
  }
  drawSprites();
}