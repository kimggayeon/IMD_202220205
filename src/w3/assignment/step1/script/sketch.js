let center;
let mouse;
let centerToMouse;
let pos;
let vel;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  center = createVector(width / 2, height / 2);
  mouse = createVector();
  centerToMouse = createVector();
}
function draw() {
  background('white');

  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  strokeWeight(2);
  stroke('black');
  // 원점 이동할라고 translate
  translate(center.x, center.y);
  line(mouse.x / 2, mouse.y / 3, centerToMouse.x, centerToMouse.y);
}
function display() {
  Fill('black');
  ellipse(
    this.pos.x,
    this.pos.y,
    this.pos.x + this.vel.x * 10,
    this.pos.y + this.vel.y * 10
  );
}
