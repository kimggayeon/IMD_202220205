class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.neighborhooodRad = 50;
    this.color = color;
  } // 변수 만들어주기 .

  cohesion(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
        // 백터 세부적으로 만져주기 .
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      // cnt 곱함
      steer.sub(this.pos);
      // 위치 나눔
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      // 속력나눔
      steer.limit(this.forceMx);
      // forceMx로 제한둠
    }
    return steer;
  }

  align(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++;
          // 백터 세부적으로 만져주기
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      //cnt 곱함
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      //속력 나눔
      steer.limit(this.forceMx);
      //forceMx로 제한둠
    }
    return steer;
  }

  separate(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
        // 백터 세부적으로 만져주기
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      // cnt 곱함
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      //속력나눔
      steer.limit(this.forceMx);
      //제한주기
    }
    return steer;
  }

  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass);
  } //힘불러오기 (질량에 힘을 곱함/ 곱한걸 가속도에 더함)

  update() {
    this.vel.add(this.acc);
    //속도에 가속도를 더하고
    this.vel.limit(this.speedMx);
    // 속도에 제한 주는
    this.pos.add(this.vel);
    //위치에 속력을 더해줌
    this.acc.mult(0);
    // 가속도 초기화
  }

  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
    // 위치에 벗어나지않게 설정해주기
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop();
  } //적어놓은 걸 보이게 해주기
  //push 가 시작이고 , pop은 초기화 시켜줌 -> (반복되면 초기화가 안되니까 초기화를 따로 시켜줘야함)
}
