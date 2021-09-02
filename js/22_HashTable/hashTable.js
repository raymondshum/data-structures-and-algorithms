/**
 * Hash Tables
 */

/**
 * Hash Function
 */

/**
 * Complexity
 * 
 * O(1) - Insertion, Deletion, Access
 */

/**
 * Strategies for dealing with collisions:
 *
 * Separate Chaining
 * Store items at the same index using a nested data structure
 * Multiple key-value pairs at the same position
 *
 * Linear Probing
 * At collision, search through array to find next empty slot
 */

// use underlying utf-8 character codes
// charCodeAt - 96 = position in alphabet
// only alphabet
// just for demonstration - there will be collisions
// use primes to help prevent collisions
function hash(str, len) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % len;
  }
  return total;
}

const primeNum = 13;
let string = "hello";
console.log(hash(string, primeNum));

/**
 * Implementation
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /**
   * Set/Get
   */

  // no handling for case where key is already present
  set(key, value) {
    let index = this._hash(key);
    let len = this.keyMap.length;

    if (index < 0 || index >= len) return false;

    !this.keyMap[index]
      ? (this.keyMap[index] = [[key, value]])
      : this.keyMap[index].push([key, value]);
    return true;
  }

  get(key) {
    let index = this._hash(key);
    let len = this.keyMap.length;

    if (index < 0 || index >= len || !this.keyMap[index]) return false;

    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (key === this.keyMap[index][i][0]) {
        return this.keyMap[index][i];
      }
    }

    return false;
  }

  keys() {
    let keys = [];
    let len = this.keyMap.length;

    for (let i = 0; i < len; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

/**
 * Test
 */

let hashTable = new HashTable();
hashTable.set("hello", "goodbye");
hashTable.set("great", "hello again");
hashTable.set("three", "word");
hashTable.set("funky", "word")
console.log(hashTable.get("hello"));
console.log(hashTable.keys());
console.log(hashTable.values());
