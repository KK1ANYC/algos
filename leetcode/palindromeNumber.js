//O(n) linear time
var isPalindrome = function (x) {
  if (x < 0) return false;
  let str = String(x);
  let p1 = 0;
  let p2 = str.length - 1;
  while (p1 < p2) {
    if (str[p1] === str[p2]) {
      p1++;
      p2--;
    } else {
      return false;
    }
  }
  return true;
};


function isPalindrome(x) {
  x = x.toString();
  if (x.length === 1) {
    return true;
  }
  //if the string length is 2 it has to equal each other to be a palindrome
  if (x.length === 2) {
    return string[0] === string[1];
  }
  //firstLetter variable to equal first letter
  let firstLetter = x[0];
  //lastLetter variable to equal the last letter
  let lastLetter = x.slice(-1);
  //if the first and last letter does not equal, return false
  if (firstLetter !== lastLetter) {
    return false;
  }
  //recursion happens when you slice the string from the first character to the last character
  let remainingStringIsPalindrome = isPalindrome(x.slice(1, -1));
  return remainingStringIsPalindrome;
}


function isPalindrome(num) {
  if (num < 0) return false;
  let rev = 0;
  let n = num;
  while (n) {
    let last = n % 10;
    rev = rev * 10 + last;
    n = Math.floor(n / 10);
    console.log(rev, n);
  }
  return rev === num;
}

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10)); //false
