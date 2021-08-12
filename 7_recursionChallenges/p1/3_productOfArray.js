/**
 * Write a function called productOfArray which takes in an array of
 * numbers and returns the product of them all.
 */

function testProd(func){
  console.log(func);
  console.log(`Test 1: ${func([1,2,3]) == 6 ? "pass" : "fail"}`);
  console.log(`Test 2: ${func([1,2,3,10]) == 60 ? "pass" : "fail"}`);
}

/**
 * Attempt
 */

function productOfArray(array){
  if(array.length == 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}

testProd(productOfArray);