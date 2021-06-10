//sliding Window

//example 1
function maxSubArray(nums, jump) {
  if (nums.length < jump) return null
  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < jump; i++) {
    maxSum += nums[i]
  }
  for (let i = jump; i < nums.length; i++) {
    tempSum = maxSum + nums[i] - nums[i - jump]
    if (tempSum > maxSum) maxSum = tempSum
  }
  return maxSum
  }

  console.log(maxSubArray([1,2,5,2,8,1,5],4))
  
