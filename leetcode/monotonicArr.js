//O(n) time complexity and O(1) space complexity

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

/*
set a variable to count for increment and decrement
set a prev number at nums[0]
for loop over nums
check if i is >= or <= prev num
increment the ones that are true
check if increment or decrement is = to the length of nums arr

*/
