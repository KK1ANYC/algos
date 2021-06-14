//binary search

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let midPoint = Math.floor((end + start) / 2);
  while (end - start > 1) {
    if (nums[midPoint] !== target) {
      if (nums[midPoint] < target) {
        start = midPoint;
        midPoint = Math.floor((end + start) / 2);
      }
      if (nums[midPoint] > target) {
        end = midPoint;
        midPoint = Math.floor((end + start) / 2);
      }
    } else {
      return midPoint;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));
