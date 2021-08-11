/**
 * Step 4: Problem Solving / Simplify
 *
 * If you can't solve it, solve a simpler version.
 *
 * Steps:
 * 1. Find the core difficulty in the problem.
 * 2. Temporarily ignore it.
 * 3. Write a simplified solution.
 * 4. Re-incorporate the difficulty.
 */

/**
 * Write a function which takes in a string and
 * returns counts of each character in a string.
 */

//  function charCount(str) {
//   // make object to return at end
//   // loop over string, for each character...
//     // if char is a num/letter and key in the object, add one to count
//     // else if, char is a num/letter and not in object, add it and set value to 1
//     // else if char is something else, ignore
//   // return lower-case alpha-numeric characters
// }

// If you have trouble with looping, try to handle 1 character first.
// Identify a pattern that you can turn into a loop.
// If you have trouble with keys/values, start with a loop.
// Dont remember: string upper/lower method - Start with main logic first.
// Difficulty: Making sure character is alphanumeric.

// Example, ignoring alphanumeric
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if(!result[char]){
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  return result;
}

console.log(charCount('Hello!'));

// How to check if its alphanumeric?
//    - Regex
//    - Really big array
//    - 
// What if you don't remember?
//    - Mention that you know you know what needs to be done but
//      you're stuck.
//    - Ask for suggestion on how to implement.