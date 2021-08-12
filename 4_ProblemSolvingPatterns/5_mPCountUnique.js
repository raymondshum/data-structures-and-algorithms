/**
 * Multiple Pointers: countUniqueValues
 */

/**
 * Implement a function called countUniqueValues, which accepts a sorted
 * array, and counts the unique values in the array. There can be negative
 * numbers in the array, but it will always be sorted.
 */

function testUniqueValues(func) {
  console.log(func);
  if (func([1, 1, 1, 1, 1, 2]) == 2) {
    console.log("Pass: Test 1");
  } else {
    console.log("Fail: Test 1");
  }
  if (func([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) == 7) {
    console.log("Pass: Test 2");
  } else {
    console.log("Fail: Test 2");
  }
  if (func([]) == 0) {
    console.log("Pass: Test 3");
  } else {
    console.log("Fail: Test 3");
  }
  if (func([-2, -1, -1, 0, 1]) == 4) {
    console.log("Pass: Test 4\n");
  } else {
    console.log("Fail: Test 4\n");
  }
}

// With single pointer
// Hold previous value of the array
// if start of array, set current value as previous, increment unique value
// on loop iteration, compare current value with previous value
// because the array is sorted, if the value changes, then increment unique
// set current val as previous val
// loop continues until last element of the array
function countUniqueValuesSin(arr) {
  let uniqueValues = 0;
  let prevNum;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || prevNum != arr[i]) {
      uniqueValues++;
    }
    prevNum = arr[i];
  }
  return uniqueValues;
}

testUniqueValues(countUniqueValuesSin);

// Multiple Pointers solution
// modifies array
// i starts at position 0 and j starts at position 1
// if i and j are equal, i stays in place
// else if they are not equal, the value is unique, i increments
// set the value of i to equal j
// increment j
// continue until j reaches end of array
// return index value of i + 1 (array starts at 0)
// represents unique values
// beginning of the array will hold all unique values (up to index i)
function countUniqueValues(arr){
  var i = 0;

  //check for empty array
  if(arr.length === 0){
    return 0;
  }

  for(var j = 1; j < arr.length; j++){
    if(arr[i] != arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

testUniqueValues(countUniqueValues);
