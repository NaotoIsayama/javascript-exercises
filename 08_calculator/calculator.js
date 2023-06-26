const add = function(operand1, operand2) {
  return operand1 + operand2;
	
};

const subtract = function(operand1, operand2) {
  return operand1 - operand2;
	
};

const sum = function(numArray) {
	let sum = 0;
  for (let num of numArray) {
    sum += num;
  }
  return sum;
};

const multiply = function(...args) {
  let product = 1;
  for (let arg of args) {
    product *= arg;
  }
  return product;
};

const power = function(base, exponent) {
  return base ** exponent;
}

const factorial = function(num) {
  let output = 1;
  if (num === 0) {
    return output;
  }
  for (let i = 1; i <= num; i++) {
    output *= i;
  }
	return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
