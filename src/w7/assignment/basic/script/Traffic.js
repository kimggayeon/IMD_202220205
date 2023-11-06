class Traffic {
  constructor() {
    this.vehicles = [];
    // 불러올 수  있는 틀(? ) 만들기
  }

  run() {
    this.vehicles.forEach((eachVehicle) => {
      const separate = eachVehicle.separate(this.vehicles);
      separate.mult(1);
      eachVehicle.applyForce(separate);
      // separate에서 힘을 불러오는
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5);
      eachVehicle.applyForce(align);
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5);
      eachVehicle.applyForce(cohesion);
      //cohesion 에서 힘을 가져오는
      eachVehicle.update();
      //vehicle에서 가져온 update를 실행함
      eachVehicle.borderInfinite();
      //vehicle에서 가져온 borderInfinite를 실행함
      eachVehicle.display();
      //vehicle에서 가져온 display를 실행함
    });
  }

  addVehicle(x, y) {
    // const mass = floor(random(1, 3));
    const mass = 1;
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
  // class 에서 생성해 놓은 걸 여기서 설정
}
