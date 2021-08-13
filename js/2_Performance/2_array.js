/**
 * Arrays
 * 
 * When to use:
 * Need order.
 * When you need fast access, insertion and
 * removal (SORT OF).
 * 
 * Big O:
 * O(n) - Searching
 * O(1) - Access (jump immediately to data using index)
 * Depends - Insertion & Removal 
 * 
 * Insertion & Removal:
 * End - O(1)
 * Start - O(n)
 * 
 * Push and pop are always faster than shift and unshift.
 * 
 * Methods:
 * O(1) - push, pop
 * O(n) - shift, unshift, concat, slice, splice
 * O(n) - forEach, map, filter, reduce, etc
 * O(nlogn) - sort
 */

// Ordered lists
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];