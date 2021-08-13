/**
 * Counting number of operations.
 * 
 * Time is variable but number of operations
 * is not. More reliable measure.
 */

// 3 operations: mult, add, division
// regardless of the size of n
 function altAddUpTo(n) {
  return (n * (n + 1)) / 2;
}

// General terms (not comprehensive):
// Loop: Operations grow proportionally with n
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}