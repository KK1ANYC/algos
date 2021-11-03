//Altus
function findShortestSubArray(nums) {
  if (nums.length === 1) return 1;
  let memo = {};
  let freqNums = [];
  let results = [];
  for (let cv of nums) {
    memo[cv] ? memo[cv]++ : (memo[cv] = 1);
  }
  let largest = Math.max(...Object.values(memo));
  for (let key in memo) {
    if (memo[key] === largest) freqNums.push(+key);
  }
  while (freqNums.length) {
    let cv = freqNums.pop();
    let front = -1;
    let end;
    for (let i = 0; i < nums.length; i++) {
      if (front < 0 && nums[i] === cv) front = i;
      if (nums[i] === cv) end = i;
    }
    results.push(end - front + 1);
  }
  return Math.min(...results);
}


//WIP incomplete
var findShortestSubArray = function(nums) {
    let memo = {}
    for (let i = 0; i < nums.length; i++) {
        if (!memo[nums[i]]) memo[nums[i]] = 1
        else memo[nums[i]]++
    }
    let max = -Infinity
    let maxNum = 0
    let maxNumArr = []
    for (let key in memo) {
      // console.log("memo[key]", memo[key])
        if (memo[key] > max) {
            max = memo[key]
            maxNum = key
        }
        else if (memo[key] === max) {
          maxNumArr.push(key, maxNum)
        }
    }
    // console.log("maxNum", maxNum)
    // console.log("maxNumArr", maxNumArr)
    let minIdx = -Infinity
    let maxIdx = Infinity
    let count = 0
    let hash = {}
    while (count <= maxNumArr.length) {
      let firstIdx = 0
      console.log("maxNumArr count", maxNumArr[count])
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] === maxNumArr[count]) {
              firstIdx = i
          }
      }
      for (let i = nums.length; i > 0; i--) {
          if (nums[i] === maxNumArr[count]) {
              hash[maxNumArr[count]] = [firstIdx, i]
          }
      }
      count++
    }
    console.log("hash", hash)

    let subArr = nums.slice(minIdx, maxIdx)
    return subArr.length
};

console.log(findShortestSubArray([1,2,2,3,1])) //2
