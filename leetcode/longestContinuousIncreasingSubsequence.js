//Sliding Window
var findLengthOfLCIS = function (nums) {
  let result = -Infinity;
  let count = 1;
  let start = 0;
  let end = 0;
  while (end < nums.length) {
    if (nums[end] < nums[end + 1]) {
      count++;
      end++;
    } else {
      result = Math.max(result, count);
      end = end + 1;
      start = end;
      count = 1;
    }
  }
  return result;
};


var findLengthOfLCIS = function(nums) {
 let maxLength = 1
 let subLength = 1

 for (let i = 1; i < nums.length; i++) {
     if (nums[i] > nums[i - 1]) {
         subLength++
     } else {
         subLength = 1
     }
     maxLength = Math.max(maxLength, subLength)
 }
    return maxLength
};

/*

maxLength = 3
subLength = 2

         i
[1,3,5,4,7]

use a for loop,
outside of for loop
maxLength and subLength on the out of the for loop
if right is > right - 1, sub length ++
else check if sublength = 1
Math.max(maxLength, subLength)
return maxLength
*/
