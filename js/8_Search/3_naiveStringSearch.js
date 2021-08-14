/**
 * Naive String Search
 * 
 * Count the number of times a smaller string appears in a longer string.
 * Naive: Check the pairs of characters individually
 * 
 * O(mn) - N for string size, m for substring size
 * But what if m = n? <-- Find out
 * m cannot be greater than n with our implementation. Outer loop breaks
 * at n.length. But at worst case, then you could be checking strings
 * of equal lengths, making it n^2
 */

//  Loop over the longer string
//  Loop over the shorter string
//  If the characters don't match, break out of the inner loop
//  If the characters do match, keep going
//  If you complete the inner loop and find a match, increment the 
//  count of matches
//  Return the count

/**
 * Attempt
 */

// 
// inner loop can iterate for up to the length of the entire string
function stringSearchN(str, substr){
  let count = 0;
  for (let i = 0; i <= str.length - substr.length; i++) {
    if(str[i] == substr[0]){
      let charMatch = true;
      let strPoint = i + 1;
      let subPoint = 1;
      while(charMatch && subPoint < substr.length) {
        if (str[strPoint] == substr[subPoint]){
          charMatch = true;
          strPoint++;
          subPoint++;
        } else {
          charMatch = false;
        }
      }
      if(charMatch == true) {
        count++;
      }
    }
  }
  return count;
}
console.log(stringSearchN("hahaha", "ha")) //3
console.log(stringSearchN("hahaha", "h")) //3
console.log(stringSearchN("hahaha", "hah")) //2

/**
 * Solution
 */

// If performing in Java, would this give an array out of bounds error?
 function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

console.log(naiveSearch("lorie lolil", "lol"));