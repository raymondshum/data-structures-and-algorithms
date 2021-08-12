/**
 * Factorial
 */

/**
 * Test
 */

function testFact(func) {
  console.log(func);
  console.log(`Test 1: ${func(0) == 1 ? "pass" : "fail"}`);
  console.log(`Test 2: ${func(7) == 5040 ? "pass" : "fail"}`);
}

/**
 * Iterative
 */

function factorialIter(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

testFact(factorialIter);

/**
 * Recursive
 */

function factorialRecur(num) {
  if (num <= 1) return 1;
  return num * factorialRecur(num - 1);
}

testFact(factorialRecur);