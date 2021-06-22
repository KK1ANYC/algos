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
        this.values[i] > this.values[left] &&
        this.values[i] > this.values[right]
      )
        break;
      else if (this.values[left] > this.values[right]) {
        let temp = this.values[left];
        this.values[left] = this.values[i];
        this.values[i] = temp;
        i = left;
      } else if (this.values[right] > this.values[left]) {
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
