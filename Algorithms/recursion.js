//recursion

//reverse String
function reverse(string){
if (string.length === 0) return ""
let lastEl = string[string.length - 1]
let reverseString = reverse(string.slice(0, -1))
return lastEl += reverseString
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

//palindrome
function palindrome(string) {
 if (string.length === 1) return true
 if (string.length === 2) return string[0] === string[1]
 let firstEl = string[0]
 let lastEl = string[string.length - 1]
 if (firstEl !== lastEl) {
	 return false
 }
 let isPalindrome = palindrome(string.slice(1, -1))
 return isPalindrome
}

console.log(palindrome("tacocat")) // true

//isTrue
const isOdd = val => val % 2 !== 0;

function someRecursive(nums, callback){
  if (nums.length === 1 && !callback(nums[nums.length-1])) return false
  if (callback(nums[nums.length-1])) return true
  return someRecursive(nums.slice(0,-1), callback)
}

console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false

//Flatten Array

//example 1
function flatten(nestedArr){
let arr = []
for (let i = 0; i < nestedArr.length; i++) {
let el = nestedArr[i]
if (Array.isArray(el)) {
arr = arr.concat(flatten(el))
} else {
arr.push(el)
}
}
return arr
}

//example 2
function flatten(array){
let arr = []
if (array.length == 0) return arr;
if (Array.isArray(array[0])) {
arr = arr.concat(flatten(array[0]));
} else {
arr.push(array[0]);
}
arr = arr.concat(flatten(array.slice(1)))

return arr;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
