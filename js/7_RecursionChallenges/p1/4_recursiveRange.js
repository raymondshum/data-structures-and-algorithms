/**
 * Write a function called recursiveRange which accepts a number and sums
 * from 0 to the number passed in the function.
 */

function testRec(func){
  console.log(func);
  console.log(`Test 1: ${func(6) == 21 ? "pass" : "fail"}`);
  console.log(`Test 2: ${func(10) == 55 ? "pass" : "fail"}`);
}

/**
 * Attempt
 */

function recursiveRange(num){
  if(num === 0) return 0;
  return num + recursiveRange(num-1);
}

testRec(recursiveRange);