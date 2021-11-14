//O(n) time and space

var largestUniqueNumber = function (nums) {
  let hash = {};
  for (let num of nums) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  let maxNum = -1;

  for (let key in hash) {
    if (hash[key] === 1 && +key > maxNum) {
      maxNum = +key;
    }
  }

  return maxNum;
};


