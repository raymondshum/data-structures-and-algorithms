/**
 * Depth First Search
 */
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

class DFS {
  // look at node first, then traverse left (all the way down)
  // goes top down
  static preOrder(bst) {
    let data = [];
    
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    if (bst.root) traverse(bst.root);
    return data;
  }

  // traverse first, then look at nodes
  // goes bottom up, pushes right first
  static postOrder(bst){
    let data = [];
    
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    if (bst.root) traverse(bst.root);
    return data;
  }

  // traverse left, then visit node, then traverse right
  static inOrder(bst){
    let data = [];
    
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    if (bst.root) traverse(bst.root);
    return data;
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

console.log(DFS.preOrder(bst));
console.log(DFS.postOrder(bst));
console.log(DFS.inOrder(bst));

