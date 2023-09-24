let center;
let mouse;
let centerToMouse;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('pink');
  center = createVector(width / 2, height / 2);
  mouse = createVector();
  centerToMouse = createVector();
}
function draw() {
  background('pink');
  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  strokeWeight(2);
  stroke('white');
  // 원점 이동할라고 translate
  translate(center.x, center.y);
  line(0, 0, centerToMouse.x, centerToMouse.y);

  centerToMouse.normalize();
  // mult를 해서 50 짜리 검정선이 만들어짐
  centerToMouse.mult(50);
  strokeWeight(4);
  stroke('black');
  line(0, 0, centerToMouse.x, centerToMouse.y);
  console.log(centerToMouse.mag());
}
