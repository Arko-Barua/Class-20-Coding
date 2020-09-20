var movingRectangle
var fixedRectangle


function setup() {
  createCanvas(800,400);
   movingRectangle = createSprite(400, 200, 80, 30);
   movingRectangle.shapeColor = "red";
   fixedRectangle = createSprite (200, 200, 50, 80);
   fixedRectangle.shapeColor = "red";
   
}

function draw() {
  background(255,255,255);  
  movingRectangle.y = World.mouseY;
  movingRectangle.x = World.mouseX
  if (movingRectangle.x - fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
    fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 && 
    movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2 &&
    fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2 ) {
  movingRectangle.shapeColor = "blue";
  }
  else  {
  movingRectangle.shapeColor = "red"
  }
  drawSprites();
} 