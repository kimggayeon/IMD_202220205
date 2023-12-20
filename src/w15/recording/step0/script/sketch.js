let bricks = [];
let cols;
let rows;
let size = 16;
let offset = 200;
//수업시간에 했던 것들 위주로 코드 참고함
function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;
  for (let i = 0; i < cols; i++) {
    bricks[i] = [];
    for (let j = 0; j < rows; j++) {
      bricks[i][j] = new Brick(size / 2 + i * size, size / 2 + j * size);
    }
  }
}
//수업시간에 했던 것들 위주로 코드 참고함
function draw() {
  background('red');
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      bricks[i][j].display(30, offset);
    }
  }
}
