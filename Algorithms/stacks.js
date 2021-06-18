//stacks add to the first and remove from the top
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // let temp = this.first
      // this.first = newNode
      // this.first.next = temp
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    let newFirst = this.first;
    if (!this.first) return null;
    else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      newFirst = this.first.next;
      this.first = null;
      this.first = newFirst;
    }
    this.size--;
    return newFirst.val;
  }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack)
