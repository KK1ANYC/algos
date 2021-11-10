var maximumProduct = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let newArr1 = [];
  let newArr2 = [];
  let val1 = 1;
  let val2 = 1;
  newArr1.push(sortedNums[0]);
  newArr1.push(sortedNums[1]);

  for (let i = sortedNums.length - 1; i >= sortedNums.length - 3; i--) {
    newArr2.push(sortedNums[i]);
  }

  for (let elem of newArr1) {
    val1 *= elem;
  }
  val1 *= newArr2[0];

  for (let elem of newArr2) {
    val2 *= elem;
  }

  return val1 > val2 ? val1 : val2;
};


var maximumProduct = function (nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  var max1 = nums[nums.length - 1];
  var max2 = nums[nums.length - 2];
  var max3 = nums[nums.length - 3];
  var min1 = nums[0];
  var min2 = nums[1];
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

var maximumProduct = function (nums) {
  if (nums.length === 3) return nums[0] * nums[1] * nums[2];
  let neg1 = Infinity;
  let neg2 = Infinity;
  let pos1 = -Infinity;
  let pos2 = -Infinity;
  let pos3 = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num < neg1) {
      neg2 = neg1;
      neg1 = num;
    } else if (num >= neg1 && num < neg2) neg2 = num;
    if (num > pos1) {
      pos3 = pos2;
      pos2 = pos1;
      pos1 = num;
    } else if (num <= pos1 && num > pos2) {
      pos3 = pos2;
      pos2 = num;
    } else if (num <= pos2 && num > pos3) pos3 = num;
  }
  return Math.max(pos1 * pos2 * pos3, pos1 * neg1 * neg2);
};
