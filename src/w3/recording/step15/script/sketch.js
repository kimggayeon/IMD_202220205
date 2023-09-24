let pos;
let vel;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = p5.Vector.random2D();
  vel.mult(0);
  acc = createVector(0, 0.01);
  console.log(vel.mag());
}
function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
}
function update() {
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}
function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}
function display() {
  ellipse(pos.x, pos.y, 2 * radius);
}
