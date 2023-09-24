// 공 위치
let position = [100, 100];
//공 속력
let velocity = [3, 5];

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
}

function draw() {
  background(255);

  // 공 위치에 속도 더해 이동
  position[0] += velocity[0];
  position[1] += velocity[1];

  // 공이 화면을 벗어나는지: 충돌하는지 확인
  // 속도에 -1을 곱해 뒤집음
  if (position[0] > width || position[0] < 0) {
    velocity[0] *= -1;
  }
  if (position[1] > height || position[1] < 0) {
    velocity[1] *= -1;
  }

  // 위치 변수를 나타냄
  ellipse(position[0], position[1], 50);
}
