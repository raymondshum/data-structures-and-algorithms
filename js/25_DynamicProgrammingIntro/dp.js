/**
 * Dynamic Programming
 */

/**
 * Overlapping subproblems
 *  - Non overlapping lends itself to divide and conquer
 * Optimal Substructure
 *  - Can construct optimal solution from sub problems
 */

/**
 * Example: Fibonacci Sequence
 *
 *  - Note: Notoriously bad with recursion
 */

// Recursive solution
// About O(2^n), around O(1.6^n)

function fib1(n) {
  // fib 0 should also equal 0
  // example ignores above
  if (n <= 2) return 1;
  return fib1(n - 1) + fib1(n - 2);
}

// Refactor
// Memoization
// memo is good candidate for hash map
// Time Complexity: O(n)

function fib2(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// Tabulation
// Storing results in a table (usually array)
// Usually done using iteration
// Better space complexity compared to recursion
// Time Complexity: O(n), but won't stack overflow where the memoized version will

function fib3(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNumbs[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
