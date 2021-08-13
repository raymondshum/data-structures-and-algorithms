/**
 * Helper Method Recursion
 */

/**
 * Example
 *
 * Two functions. Outer and inner recursive function.
 */

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

/**
 * Example
 */

function collectOddValues(arr) {
  // needs to be held in outer function to persist
  // otherwise, refreshed during recursive calls
  let result = [];

  // helper function, that calls itself recursively
  function helper(helperInput) {
    // base case: array length = 0
    if (helperInput.length === 0) {
      return;
    }

    // push to result if odd
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // recursive call, pass input = cur. array, starting at 2nd element
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));

/**
 * Example
 * Pure Recursion
 */

function collectOddValuesRecur(arr){
  let newArr = [];

  // base case: return empty array
  if(arr.length === 0){
    return newArr;
  }

  // push to array if odd
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // set arr = current array concat with recur call of array minus 1st ele
  newArr = newArr.concat(collectOddValuesRecur(arr.slice(1)));
  return newArr;
}

console.log(collectOddValuesRecur([1, 2, 3, 4, 5, 6, 7]));

/**
 * Pure Recursion Tips
 * 
 * 1. Arrays. Use methods such as:
 *    - Slice, ..., concat
 *      - These make copies of the arrays so you don't mutate them.
 *      - Allows you to accumulate a result.
 * 2. Strings. Immutable. Use methods such as:
 *    - Slice, substr, subtring
 *      - Makes copies of strings.
 * 2. Objects. Use methods such as:
 *    -Object.assign, ...
 */