class Perceptron {
  lr = 0.1; // learning rate for steering

  constructor(n) {
    this.weights = new Array(n);
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1);
    }
  }

  // activation function
  sign(n) {
    if (n >= 0) {
      return 1;
    } else {
      return -1;
    }
  }

  guess(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    let output = this.sign(sum);
    return output;
  }

  train(inputs, target) {
    let guess = this.guess(inputs);
    let error = target - guess;

    // console.log(error);

    // tune all the weights according to error
    for (let i = 0; i < this.weights.length; i++) {
      // "steer" weight towards the target (slowed down by learning rate)
      this.weights[i] += error * inputs[i] * this.lr;
    }
  }

  guessY(x) {
    let w0 = this.weights[0];
    let w1 = this.weights[1];
    let w2 = this.weights[2];
    return -1 * (w2 / w1) * 1 - (w0 / w1) * x;

    // let m = this.weights[1] / this.weights[0]; //w0, w1
    // let b = this.weights[2]; // bias
    // return m * x + b;
  }
}
