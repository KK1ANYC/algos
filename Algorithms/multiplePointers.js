//multiple pointers

//example 1
function pairAverage(nums, average) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if ((nums[left] + nums[right] / 2) === average) {
    return true
    }
    if (nums[left] + nums[right]/2 > average) {
      right--
    } else {
      left++
    }
  }
  return false
}

console.log(pairAverage([1,3,3,5,6,7,10,12,19],8))
console.log(pairAverage([1,3,3],4))
