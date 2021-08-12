/**
 * Recursion
 *
 */

/**
 * What?
 *
 * A process that calls itself until an endpoint is reached.
 *
 * - JSON.parse
 * - JSON.stringify
 * - document.getElementById
 * - DOM traversal algorithms
 * - Object traversal
 */

/**
 * JavaScript Call Stack
 *
 * - Stack data structure
 * - An invoked func is pushed onto the top of the stack.
 * - On "return" keyword or end of func, compiler will remove (pop)
 */

/**
 * Two things needed:
 *
 * - Invoke the same function with a different input until you reach
 *   base case.
 * - Base Case: Condition when recursion ends.
 */

/**
 * Example
 */

// Counts down to 0
function countDown(num) {
  if (num <= 0) {
    // base case - returns at 0
    console.log("All done!");
    return;
  }
  console.log(num); // output current num
  num--; // decrement num by 1
  countDown(num); // repeat
}

countDown(5);

/**
 * Example
 */

// sums the values in a range
function sumRange(num) {
  console.log(`${num} ${num === 1 ? "=" : "+"}`);
  if (num === 1) return 1; // base case: lowest positive number reached
  return num + sumRange(num - 1); // add this num and the sumRange of prev
}

console.log(sumRange(10));

/**
 * Common Problems:
 * 
 * 1. Wrong or incorrect base case.
 * 2. Forgetting to return or returning incorrect value.
 *    - Not changing input in recursive call.
 * 3. Stack overflow (maximum call stack size exceeded).
 */
