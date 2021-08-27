/**
 * Singly Linked Lists
 * 
 * Note: length is calculated incorrectly somewhere in the list
 */

/**
 * Definition
 *
 * A data structure that contains a head, tail and length property.
 *
 * Linked Lists consist of nodes, and each node has a value and a
 * pointer to another node or null
 *
 * You want a linked list when you're dealing with many insertions and
 * deletions. You do not have to reindex a linked list.
 * 
 * Linked lists excel at insertion and deletion. If you want a huge list
 * with elements that you access in order, then linked lists are good.
 * 
 * Use if you don't care about random access times.
 */

/**
 * Comparisons
 *
 * Linked Lists
 *  Do not have indexes!
 *  Connected via nodes with a next pointer
 *  Random access is not allowed
 *
 * Arrays
 *  Indexed in order!
 *  Insertion and deletion can be expensive
 *  Can quickly be accessed at a specific index
 */

/**
 * Complexity
 * 
 * Insertion: O(1)
 * Removal: O(1) or O(n)
 * Searching: O(n)
 * Access: O(n)
 */

/**
 * Implementation
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get(index) {
    if (index < 0 || index >= list.length) {
      return null;
    }

    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }

    return curNode;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == this.length) {
      return !!this.push(val);
    } else if (index == 0) {
      return !!this.unshift(val);
    } else {
      let newNode = new Node(val);
      let curNode = this.get(index - 1);

      newNode.next = curNode.next;
      curNode.next = newNode;
      this.length++;
      return true;
    }
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    // Case 1: List is empty
    if (!this.head) {
      return undefined;
    }

    // Case 2: List has 1 item left
    if (this.length === 1) {
      let current = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }

    // Pop item. Return last node & set second to last as tail.
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  populateList() {
    this.push("Hello!");
    this.push("Goodbye!");
    this.push("Hello Again!");
    this.push("Goodbye Again!");
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    let prevNode = this.get(index - 1);
    let remNode = prevNode.next;
    prevNode.next = remNode.next;
    return remNode;
  }

  reverse(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i = 0; i < this.length-1; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  set(val, index) {
    let node = this.get(index);

    if (!node) {
      return false;
    }

    node.val = val;
    return true;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    let newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

/**
 * Test
 */

var list = new SinglyLinkedList();

list.populateList();

console.log("Traversing List: ");
list.traverse();
console.log("");

console.log("Removing tail:", list.pop());
console.log("\nNew list: ");
list.traverse();

console.log("\nPopping all items: ");
var listNode;
do {
  listNode = list.pop();
  console.log(listNode);
} while (listNode);

list.populateList();

console.log("\nShifting all items: ");
var listNode;
do {
  listNode = list.shift();
  console.log(listNode);
} while (listNode);

console.log("\nUnshifting elements: ");
for (let i = 0; i < 3; i++) {
  list.unshift(i);
}

list.traverse();

console.log("\nGetting all values: ");
for (let i = 0; i < list.length; i++) {
  console.log(`Index: ${i}`, "Value:", list.get(i).val);
}

console.log("\nSetting all values incrementally: ");
for (let i = 0; i < list.length; i++) {
  list.set(i, i);
  console.log(`Index: ${i}`, "Value:", list.get(i).val);
}

console.log("\nRefreshing list...");
var listNode;
do {
  listNode = list.pop();
} while (listNode);

list.populateList();
list.traverse();

console.log("\nInserting Elements: ");
var length = list.length;
for (let i = 0; i < length; i++) {
  list.insert(i, i);
}
list.traverse();

console.log("\nRemoving last element: ");
console.log(list.remove(list.length - 1));

console.log("\nRemoving first element");
console.log(list.remove(0));

console.log("\nRemoving third element:");
console.log(list.remove(3));

console.log("\nCurrent List:");
list.traverse();

console.log(`\nReversing List[${list.length}]: `);
list.reverse();
list.traverse();