/**
 * Divide and Conquer
 *
 * Dividing a data set into smaller chunks and then repeating a process
 * with a subset of data. Can tremendously decrease time complexity.
 *
 * Covered more in sorting and searching algorithms.
 */

/**
 * Given a sorted array of integers, write a function called search, that
 * accepts a value and returns the index where the value passed to the
 * function is located. If the value is not found, return -1
 */

function testSeach(func) {
  console.log(func);
  console.log("Expect: 3, 5, -1");
  console.log(func([1, 2, 3, 4, 5, 6], 4)); // 3
  console.log(func([1, 2, 3, 4, 5, 6], 6)); // 5
  console.log(func([1, 2, 3, 4, 5, 6], 11)); // -1
  console.log("");
}

// Naive Solution
// Linear search
function searchLin(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

testSeach(searchLin);

// Binary search (divide and conquer)
// Pick midpoint, check if value is > or < target
// If value <, ignore that half or if >, ignore that half
// O(logn)

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}


testSeach(search);