/**
 * Frequency Counter: Anagrams
 */

/**
 * Given two strings, write a function to determine if the second string 
 * is an anagram of the first. An anagram is a word, phrase, or name 
 * formed by rearranging the letters of another, such as cinema, formed 
 * from iceman.
 */

/**
 * Attempt 1
 * 
 * Notes: 
 * 1. Function should count value and occurence of each character.
 * 2. Second string must have same values with same frequency.
 * 3. We are not worried about edge cases such as special characters or spaces.
 * 4. What about order? Can cat be an anagram for cat?
 */

function validAnagram(str1,str2){
  if(str1.length != str2.length){
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let char of str1){
    // assigns whichever is true first and adds 1
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of str2){
    obj2[char] = (obj2[char] || 0) + 1;
  }
 
  for (let key in obj1){
    // checks if each key in obj1 is present in obj2
    if(!obj2[key]){
      return false;
    }

    // checks if frequency of each key in obj1 matches obj2
    if(obj1[key] != obj2[key]){
      return false;
    }
  }
  return true;
}

function testAnagram(func){
  console.log(func("", "")); // true
  console.log(func("aaz", "zza")); // false
  console.log(func("anagram", "nagaram")); // true
  console.log(func("rat", "car")); // false
  console.log(func("awesome", "awesom")); // false
  console.log(func("qwerty", "qeywrt")); // true
  console.log(func("texttwisttime", "timetwisttext")); // true
}

testAnagram(validAnagram);

/**
 * Alt implementation
 */

 function validAnagramAlt(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  // iterates through second, subtracting value from lookup[letter]
  // per character found
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    // 0 is falsy
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

testAnagram(validAnagramAlt);