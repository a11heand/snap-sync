/** filename: sophisticated_calculator.js */

// Class definition for a sophisticated calculator
class SophisticatedCalculator {
  constructor() {
    this.currentResult = 0;
  }

  add(...numbers) {
    if (numbers.length === 0) {
      throw new Error('Please provide at least one number to add.');
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        throw new Error('Invalid input. Numbers are expected for addition.');
      }
      sum += numbers[i];
    }
    this.currentResult += sum;
  }

  subtract(...numbers) {
    if (numbers.length === 0) {
      throw new Error('Please provide at least one number to subtract.');
    }

    let difference = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        throw new Error('Invalid input. Numbers are expected for subtraction.');
      }
      difference -= numbers[i];
    }
    this.currentResult -= difference;
  }

  multiply(...numbers) {
    if (numbers.length === 0) {
      throw new Error('Please provide at least one number to multiply.');
    }

    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        throw new Error('Invalid input. Numbers are expected for multiplication.');
      }
      product *= numbers[i];
    }
    this.currentResult *= product;
  }

  divide(...numbers) {
    if (numbers.length === 0) {
      throw new Error('Please provide at least one number to divide.');
    }

    let quotient = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        throw new Error('Invalid input. Numbers are expected for division.');
      }
      if (numbers[i] === 0) {
        throw new Error('Cannot divide by zero.');
      }
      quotient /= numbers[i];
    }
    this.currentResult /= quotient;
  }

  power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Invalid input. Numbers are expected for the base and exponent.');
    }

    this.currentResult = Math.pow(base, exponent);
  }

  squareRoot(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input. A number is expected for square root operation.');
    }

    if (number < 0) {
      throw new Error('Cannot calculate square root of a negative number.');
    }

    this.currentResult = Math.sqrt(number);
  }

  clear() {
    this.currentResult = 0;
  }

  getResult() {
    return this.currentResult;
  }
}

// Sample usage
const calculator = new SophisticatedCalculator();
calculator.add(5, 10, 15);
calculator.subtract(3);
calculator.multiply(2);
calculator.divide(2);
console.log(calculator.getResult()); // Output: 26

// More complex operations
calculator.clear();
calculator.power(2, 3);
calculator.squareRoot(16);
calculator.add(5, 7, -3);
calculator.subtract(2.5);
calculator.multiply(3);
calculator.divide(4);
console.log(calculator.getResult()); // Output: 13