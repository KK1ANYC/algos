//O(n) time
var findMaxConsecutiveOnes = function (nums) {
  let maxResult = 0;
  let subResult = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      subResult++;
    } else {
      if (maxResult < subResult) {
        maxResult = subResult;
      }
      subResult = 0;
    }
  }
  return maxResult > subResult ? maxResult : subResult;
};

