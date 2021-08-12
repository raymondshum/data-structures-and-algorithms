/**
 * Write a function called power which accepts a base and an exponent. The
 * function should return the power of the base to the exponent. This
 * function should mimic the functionality of Math.pow() - do not worry
 * about negative bases and exponents.
 *
 */

function testPow(func) {
  console.log(func);
  console.log(`Test 1: ${func(7, 3) == 343 ? "pass" : "fail"}`);
  console.log(`Test 3: ${func(4, 0) == 1 ? "pass" : "fail"}`);
}

/**
 * Attempt 1
 */

// ignoring fractional exponents
function pow(num1, num2) {
  if (num1 === 0 || num2 === 0) return 1;
  return num1 * pow(num1, num2 - 1);
}

testPow(pow);

/**
 * Solution
 */

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
