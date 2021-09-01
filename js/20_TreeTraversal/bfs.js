/**
 * Breadth First Search
 */
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// add to end, remove from beginning (singly linked list)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new QueueNode(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  dequeue() {
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

class BstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new BstNode(value);
    let currentNode = this.root;

    if (!currentNode) {
      this.root = node;
      return this;
    }

    while (currentNode) {
      if (value == currentNode.value) {
        return this;
      }

      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = node;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (!currentNode.left) {
          currentNode.left = node;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    // Null if tree is unable to place a node
    return null;
  }
}

/**
 * Implementation
 */

class BFS {
  static bfs(bst) {
    let queue = new Queue();
    let nodes = [];

    if (!bst.root) return null;

    queue.enqueue(bst.root);

    while (queue.size !== 0) {
      console.log("loop");
      let node = queue.dequeue().value; 
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
      nodes.push(node.value);
    }
    return nodes;
  }
}

/**
 * Test
 */

var bst = new BinarySearchTree();
bst.insert(50);
bst.insert(25);
bst.insert(75);
bst.insert(10);
bst.insert(90);
bst.insert(60);
bst.insert(30);
bst.insert(15);
bst.insert(95);
bst.insert(100);

console.log(BFS.bfs(bst));
