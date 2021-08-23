/**
 * Bubble Sort
 * 
 * Time Complexity: O(n^2)
 * Closer to linear time if data is nearly sorted.
 */

/**
 * Not efficient or commonly used.
 * Largest/smallest value bubbles to the top, one at a time.
 *
 * Compare each two elements and swap if larger/smaller.
 *
 * Also called syncing sort.
 */

/**
 * Pseudocode
 *
 * Start looping from with a variable called i the end of the array
 * towards the beginning
 *
 * Start an inner loop with a variable called j from the beginning until
 * i - 1
 *
 * If arr[j] is greater than arr[j+1], swap those two values!
 * Return the sorted array
 */

/**
 * Attempt
 */

// For ascending order
function bSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        bSwap(array, j, j + 1);
      }
    }
  }
  return array;
}

function bSwap(array, ind1, ind2) {
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
}

/**
 * Optimization: Short circuit if array is already sorted.
 *
 * How? Check to see if any elements were swapped in the last pass.
 * If none were swapped, exit.
 */

function bSortOpt(array) {
  let noSwaps;
  for (let i = array.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        bSwap(array, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

let testArray = [5, 8, 11, 12, 1, 3, 2, 20, 30, 15];
let testArray2 = [1, 2, 3, 4, 5, 6, 7, 9, 8];
console.log("Attempt 1: ", bSortOpt(testArray));
console.log("Attempt 2:", bSortOpt(testArray2));
