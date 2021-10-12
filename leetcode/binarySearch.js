var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((end + start) / 2);
  if (nums.length < 3) {
    if (nums[start] === target) return start;
    else if (nums[end] === target) return end;
  }
  while (end - start > 1) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[start] === target) {
      return start;
    } else if (nums[end] === target) {
      return end;
    }
    if (target > nums[mid]) {
      start = mid;
      mid = Math.floor((end + start) / 2);
    }
    if (target < nums[mid]) {
      end = mid;
      mid = Math.floor((end + start) / 2);
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); //-1
console.log(search([5], 5)); //-1
