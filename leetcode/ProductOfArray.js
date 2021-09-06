var arraySign = function (nums) {
  let product = nums.reduce((accum, cv) => {
    return (accum *= cv);
  }, 1);

  if (product === 0 || nums.includes(0)) return 0;
  if (product > 0) return 1;
  else return -1;
};
