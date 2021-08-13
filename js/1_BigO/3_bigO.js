/**
 * What is Big O?
 *
 * It's a way to formalize fuzzy counting by allowing us
 * to talk formally about how the runtime of an algorithm
 * grows as the inputs grow. It is a measurement of trends.
 *
 * An algorithm is O(f(n)) if the number of simple operations
 * the computer has to do is eventually less than a constant
 * times f(n) as n increases.
 *
 * Linear: f(n) = n
 * Quadratic: f(n) = n^2
 * Constant: f(n) = 1
 * Plus more...
 *
 * Big O refers to the worst case (upper bound) for runtime.
 */

// O(1) - Always 3 operations
function altAddUpTo(n) {
  return (n * (n + 1)) / 2;
}

// O(n) - Loop
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(n) - 2 Loops, sequentially
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Back down. Bye!");
}

// O(n^2) - Nested Loops
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

/**
 * Generalized rules for counting.
 * 
 * ---
 * 
 * Constants don't matter. We're going to infinity.
 * Smaller terms don't matter: O(1000n + 50) = O(n)
 * 
 * ---
 * 
 * Shorthands
 * 
 * Arithmetic operations are constants.
 * Variable assignment is constant.
 * Accessing elements in an array (index or key) 
 * is constant.
 * 
 * Loop: complexity is the length of the loop times
 * the complexity of whatever happens in the loop.
 */

// Prints numbers up to n but at least up to 5
// O(n)
 function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// Prints numbers up to a maximum of 5
//O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
