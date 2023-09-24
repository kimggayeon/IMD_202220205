let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}
function draw() {
  background('slateblue');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  // mag 길이 구할라고 씀_ 양수 방향으로만 나온대
  let mag = cvToMv.mag();
  console.log(mag);
  noStroke();
  fill('white');
  rect(10, 10, mag, 10);

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
