//single linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return this;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this
    } else {
      let currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      currentNode.next = null;
      this.length--;
      return this
    }
  }
}

let list = new singlyLinkedList();
list.push("hi");
list.push("there");
list.push("you");
console.log(list);
