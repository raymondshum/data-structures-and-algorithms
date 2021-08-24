/**
 * Insertion Sort
 * 
 * Time Complexity: O(n^2)
 * 
 * Better if data is nearly sorted.
 * It is an online algorithm. Works on an array that is receiving data.
 */

/**
 * Builds sort by gradually creating a larger left half which is always
 * sorted
 */

/**
 * Psuedocode
 *
 * Start by picking the second element in the array
 *
 * Now compare the second element with the one before
 * it and swap if necessary.
 *
 * Continue to the next element and if it is in the
 * incorrect order, iterate through the sorted portion
 * (i.e. the left side) to place the element in the correct place.
 *
 * Repeat until the array is sorted.
 */

/**
 * Attempt
 */

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    /**
     * Left side of the array contains sorted elements. Compares
     * first element of right side to elements on left. Shifts
     * each element right by replacing right element with element
     * pointed at by j. Loop breaks once currentVal is > arr[j].
     */
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    // arr[j] is now > currentVal or j == 0. Insert currentVal
    // at location to the right of j.
    // Position will be -1 if currentVal is the smallest in the
    // array
    console.log(`Position: ${j} | Value: ${arr[j]} | currentVal: ${currentVal}`);
    arr[j+1] = currentVal;
  }
  return arr;
}

let testArray = [5, 8, 11, 12, 1, 3, 2, 20, 30, 15];
console.log("Attempt 1: ", insertionSort(testArray));
