//is Valid subsequence

//solution 1
function isValidSubsequence(array, sequence) {
  // Write your code here.
	let result = [];
	let memo = {};
	for (let k = 0; k < sequence.length; k++) {
		memo[sequence[k]] = true
	}
	for (let i = 0; i < array.length; i++) {
		if (memo[[array[i]]]) {
			result.push(array[i])
		}
	}
	for (let j = 0; j < sequence.length; j++) {
		if (result[j] !== sequence[j]) {
			return false
		}
	}
	return true
}

//solution 2 O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrIdx = 0 //points to sequence starter
	let seqIdx = 0
	while (arrIdx < array.length && seqIdx < sequence.length) {
		if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
		arrIdx++;
	}
	return seqIdx === sequence.length
}
