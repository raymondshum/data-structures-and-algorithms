/**
 * Radix Sort
 * 
 * Time Complexity:
 * O(nk)
 * 
 * Space Complexity:
 * O(n+k)
 */

/**
 * Not a comparison sorting algorithm.
 * Limitation of comparison - nlogn is the lower bound of time complexity.
 *
 * Only works on numbers, usually used on binary numbers
 * Using base 10 numbers in this example
 *
 * Uses fact that information about size of a number is encoded in digits.
 */

/**
 * Helpers
 */

function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

/**
 * Radix Sort Pseudocode
 *
 * Define a function that accepts list of numbers
 *
 * Figure out how many digits the largest number has
 *
 * Loop from k = 0 up to this largest number of digits
 *
 * For each iteration of the loop:
 *
 *    Create buckets for each digit (0 to 9)
 *
 *    place each number in the corresponding bucket based on its kth digit
 *
 * Replace our existing array with values in our buckets, starting
 * with 0 and going up to 9
 *
 * return list at the end!
 */

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    // create an empty array of length 10 composed of 10 empty
    // subarrays
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 245, 5467, 12, 2345, 9852]));
