var createTargetArray = function (nums, index) {
  let target = [];
  let count = 0;
  while (count !== index.length) {
    target.splice(index[count], 0, nums[count]);
    count++;
  }
  return target;
};
