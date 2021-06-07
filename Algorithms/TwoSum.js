/*
Two Number Sum

Find any two numbers in the array that sums up to the target sum
*/




//solution 1**
function twoSum(array, targetSum) {
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
      right--;
    }
  }
  return []
}

//solution 2*
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



//solution 3***
function twoNumberSum(array, targetSum) {
  // Write your code here.
	let memo = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (memo[targetSum - num]) {
      return [num, (targetSum - num)]
    } else {
      memo[num] = true
    }
  }
  return []
}

