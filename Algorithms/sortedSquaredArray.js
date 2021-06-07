//sorted squared array

//solution 1 O(n)
function sortedSquaredArray(array) {
  // Write your code here.
	let result = array.map((cv, idx) => {
		return cv * cv
	})
	return result.sort((a,b)=> a-b)
}

//solution 2 O(nlogn) time | O(n) space - where n is the length of input array
function sortedSquaredArray(array) {
  // Write your code here.
	let result = []
	for (let i = 0; i < array.length; i++) {
		result.push(array[i] * array[i])
	}
  return result.sort((a,b) => a-b);
}
