var singleNumber = function (nums) {
  let memo = {};
  for (let i = 0; i < nums.length; i++) {
    memo[nums[i]] ? memo[nums[i]]++ : (memo[nums[i]] = 1);
  }
  for (let key in memo) {
    if (memo[key] === 1) {
      return Number(key);
    }
  }
};

console.log(singleNumber([2, 2, 1], 1));

