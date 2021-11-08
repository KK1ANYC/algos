var uniqueOccurrences = function (arr) {
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!memo[num]) memo[num] = 1;
    else memo[num] += 1;
  }
  let freqArr = Object.values(memo);
  freqArr.sort((a, b) => a - b);
  for (let k = 0; k < freqArr.length; k++) {
    if (freqArr[k] === freqArr[k + 1]) return false;
  }
  return true;
};
