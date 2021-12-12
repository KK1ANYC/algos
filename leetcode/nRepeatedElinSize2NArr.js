var repeatedNTimes = function (nums) {
  let hash = {};
  for (let i = 0; i <= nums.length; i++) {
    if (!hash[nums[i]]) hash[nums[i]] = 1;
    else {
      return nums[i];
    }
  }
};
