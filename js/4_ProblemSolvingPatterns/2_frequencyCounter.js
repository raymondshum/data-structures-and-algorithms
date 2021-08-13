/**
 * Frequency Counters
 *
 * Uses objects or sets to collect values/frequencies of
 * values.
 *
 * Can be used to avoid nested loops or O(n^2) operations
 * with arrays/strings.
 */

/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has its corresponding value squared in the second
 * array. The frequency of values must be the same.
 */

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

// Naive solution using nested loops O(n^2)
// indexOf is looping
function same(arr1, arr2) {
  // if arrays are different length, then false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // compare each element of array 1 against array 2
  for (let i = 0; i < arr1.length; i++) {
    // find index of arr[1]^2 in array 2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //return false if not found
    if (correctIndex === -1) {
      return false;
    }
    // if found, remove from array 2
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Refactored solution O(n)
// Loop over each array 1 time, individually
function sameRef(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Each object counts the frequency of vals in respective array
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // If array element !exist in obj, add & set value to 0
  // Otherwise, increase count by 1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Comparing keys from both objects
  for (let key in frequencyCounter1) {
    // Check if fC2 does contain key^2 values of fC1
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // Check to see if frequencies of values match between fC objects
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
