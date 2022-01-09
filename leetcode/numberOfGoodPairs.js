var numIdenticalPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == nums[i]) {
        count++;
      }
    }
  }

  return count;
};

/*

brute

have a count variable
with a nested array
outer array starts at 0
inner array starts at i
increment count if nums[i] == nums[j]

*/
