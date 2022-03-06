class Perceptron {
  weights = new Array(2);
  lr = 0.1; // learning rate for steering

  constructor() {
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
}
