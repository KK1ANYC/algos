var moveZeroes = function (nums) {
  let countZero = 0;
  let nonZeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nonZeroes] = nums[i];
      nonZeroes++;
    } else countZero++;
  }

  let k = nums.length - 1;
  while (countZero > 0) {
    nums[k] = 0;
    k--;
    countZero--;
  }

  return nums;
};
