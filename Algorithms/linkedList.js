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
      return this;
    } else {
      let currentNode = this.head;
      let newTail = currentNode;
      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return this;
    }
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prev = this.get(index - 1); //hi
    let temp = prev.next; //there
    prev.next = prev.next.next; //you
    temp = null;
    this.length--;
    return true;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    // for (let i = 0; i < this.length; i++){
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    // }
  }
}

let list = new singlyLinkedList();
list.push("hi");
list.push("there");
list.push("you");
console.log(list);

//singly linked list practice 2
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
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let currentNode = this.head;
    if (!this.length) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return this;
  }

  shift() {
    let currentNode = this.head;
    if (!this.length) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentNode.next;
      currentNode = null;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let currentNode = this.head;
    if (this.length === 0 || index < 0 || index > this.length) return null;
    else {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  set(index, val) {
    if (this.length === 0 || index < 0 || index > this.length) return null;
    else {
      let currentNode = this.get(index);
      currentNode.val = val;
    }
    return true;
  }

  insert(index, val) {
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prev = null;
    let next;
    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
}

let list = new singlyLinkedList();
list.push(0); //prev, currentNode.next
list.push(1); //next, currentNode, prev
list.push(2);
list.push(3);
list.push(4);

list.push(5); //this.tail
//this.tail.next
// list.pop()
// list.shift()
// list.unshift('unshifted')
// list.get(2) // 2
// list.set(5, 'changed')
// list.insert(6, 'changed')
list.reverse();
console.log(list);



//doubly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let removedNode = this.tail;
    if (!this.head) return null;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    let removeNode = this.head;
    if (!this.head) return null;
    else if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = removeNode.next;
      this.head.prev = null;
      removeNode.next = null;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  get(index) {
    if (!this.head || index < 0 || index >= this.length) return undefined;
    let currentNode;
    if (index > Math.floor(this.length / 2)) {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    } else {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    else {
      node.val = val;
      return true;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(val);
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let prev = this.get(index - 1);
    let next = prev.next;
    newNode.next = next;
    newNode.prev = prev;
    prev.next = newNode;
    next.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      let removedNode = this.get(index);
      if (!removedNode) return null;
      else {
        let next = removedNode.next;
        let prev = removedNode.prev;
        prev.next = next;
        next.prev = prev;
        removedNode.next = null;
        removedNode.prev = null;
        return removedNode;
      }
    }
  }
}

let list = new doublyLinkedList();

list.push(1);
console.log(list);
