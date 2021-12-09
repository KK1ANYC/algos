//Sliding Window
var findLengthOfLCIS = function (nums) {
  let result = -Infinity;
  let count = 1;
  let start = 0;
  let end = 0;
  while (end < nums.length) {
    if (nums[end] < nums[end + 1]) {
      count++;
      end++;
    } else {
      result = Math.max(result, count);
      end = end + 1;
      start = end;
      count = 1;
    }
  }
  return result;
};


