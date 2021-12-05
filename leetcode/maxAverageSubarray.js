//O(n^2) time complexity
var findMaxAverage = function (nums, k) {
    let max = -Infinity
    for (let i = 0; i <= nums.length; i++) {
        let sum = 0
        for (let j = i; j < i+k; j++) {
            sum += nums[j]
        }
        let average = (sum / k)
        if (max < average) {
            max = average
        }
    }
    return max
};

/*
let max = -Infinity
have a nest for loop
outer loop checks the nums.length
let sum = sum of all k
inner loop checks k length
adds all num to sum
outer loop
checks average and if sum is > max and replaces it
return max
*/

//O(n) time complexity
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }

  return max / k;
};
