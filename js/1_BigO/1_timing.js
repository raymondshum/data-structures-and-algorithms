const {performance} = require('perf_hooks');

/**
 * Write a function that calculates the
 * sum of all numbers from 1 up to and
 * including some number n
 */

// Accumulator - adds numbers up to a total
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Does not feature for loop. Mathematical
// calculation of the result
function altAddUpTo(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Using timing functions
 */

function timer(func, param) {
  let t1 = performance.now();
  func(param);
  let t2 = performance.now();
  return `${func.name} Time Elapsed : ${(t2 - t1) / 1000} seconds.`;
}


console.log(`${timer(addUpTo, 1000000000)}`);
console.log(`${timer(altAddUpTo, 1000000000)}`);

// Timing functions are not always reliable. Reliability
// and precision may not be adequate.

module.exports = timer;