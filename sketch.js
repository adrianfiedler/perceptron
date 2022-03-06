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
  brain = new Perceptron();
  let guess = brain.guess(inputs);
  console.log(guess);
}

function draw() {
  background(255);
  stroke(0);
  line(0, 0, width, height);
  for (let i = 0; i < points.length; i++) {
    points[i].show();
  }

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let target = pt.label;
    let inputs = [pt.x, pt.y];
    // brain.train(inputs, pt.label);

    let guess = brain.guess(inputs);
    if (guess == target) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(pt.x, pt.y, 8, 8);
  }


  let training = points[trainingIndex];
  let inputs = [training.x, training.y];
  brain.train(inputs, training.label);
  trainingIndex++;
  if(trainingIndex == points.length) {
    trainingIndex = 0;
  }

  console.log('x weight: ' + brain.weights[0]);
  console.log('y weight: ' + brain.weights[1]);
}