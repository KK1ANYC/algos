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


console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); //true
console.log(uniqueOccurrences([1, 2])); //false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); //true

