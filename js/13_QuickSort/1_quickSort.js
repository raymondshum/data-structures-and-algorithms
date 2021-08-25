/**
 * Quick Sort
 * 
 * Time Complexity:
 * Best/Avg: O(nlogn)
 * Worst: O(n^2) <- using 1st element as pivot if data is nearly sorted
 * 
 * Space Complexity:
 * O(logn)
 */

/**
 * Pivot Helper Pseudocode
 *
 * Pivot affects runtime. Should be roughly the median value in a dataset.
 *
 * In our example, we select first element as pivot for simplicity.
 */

/**
 * It will help to accept three arguments: an array, a start index,
 * and an end index (these can default to 0 and the array length minus 1,
 * respectively)
 *
 * Grab the pivot from the start of the array
 *
 * Store the current pivot index in a variable (this will keep track
 * of where the pivot should end up)
 *
 * Loop through the array from the start until the end
 *
 *    If the pivot is greater than the current element,
 *    increment the pivot index variable and then swap the
 *    current element with the element at the pivot index
 *
 *    Swap the starting element (i.e. the pivot) with the pivot index
 *
 * Return the pivot index
 */

function swap(array, ind1, ind2) {
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // should return index of 3

/**
 * Quicksort Pseudocode
 *
 * Call the pivot helper on the array
 *
 * Your base case occurs when you consider a subarray with less than
 * 2 elements
 *
 * When the helper returns to you the updated pivot index, recursively
 * call the pivot helper on the subarray to the left of that index, and
 * the subarray to the right of that index
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr, left, right);
  // base case
  if (left < right) {
    // left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));