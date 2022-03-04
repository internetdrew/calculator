function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(dividend, divisor) {
  return dividend / divisor;
}

function operate(num1, num2, operation) {
  console.log(operation(num1, num2));
}

operate(2, 5, divide);
