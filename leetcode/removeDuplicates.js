var removeDuplicates = function (nums) {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[slow] === nums[fast]) {
      fast++;
    } else if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    } else {
      fast++;
    }
  }

  for (let i = nums.length - 1; i > slow; i--) {
    nums.pop();
  }
};

console.log(removeDuplicates([1, 1, 2])); // [1,2,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0,1,2,3,4,_,_,_,_,_]
