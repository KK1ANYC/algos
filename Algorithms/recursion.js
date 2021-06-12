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

}

console.log(palindrome("tacocat")) // true
