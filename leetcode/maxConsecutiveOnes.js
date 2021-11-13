//O(n) time
var findMaxConsecutiveOnes = function (nums) {
  let maxResult = 0;
  let subResult = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      subResult++;
    } else {
      if (maxResult < subResult) {
        maxResult = subResult;
      }
      subResult = 0;
    }
  }
  return maxResult > subResult ? maxResult : subResult;
};


/*
max consecutive 1's in an array

create a maxResult variable and a subResult variable
loop through the array
if nums[i] === 1, increment subResult
else check if subResult is greater than maxResult
maxResult = subResult
subResult = 0

return the greater of maxResult and subResult
*/
