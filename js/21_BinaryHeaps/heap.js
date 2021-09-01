/**
 * Binary Heaps
 */

/**
 * Complexity
 * 
 * O(logn) - Insertion & Removal
 * O(n) - Search
 */

/**
 * Another category of tree.
 * There are min and max heaps.
 *
 * We're talking about binary heaps.
 *
 * Max heap - Parent nodes are always larger than the children
 * Min heap - Parent nodes are always smaller than the children
 *
 * No order for left vs right. No implied ordering between siblings.
 *
 * Binary heap is as compact as possible. All children of each node are as full as
 * can be and left children are filled out first.
 */

/**
 * Used with priority queues and graph traversal algorithms
 */

/**
 * Implementation
 */

// We're using an array to store a binary heap

// For any index of an array n
// Left child is stored at 2n+1
// Right child is stored at 2n+2

// For any child node at index n
// its parent is at index Math.floor((n-1)/2)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        if (leftChild > element) {
          swap = leftInd;
        }
      }

      if (rightInd < length) {
        rightChild = this.values[rightInd];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
heap.insert(55);
heap.extractMax();
console.log(heap.values);
