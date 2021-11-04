
// Problem #2
var canJump = function (nums) {
  let last = nums.length - 1;
  for (let i = last - 1; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }
  return last === 0;
};

// Problem #3
function findMistake(nums) {
  let sortedNum = nums.sort((a, b) => a - b);
  let numSet = new Set();

  let duplicate = 0;

  for (const num of sortedNum) {
    if (!numSet[num]) numSet[num] = 1;
    else numSet[num]++;
  }
  // use our sets to find so we can find the dupe
  for (const key in numSet) {
    if (numSet[key] > 1) {
      duplicate = key;
      break;
    }
  }
  const tempArr = Object.keys(numSet);
  const tempL = tempArr.length;

  console.log(tempArr);
  function getMissingNo(a, n) {
    let total = Math.floor(((n + 1) * (n + 2)) / 2);
    console.log(total);
    for (let i = 0; i < n; i++) {
      total -= a[i];
      console.log(total);
    }
    return total;
  }
  console.log(getMissingNo(tempArr, tempL));
  // return Number(duplicate) + getMissingNo(tempArr,tempL)
}
