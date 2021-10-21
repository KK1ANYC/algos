var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  let result = -Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let product = nums[i] * nums[left] * nums[right];
      if (product < result) {
        left++;
      } else {
        result = product;
        right--;
      }
    }
  }
  return result;
};
