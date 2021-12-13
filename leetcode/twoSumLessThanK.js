var twoSumLessThanK = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let maxResult = -1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum >= k) {
      right--;
    } else if (sum < k) {
      if (sum > maxResult) {
        maxResult = sum;
      }
      left++;
    }
  }
  return maxResult;
};
