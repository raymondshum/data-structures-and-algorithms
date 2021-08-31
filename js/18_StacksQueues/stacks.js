/**
 * Stacks
 */

/**
 * Last in first out
 */

/**
 * Examples:
 * Call Stack
 * Undo/Redo functionality
 * Routing (history object)
 */

/**
 * Complexity
 */

/**
 * Implementation
 * 
 * O(1) - Insertion and Removal
 * O(N) - Searching and Access
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    let node = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return node;
    }

    this.first = node.next;
    node.next = null;
    this.size--;
    return node;
  }

  print() {
    let pointer = this.first;
    if (!pointer) {
      console.log("Empty stack.");
    } else {
      let stackVals = "Stack: ";
      for (let i = 0; i < this.size; i++) {
        stackVals += `${pointer.value} `;
        pointer = pointer.next;
      }
      console.log(stackVals);
    }
  }
}

/**
 * Test
 */

var stack = new Stack();
stack.print(); // Empty list;
stack.push(0);
stack.push(1);
stack.push(2);
stack.print(); // 2 1 0
console.log(stack.pop()); // 2
stack.print();
console.log(stack.pop()); // 1
stack.print();
console.log(stack.pop()); // 0
console.log(stack.pop()); // null
stack.print(); // empty stack
