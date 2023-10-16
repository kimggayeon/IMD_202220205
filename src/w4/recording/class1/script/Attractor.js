class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }
  attract(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    let strength = this.mass / (distance ** 2);
    return dirVector.setMag(strength);
     
  }

  display() {
    ellipse(pos.x, pos.y, 100);
  }
}
