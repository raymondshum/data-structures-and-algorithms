/**
 * Binary Search Trees
 */

/**
 * Complexity:
 * 
 * O(logn) - Insertion & Searching
 * 
 * Not guaranteed. Some trees can look more like linked lists, those will be O(n)
 */

/**
 * Uses for Trees (not just BST):
 *
 * HTML DOM
 * Network Routing (Broadcast, Multicast, ETC)
 * Abstract syntax tree
 * AI and Machine learning (decision tree)
 * Folders in OS
 */

/**
 * BST
 *
 * Each node can have at most 2 children.
 * Used to store sortable data.
 * Less than parent (left), greater than parent (right)
 */

/**
 * Implementation
 */

class Node {
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
    let node = new Node(value);
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

  search(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) return true;

      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
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
console.log(bst);

console.log("\nTrue block:");
console.log(bst.search(50));
console.log(bst.search(25));
console.log(bst.search(75));
console.log(bst.search(10));
console.log(bst.search(90));
console.log(bst.search(60));
console.log(bst.search(30));
console.log(bst.search(15));
console.log(bst.search(95));
console.log(bst.search(100));

console.log("\nFalse block:");
console.log(bst.search(49));
console.log(bst.search(26));
console.log(bst.search(74));
console.log(bst.search(9));
console.log(bst.search(91));
console.log(bst.search(61));
console.log(bst.search(29));
console.log(bst.search(16));
console.log(bst.search(94));
console.log(bst.search(101));
