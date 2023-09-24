function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('255');
}

function draw() {
  background('#424530');
  colorMode(RGB);

  //바닥
  rectMode(CENTER);
  rect(800, 450, 1600, 200);
  Fill('#E09132');
  //창문
  rect(800, 450, 140, 140);
  Fill('255');
}
