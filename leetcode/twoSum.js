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

console.log(twoSum([2, 7, 11, 15], 9)); //[1,2]
console.log(twoSum([2, 3, 4], 6)); //[1,3]
console.log(twoSum([-1, 0], -1)); //[1,2]

/*
increasing order
at least 2 numbers
can include negative numbers
exactly one solution

create two pointers left and right
create a while loop, condition left < right
set variable total to numbers[left] + numbers[right]
if total === target, return [left + 1, right + 1]
else if total < target, left++
else if total > target, right--

*/


var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i <= nums.length; i++) {
    let diff = target - nums[i];
    if (diff in hash) {
      return [hash[diff], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
