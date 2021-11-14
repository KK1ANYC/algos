//O(n) time and space
var missingNumber = function (nums) {
  let hash = {};
  for (let num of nums) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  let totalNums = nums.length;

  while (totalNums >= 0) {
    if (hash[totalNums]) {
      totalNums--;
    } else {
      return totalNums;
    }
  }
};


