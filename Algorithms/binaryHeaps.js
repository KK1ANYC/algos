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
}
let heap = MaxBinaryHeap();
console.log(heap);
