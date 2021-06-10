//runLengthEncoding

//solution 1
//O(n) time | O(n) space - where n is the length of the input string
function runLengthEncoding(string) {
  // Write your code here.
	const encodedStringChar = [];
	let currRunLength = 1;

	for (let i = 1; i < string.length; i++) {
		const currChar = string[i]
		const prevChar = string[i - 1]

		if (currChar !== prevChar || currRunLength === 9) {
			encodedStringChar.push(currRunLength.toString())
			encodedStringChar.push(prevChar)
			currRunLength = 0
		}
		currRunLength++
	}
	encodedStringChar.push(currRunLength.toString())
	encodedStringChar.push(string[string.length - 1])

	return encodedStringChar.join('')
}

