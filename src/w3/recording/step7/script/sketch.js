// 센터v
let cv;
// 마우스v
let mv;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('salmon');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}
function draw() {
  background('salmon');
  // 센터로 뻗어가는 벡터
  strokeWeight(2);
  stroke('cornflowerblue');
  line(0, 0, cv.x, cv.y);

  // 마우스로 뻗어가는 벡터
  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(0, 0, mv.x, mv.y);

  mv.sub(cv);
  translate(cv.x, cv.y);
  stroke('white');
  line(0, 0, mv.x, mv.y);
}
