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
