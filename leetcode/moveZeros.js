var moveZeroes = function (nums) {
  let count = 0;
  while (count < nums.length) {
    console.log("count", count);
    if (nums[count] === 0 && nums[count + 1] === 0) {
      nums.splice(count, 2);
      nums.push(0);
      nums.push(0);
    }
    if (nums[count] === 0) {
      nums.splice(count, 1);
      nums.push(0);
    }
    count++;
  }
  return nums;
};
