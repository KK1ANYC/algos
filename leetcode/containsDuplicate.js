var containsDuplicate = function (nums) {
  let memo = {};
  for (let i = 0; i < nums.length; i++) {
    if (!memo[nums[i]]) {
      memo[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
/*Input: nums = [1,2,3,1]
    Output: true
    */
console.log(containsDuplicate([1, 2, 3, 4]));
/*
    Input: nums = [1,2,3,4]
    Output: false
    */

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
/*
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true
    */
