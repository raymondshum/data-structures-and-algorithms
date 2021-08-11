/**
 * How much additional memory do we need to allocate
 * in order to run the code in our algorithm?
 *
 * Auxiliary space complexity: Space required by
 * algorithm, not including space taken by inputs.
 *
 * We are focusing on auxiliary space complexity.
 */

/**
 * Rules of thumb
 *
 * Most primitives (bool, numbers, undefined, null)
 * are constant space.
 *
 * Strings: O(n) space (where n is string length)
 *
 * Reference types: O(n), where n is the length
 * (arrays) or number of keys (objects)
 */

// Takes an array and sums all the items within
// O(n)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Takes and array, creates a new array and pushes
// 2 * value of the old array at each index to the 
// new one
// O(n)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
