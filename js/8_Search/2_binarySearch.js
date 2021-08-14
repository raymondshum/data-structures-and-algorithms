/**
 * Binary Search
 *
 * Faster than linear search.
 * Eliminate half of remaining elements at a time.
 * Only works on sorted array.
 *
 * Divide and Conquer
 * O(logn)
 */

function testSearch(func) {
  console.log(func);
  console.log(`Test 1: ${func([], 3) == -1 ? "pass" : "fail"}`);
  console.log(`Test 2: ${func([1], 1) == 0 ? "pass" : "fail"}`);
  console.log(`Test 3: ${func([1], 2) == -1 ? "pass" : "fail"}`);
  console.log(`Test 4: ${func([1, 2, 3], 3) == 2 ? "pass" : "fail"}`);
  console.log(`Test 5: ${func([1, 2, 3], 1) == 0 ? "pass" : "fail"}`);
  console.log(`Test 6: ${func([1, 2, 3], 4) == -1 ? "pass" : "fail"}`);
}

/**
 * This function accepts a sorted array and a value
 * Create a left pointer at the start of the array, and a right pointer at
 * the end of the array
 * While the left pointer comes before the right pointer:
 *  - Create a pointer in the middle
 *  - If you find the value you want, return the index
 *  - If the value is too small, move the left pointer up
 *  - If the value is too large, move the right pointer down
 * If you never find the value, return -1
 */

/**
 * Attempt
 */

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] > num) {
      end = middle - 1;
    } else if (arr[middle] < num) {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }
  return -1;
}

testSearch(binarySearch);

/**
 * Attempt: Recursive
 */

function binarySearchRec(arr, num, start, end) {
  if (arr.length === 0 || start > end) return -1;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === num) {
    return middle;
  } else if (arr[middle] > num) {
    return binarySearchRec(arr, num, start, middle - 1);
  } else {
    return binarySearchRec(arr, num, middle + 1, end);
  }
}

let testArray = [1,2,3,4,5,6,7,8];
console.log(binarySearchRec(testArray, 9, 0, testArray.length-1)); // -1
console.log(binarySearchRec(testArray, 8, 0, testArray.length-1)); // 7
console.log(binarySearchRec(testArray, 5, 0, testArray.length-1)); // 4
console.log(binarySearchRec(testArray, 3, 0, testArray.length-1)); // 2
console.log(binarySearchRec(testArray, 7, 0, testArray.length-1)); // 6


/**
 * Solutions
 */

// Original Solution
function binarySearchO(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearchR(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
