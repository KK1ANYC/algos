//isPalindrome

//solution 1 O(n) time | O(n) space
function isPalindrome(string) {
  // Write your code here.
	if (string.length === 1) {
		return true
	}
	if (string.length === 2 && string[0] === string[string.length - 1]) {
		return true
	}
	if (string.length > 2) {
		if (string[0] === string[string.length - 1]) {
			let sliceStr = string.slice(1, string.length - 1)
			return isPalindrome(sliceStr)
		} else {
			return false
		}
	}
	return false
}
