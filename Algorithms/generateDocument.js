//generateDocument

//solution 1
//O(m * (n + m)) time | O(n) space - where n is the number of characters and m is the length of the document
function generateDocument(characters, document) {
  // Write your code here.
	let memo = {};
	for (let i = 0; i < characters.length; i++) {
		if (memo[characters[i]]) {
			memo[characters[i]]++
		} else {
			memo[characters[i]] = 1
		}
	}
	for (let i = 0; i < document.length; i++) {
		if (memo[document[i]] && memo[document[i]] >= 1) {
			memo[document[i]]--
		} else {
			return false
		}
	}
  return true;
}
