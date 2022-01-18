var containsDuplicate = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) hash[nums[i]] = 1;
    else return true;
  }
  return false;
};
