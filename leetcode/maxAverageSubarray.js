var findMaxAverage = function(nums, k) {
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
