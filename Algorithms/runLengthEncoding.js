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

//solution 2
function runLengthEncoding(string) {
  // Write your code here.
	let result = ''
	let count = 0
	let placeholder = string[0]
	for (let i = 0; i < string.length + 1; i++) {
		if (count === 9) {
			result += `9${placeholder}`
			placeholder = string[i]
			count = 1
		} else {
			if (placeholder === string[i] && result.length - 2 !== '9') {
				placeholder = string[i]
				count++
			}
			if ( i !== 0 && placeholder !== string[i]) {
			result += `${count}${placeholder}`
			placeholder = string[i]
			count = 1
			}
		}
	}
	return result
}

