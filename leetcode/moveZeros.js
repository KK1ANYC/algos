//O(n) time
var moveZeroes = function (nums) {
  let countZero = 0;
  let nonZeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nonZeroes] = nums[i];
      nonZeroes++;
    } else countZero++;
  }

  let k = nums.length - 1;
  while (countZero > 0) {
    nums[k] = 0;
    k--;
    countZero--;
  }

  return nums;
};

/*
set variable countZero and nonZeroes
loop through array (checking for how many zeros and replacing the nums[nonZeroes] with the nonZero number)
if the el is not zero,
then nums[nonZeroes] = nums[i]
increment nonZeroes
else increment countZero

loop backwards by adding in the zeros

*/
