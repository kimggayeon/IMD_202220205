function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background('#424530');
  colorMode(RGB);

  //천장
  strokeWeight(0);
  stroke('#1F0800');
  fill('#E09132');
  rect(500, -5, 1000, 20);

  //바닥
  stroke('#2B241E');
  strokeWeight(9);
  fill('#E09132');
  rectMode(CENTER);
  rect(800, 510, 1700, 270);

  //창문
  strokeWeight(6);
  fill('#CBB89D');
  rect(200, 150, 250, 180);
  strokeWeight(0);
  stroke('#2B241E');
  fill('#1F0800');
  rect(200, 250, 285, 25);

  strokeWeight(6);
  fill('#CBB89D');
  rect(800, 150, 387, 180);
  strokeWeight(0);
  stroke('#2B241E');
  fill('#1F0800');
  rect(800, 250, 365, 25);
  //서랍
  strokeWeight(6);
  stroke('#1F0800');
  fill('#806044');
  rect(677, 150, 100, 150);

  fill('#1F0800');
  ellipse(710, 150, 10);

  strokeWeight(6);
  stroke('#1F0800');
  fill('#806044');
  rect(793, 150, 100, 150);

  fill('#1F0800');
  ellipse(823, 150, 10);

  strokeWeight(6);
  stroke('#1F0800');
  fill('#806044');
  rect(908, 150, 100, 150);

  fill('#1F0800');
  ellipse(943, 150, 10);
  //
  stroke('#1F0800');
  strokeWeight(6);
  fill('#8db4ad');
  rect(148, 120, 85, 75);
  strokeWeight(6);
  stroke('#1F0800');
  fill('#8db4ad');
  rect(248, 120, 85, 75);
  strokeWeight(6);
  stroke('#2B241E');
  fill('#806044');
  rect(200, 185, 185, 5);
  strokeWeight(6);
  stroke('#2B241E');
  fill('#806044');
  rect(200, 200, 185, 5);
  strokeWeight(6);
  stroke('#2B241E');
  fill('#806044');
  rect(200, 216, 185, 5);
  strokeWeight(3);
  stroke('#2B241E');
  fill('#806044');
  rect(200, 170, 185, 5);
  strokeWeight(6);
  stroke('#2B241E');

  //카페트
  fill('#38524C');
  strokeWeight(9);
  stroke('#2B241E');
  ellipse(380, 100, 25, 50);

  fill('#FFEFCD');
  ellipse(550, 480, 820, 180);
  strokeWeight(15);
  stroke('#E09132');
  ellipse(550, 470, 700, 118);
  strokeWeight(9);
  stroke('#E09132');
  ellipse(550, 460, 550, 70);

  //쇼파
  strokeWeight(8);
  stroke('#2B241E');
  fill('#BF5D30');
  rect(540, 370, 380, 110);
  strokeWeight(8);
  stroke('#2B241E');
  fill('#D1925C');
  rect(540, 357, 380, 30);

  stroke('#2B241E');
  fill('#BF5D30');
  strokeWeight(8);
  square(420, 260, 155, 80, 10, 7);

  stroke('#2B241E');
  fill('#BF5D30');
  strokeWeight(8);
  square(670, 260, 155, 10, 80, 7);

  strokeWeight(8);
  stroke('#2B241E');
  fill('#BF5D30');
  square(543, 260, 155, 10, 10, 7);

  strokeWeight(8);
  stroke('#412F20');
  fill('#FCA311');
  square(440, 288, 105, 50, 50, 30);
  strokeWeight(8);
  stroke('#1F0800');
  fill('#38524C');
  square(490, 288, 105, 50, 50, 30);
  strokeWeight(8);
  stroke('#1F0800');
  fill('#38524C');
  square(640, 309, 65, 30, 30, 20);

  strokeWeight(8);
  stroke('#2B241E');
  fill('#BF5D30');
  rect(340, 370, 75, 160, 30, 30, 10, 10);
  strokeWeight(8);
  stroke('#2B241E');
  fill('#BF5D30');
  rect(740, 370, 75, 160, 30, 30, 10, 10);

  //전등
  strokeWeight(2);
  stroke('#1F0800');
  fill('#1F0800');
  rect(560, 30, 10, 180);

  fill('#003F63');
  strokeWeight(9);
  stroke('#1F0800');
  ellipse(560, 120, 50, 50);

  strokeWeight(0);
  stroke('#1F0800');
  fill('#1F0800');
  rect(630, 3, 10, 180);
  strokeWeight(0);
  stroke('#1F0800');
  fill('#1F0800');
  rect(670, -7, 10, 180);
  fill('#003F63');
  strokeWeight(9);
  stroke('#1F0800');
  ellipse(630, 90, 30, 30);

  fill('#003F63');
  strokeWeight(9);
  stroke('#1F0800');
  ellipse(670, 13, 20, 50);
  fill('#E09132');
  strokeWeight(3);
  stroke('#1F0800');
  ellipse(670, 77, 10, 10);
  fill('#003F63');
  strokeWeight(3);
  stroke('#1F0800');
  ellipse(670, 87, 15, 15);
}
