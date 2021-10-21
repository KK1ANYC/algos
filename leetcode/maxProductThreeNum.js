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


//solution 2 heap sorting
var maximumProduct = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min2 = Infinity;
  let min1 = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      [max1, max2, max3] = [nums[i], max1, max2];
    } else if (nums[i] > max2) {
      [max2, max3] = [nums[i], max2];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
    if (nums[i] < min1) {
      [min2, min1] = [min1, nums[i]];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
