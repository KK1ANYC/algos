//heaps
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    let i = this.values.length;
    let j = Math.floor((i - 1) / 2);
    this.values.push(val);
    while (i >= 0) {
      if (this.values[j] < val) {
        let temp = this.values[j];
        this.values[j] = this.values[i];
        this.values[i] = temp;
      }
      i = j;
      j = Math.floor((i - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;
    let removedRoot = this.values.pop();
    let i = 0;
    while (i < this.values.length) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
      if (
        this.values[left] > this.values[right] &&
        this.values[left] > this.values[i]
      ) {
        let temp = this.values[left];
        this.values[left] = this.values[i];
        this.values[i] = temp;
        i = left;
      } else if (
        this.values[right] > this.values[left] &&
        this.values[right] > this.values[i]
      ) {
        let temp = this.values[right];
        this.values[right] = this.values[i];
        this.values[i] = temp;
        i = right;
      } else break;
    }
    return removedRoot;
  }
}
let heap = MaxBinaryHeap();
console.log(heap);

//given a val and priority
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let heap = new MaxBinaryHeap();

heap.enqueue("concusion", 3);
heap.enqueue("low fever", 4);
heap.enqueue("drunk", 5);
heap.enqueue("broken bone", 2);
heap.enqueue("dead", 1);
console.log(heap);

//min binary heap with val and priority
class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let heap = new MinBinaryHeap();

heap.enqueue("concusion", 3);
heap.enqueue("low fever", 4);
heap.enqueue("drunk", 5);
heap.enqueue("broken bone", 2);
heap.enqueue("dead", 1);
heap.dequeue();
heap.dequeue();
heap.dequeue();
heap.dequeue();
heap.dequeue();
