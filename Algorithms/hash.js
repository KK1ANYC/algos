//hash

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let i = this._hash(key);
    if (!this.keyMap[i]) {
      this.keyMap[i] = [];
      this.keyMap[i].push([key, value]);
    } else {
      this.keyMap[i].push([key, value]);
    }
    return this.keyMap;
  }
}

let hash = new HashTable(53);
hash.set; //(key, value)
console.log(hash);
