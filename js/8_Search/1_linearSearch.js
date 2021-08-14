/**
 * Linear Search
 *
 * ---
 *
 * Unsorted arrays.
 *
 * Given an array, the simplest way to search for a value is to look at
 * every element in the array and check if it matches the target.
 *
 * indexOf
 * includes
 * find
 * findIndex
 * 
 * O(n)
 * 
 */

/**
 * This function accepts an array and a value
 * Loop through the array and check if the current array element is equal to the value
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 */

function testSearch(func) {
  console.log(func);
  console.log(`Test 1: ${func([1, 2, 3], 3) == 2 ? "pass" : "fail"}`);
  console.log(`Test 2: ${func([1, 2, 3], 1) == 0 ? "pass" : "fail"}`);
  console.log(`Test 3: ${func([1, 2, 3], 4) == -1 ? "pass" : "fail"}`);
}

/**
 * Attempt
 */

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if(num === arr[i]) return i;
  }
  return -1;
}

testSearch(linearSearch);
