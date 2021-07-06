var sortArrayByParity = function (nums) {
  let even = [];
  let odd = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even.push(nums[i]);
    else {
      odd.push(nums[i]);
    }
  }
  return even.concat(odd);
};

console.log(sortArrayByParity([3, 1, 2, 4])); //[4,2,3,1], [2,4,1,3], and [4,2,1,3]
