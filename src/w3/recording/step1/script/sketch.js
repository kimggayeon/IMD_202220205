let posX;
let posY;
let posXAdd = 3;
let posSAdd = 5;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  //얠 넣으면 중앙에 있다가 주르륵 내려감
  ellipse(posX, posY, 50);
}

function draw() {
  background('255');
  ellipse(posX, posY, 50);
  posX = width / 2;
  posY = height / 2;

  //posX += 5;
  //posY += 3;

  //posX++;
  //posX=posX+1;
  //posX +=1;
}
