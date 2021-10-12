let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;



console.log(twoNumberSum(array, targetSum));

//solution 1 - 2 Pointers
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left !== right) {
    if (array[left] + array[right] === targetSum) {
      return [array[left], array[right]];
    }
    if (array[left] + array[right] < targetSum) {
      left++;
    }
    if (array[left] + array[right] > targetSum) {
      right--;
    }
  }
  return [];
}

//solution 2 - Nested for loop
function twoNumberSum(array, targtSum) {
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

//solution 3 - memo
function twoNumberSum (array, targetSum) {
  let memo = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (memo[targetSum - num]) {
      return [num, (targetSum - num)]
    } else {
      memo[num] = true
    }
  }
  return []
}
