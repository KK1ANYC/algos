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


