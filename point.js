function f(x) {
  // y = mx + b
  return 0.3 * x + 0.2; // because of value range between [-1,1]
}

class Point {
  x;
  y;
  label;
  constructor(x, y) {
    if (x && y) {
      this.x = x;
      this.y = y;
    } else {
      this.x = random(-1, 1);
      this.y = random(-1, 1);
    }

    // check if point is above or below line and set label
    let lineY = f(this.x);
    if(this.y > lineY) {
      this.label = 1;
    } else {
      this.label = -1;
    }
    this.bias = 1;
  }

  pixelX() {
    return map(this.x, -1, 1, 0, width);
  }

  pixelY() {
    return map(this.y, -1, 1, height, 0);
  }

  show() {
    stroke(0);
    if (this.label == 1) {
      fill(255);
    } else {
      fill(0);
    }

    let px = this.pixelX();
    let py = this.pixelY();
    ellipse(px, py, 16, 16);
  }
}
