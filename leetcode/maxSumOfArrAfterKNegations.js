var largestSumAfterKNegations = function (nums, k) {
  while (k > 0) {
    let smallestNum = Math.min(...nums);
    let i = nums.indexOf(smallestNum);
    nums[i] *= -1;
    k--;
  }

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
};
