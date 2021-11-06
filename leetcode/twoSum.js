
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
