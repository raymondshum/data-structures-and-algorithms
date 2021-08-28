/**
 * Doubly Linked List
 */

/**
 * Complexity:
 * 
 * Insertion: O(1)
 * Removal: O(1)
 * Searching: O(N)
 * Access: O(N)
 */

/**
 * Implementation
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Pop / Push
   */

  pop() {
    // Case 1: empty list
    if (!this.head) return undefined;

    // Case 2: 1 element in list
    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    // Case 3: List has 2 or more elements
    let newTail = this.tail.prev;
    let popNode = this.tail;

    newTail.next = null;
    this.tail = newTail;

    popNode.prev = null;
    this.length--;
    return popNode;
  }

  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let newTail = new Node(val);
      newTail.prev = this.tail;
      this.tail.next = newTail;
      this.tail = newTail;
    }
    this.length++;
    return this;
  }

  /**
   * Shift / Unshift
   */

  shift() {
    // Case 1: Empty List
    if (!this.head) return undefined;

    // Case 2: 1 element in list
    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    // Case 3: 2+ elements in list
    let oldHead = this.head;
    let newHead = oldHead.next;

    oldHead.next = null;
    newHead.prev = null;

    this.head = newHead;
    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  /**
   * Get/Set
   */

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      console.log("(F) Get");
      var count = 0;
      var current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      console.log("(R) Get");
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }

  /**
   * Insert / Remove
   */

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      let nextNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === list.length - 1) return this.pop();

    let remNode = this.get(index);
    let prevNode = remNode.prev;
    let nextNode = remNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    remNode.next = null;
    remNode.prev = null;

    this.length--;
    return remNode;
  }

  /**
   * Print Functions
   */

  print() {
    let cur = this.head;
    let counter = 0;
    console.log(`Printing List (F) [${this.length}]:`);
    while (cur) {
      console.log("\nIndex:", counter);
      console.log("Value:", cur.val);
      console.log("Prev-Val:", cur.prev ? cur.prev.val : null);
      console.log("Next-Val:", cur.next ? cur.next.val : null);
      cur = cur.next;
      counter++;
    }
  }

  printRev() {
    let cur = this.tail;
    let counter = this.length - 1;
    console.log(`Printing List (R) [${this.length}]:`);
    while (cur) {
      console.log("\nIndex:", counter);
      console.log("Value:", cur.val);
      console.log("Prev-Val:", cur.prev ? cur.prev.val : null);
      console.log("Next-Val:", cur.next ? cur.next.val : null);
      cur = cur.prev;
      counter--;
    }
  }

  drawList() {
    let cur = this.head;
    let diagram = "[null]-";

    while (cur) {
      diagram += `[${cur.val}]-`;
      cur = cur.next;
    }

    diagram += "[null]";
    console.log(diagram);
  }
}

/**
 * Test
 */

var list = new DoublyLinkedList();

console.log("Building List...\n");

for (let i = 0; i < 5; i++) {
  list.push(i);
}

list.print();

console.log(`\nCurrent List (${list.length} elements): `);
list.drawList();

console.log(`\nPopping all nodes (Length: ${list.length})...`);
let length = list.length - 1;

for (let i = length; i >= 0; i--) {
  console.log(`\nPopped: [Index: ${i}] [Value: ${list.pop().val}]`);
  console.log(`Length Remaining: ${list.length}`);
  console.log(`Current List:`);
  list.drawList();
}

console.log("Building List...\n");

for (let i = 0; i < 5; i++) {
  list.push(i);
}

console.log("\nShifting elements...");
length = list.length;
console.log(length);
for (let i = 0; i < length; i++) {
  console.log(`\nShifting: [Value: ${list.shift().val}]`);
  console.log(`Length Remaining: ${list.length}`);
  console.log(`Current List:`);
  list.drawList();
}

console.log("\nUnshifting List...\n");

for (let i = 5; i >= 0; i--) {
  list.unshift(i);
  console.log(`\nUnshifted: ${i} | Current Length: ${list.length}`);
  console.log("Current List:");
  list.drawList();
}

console.log("\nGetting all elements...");

for (let i = 0; i < list.length; i++) {
  console.log("");
  let val = list.get(i).val;
  console.log(`Index: ${i} | Value: ${val}`);
}

console.log("\nSetting all elements in reverse order... ");
let count = 0;
for (let i = list.length - 1; i >= 0; i--) {
  list.set(i, count);
  count++;
  list.drawList();
}

console.log("\nResetting order...");
for (let i = 0; i < list.length; i++) {
  list.set(i, i);
  list.drawList();
}

console.log("\nInsert @ list start: ");
list.insert(0, "START");
console.log("New Length:", list.length);
list.drawList();

console.log("\nInsert @ list end: ");
list.insert(list.length, "END");
console.log("New Length:", list.length);
list.drawList();

console.log("\nInsert @ middle: ");
let mid = Math.floor(list.length / 2);
list.insert(mid, "MIDDLE");
console.log("New Length:", list.length);
list.drawList();

console.log("\nRemove @ middle: ");
list.remove(mid);
console.log("New Length:", list.length);
list.drawList();

console.log("\nRemove @ list start: ");
list.remove(0);
console.log("New Length:", list.length);
list.drawList();

console.log("\nRemove @ list end: ");
list.remove(list.length - 1);
console.log("New Length:", list.length);
list.drawList();
