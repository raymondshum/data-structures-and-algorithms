/**
 * Selection Sort
 * 
 * Time Complexity: O(n^2)
 */

/**
 * Siumilar to bubble sort but places small values into sorted position
 * instead of large ones.
 * 
 * Make one pass through the array and identify the minimum.
 * Place the minimum at the front. Repeat.
 */

//  Store the first element as the smallest value you've seen so far.
//  Compare this item to the next item in the array until you find a 
//  smaller number.
//  If a smaller number is found, designate that smaller number to be 
//  the new "minimum" and continue until the end of the array.
//  If the "minimum" is not the value (index) you initially began with, 
//  swap the two values.
//  Repeat this with the next element until the array is sorted.

function swap(array, ind1, ind2) {
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
}

/**
 * Attempt
 */

function selSort(array){
  for(let i = 0; i < array.length - 1; i++){
    let min = i;
    for(let j = i + 1; j < array.length; j++){
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) swap(array, i, min);
  }
  return array;
}

let testArray = [5, 8, 11, 12, 1, 3, 2, 20, 30, 15];
console.log("Attempt 1: ", selSort(testArray));