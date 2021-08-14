let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left !== right) {
    if (array[left] + array[right] === targetSum) {
      return [array[left], array[right]]
    }
    if (array[left] + array[right] < targetSum) {
      left++;
    }
    if (array[left] + array[right] > targetSum) {
      right--;
    }
  }
  return []
}

console.log(twoNumberSum(array, targetSum))
