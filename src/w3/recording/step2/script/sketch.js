let pos;
let vel;
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  // cratevector 한번은 해줘야함
  pos = createvector(width / 2, height / 2);
  vel = createvector(3, 5);
  console.log(pos);
  console.log(vel);
  ellipse(posX, posY, 50);
}

function draw() {
  background('255');
  pos.add(vel);
  //if (pos.x < 0) {
  //} else if (pos.x > width) {
  //  vel.x *= -1;
}

//줄이면
if (pos.x < 0 || pos.x > width) {
  vel.x *= -1;
}
if (pos.y < 0 || pos.y > height) {
  vel.y *= -1;
}
ellipse(pos.x, pos.y, 2 * radius);
{
}

let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createvector(width / 2, height / 2);
  vel = createvector(0, 0);
  acc = createvector(0, 1);
  //acc : 가속도
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background('255');
  acc = p5.Vector.random2D();
  acc.mult(random);
  vel.add(acc);
  //속도가 위치에 더해진다
  pos.add(vel);

  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }
  ellipse(pos.x, pos.y, 2 * radius);
}
