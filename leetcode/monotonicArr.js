var isMonotonic = function (nums) {
  let increment = 1;
  let decrement = 1;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= prev) {
      increment++;
    }
    if (nums[i] <= prev) {
      decrement++;
    }
    prev = nums[i];
  }
  if (increment === nums.length || decrement === nums.length) {
    return true;
  } else {
    return false;
  }
};
