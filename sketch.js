var rect1, rect2

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200, 200, 10, 20);
  rect1.shapeColor = "red"
  rect2 = createSprite(200, 300, 20, 10);
  rect2.shapeColor = "blue"
}

function draw() {
  background(255,255,255); 
rect1.x = mouseX
rect1.y = mouseY
isTouching(rect1, rect2)
  drawSprites();
}