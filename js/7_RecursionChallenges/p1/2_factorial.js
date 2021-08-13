/**
 * Write a function factorial which accepts a number returns the factorial
 * of the number.
 */

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function testFact(func) {
  console.log(func);
  console.log(`Test 1: ${func(1) == 1 ? "pass" : "fail"}`);
  console.log(`Test 2: ${func(2) == 2 ? "pass" : "fail"}`);
  console.log(`Test 3: ${func(4) == 24 ? "pass" : "fail"}`);
  console.log(`Test 4: ${func(7) == 5040 ? "pass" : "fail"}`);
  console.log(`Test 5: ${func(0) == 1 ? "pass" : "fail"}`);
}

/**
 * Attempt
 */

function fact(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * fact(num - 1);
}

testFact(fact);
