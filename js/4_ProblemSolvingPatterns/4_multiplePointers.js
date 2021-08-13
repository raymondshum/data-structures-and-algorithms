/**
 * Multiple Pointers
 * 
 * Start with an array, linked list, etc.
 * Creating pointers or values that correspond
 * to an index or position and move in a direction
 * based on a certain condition.
 * 
 * Efficient for solving problems with minimal
 * space complexity.
 */

/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an 
 * array that includes both values that sum to zero or undefined if a pair 
 * does not exist.
 */

//  sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
//  sumZero([-2,0,1,3]) // undefined
//  sumZero([1,2,3]) // undefined

// It's important that its sorted. Can't come up
// with an efficient solution if its unsorted.

// Naive Solution
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}

// Refactor
// Add left to right
// If > 0, right is too big. Decrement by one.
// If < 0, left is too small. Increment by one.
// Exit loop when left meets right
function sumZeroRef(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
  }
}