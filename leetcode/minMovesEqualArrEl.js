var minMoves = function (nums) {
  var sum = nums[0];
  var min = nums[0];
  for (var i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    sum += nums[i];
  }
  return sum - min * nums.length;
};


console.log("3", minMoves([1, 2, 3]));

console.log("0", minMoves([1, 1, 1])); 
