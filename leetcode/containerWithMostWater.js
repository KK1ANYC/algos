//O(n) time complexity
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[right], height[left]) * (right - left);
    if (area > max) max = area;
    if (height[right] <= height[left]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
