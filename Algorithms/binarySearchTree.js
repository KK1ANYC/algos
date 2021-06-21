//binary search tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root;
  }
  insert(val) {
    let newNode = new Node(val);
    let current = this.root;
    if (!this.root) this.root = newNode;
    else {
      while (current) {
        if (val > current.val && current.right) {
          current = current.right;
        } else if (val < current.val && current.left) {
          current = current.left;
        } else break;
      }
      val > current.val ? (current.right = newNode) : (current.left = newNode);
    }
    return this;
  }
}