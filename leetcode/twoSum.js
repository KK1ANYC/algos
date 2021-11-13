
//O(n) space and time, linear
function twoSum(nums, target) {
  let vals = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in vals) {
      return [vals[target - nums[i]], i];
    } else {
      vals[nums[i]] = i;
    }
  }
  return [];
}

//O(n) space and time, linear
var twoSum = function (nums, target) {
  let memo = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in memo) {
      result = [memo[diff], i];
    } else {
      memo[nums[i]] = i;
    }
  }
  return result;
};

console.log(twoSum([3, 2, 4], 6));

/*
O(n) time, linear
return the (index + 1) of the two numbers that add up to the target
*/
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let total = numbers[left] + numbers[right];
    if (total === target) {
      return [left + 1, right + 1];
    } else if (total < target) {
      left++;
    } else if (total > target) {
      right--;
    }
  }
};
