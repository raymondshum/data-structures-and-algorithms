/**
 * Sliding Window
 *
 * Involves creating a windows which can either be an array or number
 * from one position to another.
 *
 * Depending on certain condition, the window either increases or closes
 * (and a new window is created).
 *
 * Useful for keeping track of a subset of data in an array/string etc.
 *
 * Examples Longest sequence of unique characters in a string.
 */

/**
 * Write a function called maxSubarraySum which accepts an array of integers
 * and a number called n. The function should calculate the maximum sum of
 * n consecutive elements in the array.
 */

 maxSubarraySum([1,2,5,2,8,1,5],2) // 10
 maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 maxSubarraySum([4,2,1,6],1) // 6
 maxSubarraySum([4,2,1,6,2],4) // 13
 maxSubarraySum([],4) // null

// Naive Solution
// Nested loops
// Have one loop start at 0
// Second loop continuously sums up to n indicies ahead
function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Refactor
// sum together first n elements of array
// record value in tempSum
// in next loop, subtract first element of the array from tempsum
// add value of arr[i]
// this moves the window up
// record value in maxSum if tempSum > maxSum
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
