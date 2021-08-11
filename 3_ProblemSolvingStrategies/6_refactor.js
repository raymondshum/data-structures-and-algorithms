/**
 * Step 5: Refactor
 *
 * Try and improve your code. In the
 * process, improve yourself.
 *
 * Questions:
 * 1. Can you check the result?
 * 2. Can you derive the result differently?
 * 3. Can you understand it at a glance?
 * 4. Is your code resuable?
 * 5. Can you improve performance?
 * 6. Other ways to refactor?
 * 7. How have others solved this?
 */

/**
 * Write a function which takes in a string and
 * returns counts of each character in a string.
 *
 * Count alphanumeric only
 */

//Implementation using Regex
function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

console.log(charCount("Hello Friends!"));

// Refactor:
// 1. For of loop
//    for (var char of str)
// 2. Consolidate if/else
//    obj[char] = ++obj[char] || 1;
// 3. Does regex have performance implications?
//    charCodeAt(index)
//    replace regex with mathmatical comparison

function charCountRef(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// It is unecessary to check upper alpha in our case because
// we will always pass lower case characters to this f()
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

console.log(charCountRef('Hello Friends!'));
