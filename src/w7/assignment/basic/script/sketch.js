let traffic;
let infiniteOffset = 80;
//변수 설정

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // 캔버스 만들기
  colorMode(HSL, 360, 100, 100, 100);
  background('white');
  // 배경색 흰색으로 만들기
  traffic = new Traffic();
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
} //0~10 될 때 까지 램덤으로 생성되는

function draw() {
  background('white');
  traffic.run();
  // traffic에서 가져온 run을 실행함
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
// 마우스 이동할 때 적용 될 수 있게 도와주는
