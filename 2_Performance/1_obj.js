/**
 * Objects
 * 
 * Use when:
 * Don't need order.
 * Need fast access/insertion and removal.
 * 
 * O(1) - Insertion, Removal, Access (key)
 * O(n) - Searching (value)
 * 
 * Methods:
 * O(n) - Object.keys, Object.values, Object.entries
 * O(1) - hasOwnProperty
 */

// Unordered key-value pairs
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
