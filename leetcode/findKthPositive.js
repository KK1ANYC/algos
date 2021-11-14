var findKthPositive = function (arr, k) {
  let result = 0;
  let count = 0;
  let i = 0;
  let j = 1;
  while (count < k) {
    if (j !== arr[i]) {
      count++;
      result = j;
    }
    if (j === arr[i]) {
      i++;
    }
    j++;
  }
  return result;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); //9
console.log(findKthPositive([1, 2, 3, 4], 2)); //6
