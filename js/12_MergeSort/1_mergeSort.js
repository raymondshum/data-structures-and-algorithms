/**
 * Merge Sort
 * 
 * Time Complexity: O(nlogn)
 * Space Complexity: O(nlogn)
 */

/**
 * Divide and conquer.
 */

/**
 * Merge Function Pseudocode
 *
 * Create an empty array, take a look at the smallest values in each
 * input array
 *
 * While there are still values we haven't looked at...
 *
 * If the value in the first array is smaller than the value in the
 * second array, push the value in the first array into our results
 * and move on to the next value in the first array
 *
 * If the value in the first array is larger than the value in the
 * second array, push the value in the second array into our results
 * and move on to the next value in the second array
 *
 * Once we exhaust one array, push in all remaining values from the
 * other array
 *
 * Time Complexity: O(n+m)
 * Space Complexity: O(n+m)
 */

function merge(arr1, arr2) {
  let results = [];

  let i = 0; //arr1 pointer
  let j = 0; //arr2 pointer

  //only runs until 1 array is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
      // 2 cases: arr2[j] == arr1[j] and arr2[j] < arr1[j]
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // push leftover elements from either array into results
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log("Merge Test: ", merge([1, 10, 50], [2, 14, 99, 100]));

/**
 * Merge Sort (Sorting)
 */

/**
 * Pseudocode
 *
 * Break up the array into halves until you have arrays that are empty or
 * have one element
 *
 * Once you have smaller sorted arrays, merge those arrays with other sorted
 * arrays until you are back at the full length of the array
 *
 * Once the array has been merged back together, return the merged (and
 * sorted!) array
 */

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;

  //slice array recursive at midpoint until base case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // starting with array of 0 or 1 elements (sliced), merge back until
  // array is complete
  return merge(left, right);
}

console.log("Merge Sort: ", mergeSort([10, 24, 76, 72, 1, 9]));
