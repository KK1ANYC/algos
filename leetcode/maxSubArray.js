function maxSubArray(nums) {
  let max = nums[0];
  let pre = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i]);
    max = Math.max(pre, max);
  }
  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5,4,-1,7,8])) // 23
console.log(maxSubArray([-1, 151, -50, -50, -50, 300, -100])); // 301
