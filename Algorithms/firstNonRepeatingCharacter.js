//firstNonRepeatingCharacter

//solution 1
//O(n + m) time | O(m) space
function firstNonRepeatingCharacter(string) {
  // Write your code here.
	let memo = {};
	let char = false
	for (let i of string) {
		!memo[i] ? memo[i] = 1 : memo[i]++
	}
	for (let key in memo) {
		if (memo[key] === 1) {
			char = key
			break
		}
	}
	if (char) {
		for (let i = 0; i < string.length; i++) {
			if (string[i] === char) {
				return i
			}
		}
	} else {
		return -1
	}
}
