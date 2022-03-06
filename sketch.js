let brain;
let points = new Array(100);
let trainingIndex = 0;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
  // console.log(p.weights[0]);
  // console.log(p.weights[1]);
  let inputs = [-1, 0.5];
  brain = new Perceptron(3); // weights: x, y and bias
  let guess = brain.guess(inputs);
  console.log(guess);
}

function draw() {
  background(255);
  stroke(0);
  // line(0, height, width, 0);
  let p1 = new Point(-1, f(-1));
  let p2 = new Point(1, f(1));
  line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY());

  let p3 = new Point(-1, brain.guessY(-1));
  let p4 = new Point(1, brain.guessY(1));
  line(p3.pixelX(), p3.pixelY(), p4.pixelX(), p4.pixelY());

  for (let i = 0; i < points.length; i++) {
    points[i].show();
  }

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let target = pt.label;
    let inputs = [pt.x, pt.y, pt.bias];
    // brain.train(inputs, pt.label);

    let guess = brain.guess(inputs);
    if (guess == target) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(pt.pixelX(), pt.pixelY(), 8, 8);
  }


  let training = points[trainingIndex];
  let inputs = [training.x, training.y, training.bias];
  brain.train(inputs, training.label);
  trainingIndex++;
  if(trainingIndex == points.length) {
    trainingIndex = 0;
  }

  // console.log('x weight: ' + brain.weights[0]);
  // console.log('y weight: ' + brain.weights[1]);
}