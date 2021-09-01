/**
 * Priority Queue
 */

/**
 * Using min heap this time
 * Lower priority = higher severity
 */

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min; 
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftInd = 2 * index + 1;
      let rightInd = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftInd < length) {
        leftChild = this.values[leftInd];
        if (leftChild.priority < element.priority) {
          swap = leftInd;
        }
      }

      if (rightInd < length) {
        rightChild = this.values[rightInd];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightInd;
        }
      }

      if (!swap) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

}

/**
 * Test
 */

let er = new PriorityQueue();
er.insert('cold', 5);
console.log(er.extractMin())