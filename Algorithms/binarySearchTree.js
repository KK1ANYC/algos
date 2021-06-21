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
  //   insert(val) {
  //     let newNode = new Node(val);
  //     let current = this.root;
  //     if (!this.root) this.root = newNode;
  //     else {
  //       while (current) {
  //         if (val === current.val) return undefined;
  //         if (val > current.val && current.right) {
  //           current = current.right;
  //         } else if (val < current.val && current.left) {
  //           current = current.left;
  //         } else break;
  //       }
  //       val > current.val ? (current.right = newNode) : (current.left = newNode);
  //     }
  //     return this;
  //   }

  //O (log n)
  insert(val) {
    let newNode = new Node(val);
    let current = this.root;
    if (!this.root) this.root = newNode;
    else {
      while (true) {
        if (val === current.val) return undefined;
        if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  //O (log n)
  find(val) {
    let current = this.root;
    if (!this.root) return false;
    while (current.val !== val && !current.val) {
      if (val > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    if (current.val === val) {
      return true;
    }
    return false;
  }

  BFS() {
    //iterative solution
    let queue = [];
    let visited = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  DFSPreOrder() {
    let result = [];
    function recursiveHelper(node) {
      result.push(node.val);
      if (node.left) recursiveHelper(node.left);
      if (node.right) recursiveHelper(node.right);
    }
    recursiveHelper(this.root);
    return result;
  }
}
