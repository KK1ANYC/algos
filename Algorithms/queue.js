//Queue adding to the tail and removing from the head

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    let removedFirst = this.first;
    if (!this.size) return null;
    else if (this.size === 1) {
      //this.first == this.last
      // this.first = null;
      this.last = null;
    } else {
      this.first = removedFirst.next;
      // removedFirst.next = null //?
    }
    this.size--;
    return removedFirst.val;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
console.log(queue);
