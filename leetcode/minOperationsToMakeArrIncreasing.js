var minOperations = function (nums) {
  let count = 0;
  if (nums.length == 1) return 0;
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    if (nums[i] <= prev) {
      let add = prev + 1 - nums[i];
      nums[i] = prev + 1;
      count += add;
    }
  }
  return count;
};
