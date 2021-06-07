/*
Two Number Sum

Find any two numbers in the array that sums up to the target sum
*/

//solution 1
function twoSum(array, target) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right++;
    }
  }
  return []
}

//solution 2
function twoNumberSum(array, targetSum) {
  // Write your code here.
	for (let i = 0; i < array.length - 1; i++) {
		const firstNum = array[i]
		for (let j = i + 1; j < array.length; j++) {
			const secondNum = array[j]
			if (firstNum + secondNum === targetSum) {
				return [firstNum, secondNum]
			}
		}
	}
	return []
}
