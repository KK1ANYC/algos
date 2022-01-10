//Solution 1
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let v of nums) {
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      map.set(v, map.get(v) + 1);
    }
  }

  let array = [];
  for (let [key, value] of map) {
    array.push([key, value]);
  }
  array.sort(function (a, b) {
    return b[1] - a[1];
  });
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(array[i][0]);
  }
  return result;
};


//Solution 2
var topKFrequent = function (nums, k) {
  let result = new Array();
  let map = new Map();
  for (let num of nums) {
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  }

  for (let i = 0; i < k; i++) {
    let maxVal = 0;
    let numKey = 0;
    for (let [key, value] of map.entries()) {
      if (value > maxVal) {
        maxVal = value;
        numKey = key;
      }
    }
    result.push(numKey);
    map.delete(numKey);
  }

  return result;
};
