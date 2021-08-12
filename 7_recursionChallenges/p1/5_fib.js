/**
 * Write a recursive function call fib which accepts a number and returns
 * the nth number in the Fibonacci sequence.
 */

function testFib(func){
  console.log(func);
  console.log(`Test 1: ${func(4) == 3 ? "pass" : "fail"}`);
  console.log(`Test 2: ${func(10) == 55 ? "pass" : "fail"}`);
  console.log(`Test 3: ${func(28) == 317811 ? "pass" : "fail"}`);
  console.log(`Test 4: ${func(35) == 9227465 ? "pass" : "fail"}`);
  console.log(`Test 5: ${func(0) == 0 ? "pass" : "fail"}`);
  console.log(`Test 6: ${func(1) == 1 ? "pass" : "fail"}`);
  console.log(`Test 7: ${func(2) == 1 ? "pass" : "fail"}`);
}

/**
 * Attempt 1
 */

// Equation F_n = F_n-1 + F_n-2
// Seed values: F_0 = 0, F_1 = 1

function fib(num){
  if(num <= 1) return num;
  return fib(num-1) + fib(num-2);
}

testFib(fib);

