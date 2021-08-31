/**
 * Queues
 */

/**
 * FIFO
 */

/**
 * Examples:
 * CPU Schedule
 * Waiting in line to login
 * Background tasks
 * Uploading resources
 * Print Queue
 * Task Processing (priority queue)
 */

/**
 * Complexity
 * 
 * O(1) - Insertion and Removal
 * O(N) - Searching and Access
 */

/**
 * Implementation
 */

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// add to end, remove from beginning (singly linked list)
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value){

    let node = new Node(value);

    if (this.size === 0){
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  dequeue() {
    if ( this.size === 0) {
      return null;
    }

    let node = this.first;

    if ( this.size === 1 ) {
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
      console.log("Empty queue.");
    } else {
      let stackVals = "Queue: ";
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

var queue = new Queue();
queue.print(); // Empty queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // 1 2 3
console.log(queue.dequeue()); // 1
queue.print(); // 2 3
console.log(queue.dequeue()); // 2
queue.print(); // 3
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // null
queue.print(); // empty queue
