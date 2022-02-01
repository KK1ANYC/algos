var findDuplicate = function (nums) {
  let res = 0;
  let copy = nums;
  copy.sort();
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] == copy[i + 1]) {
      return copy[i];
    }
  }
};
