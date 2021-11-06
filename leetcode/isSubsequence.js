// turn into an array and use indexOf, takes longer
var isSubsequence = function (s, t) {
  s = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (s[0] === t[i]) {
      s.shift();
    }
  }
  if (s.length > 0) return false;
  return true;
};

// two pointers solution, optimal
var isSubsequence = function (s, t) {
  let p1 = 0
  for (let i = 0; i < t.length; i++) {
    if (s[p1] === t[i]) {
      p1++
    }
  }
  if (p1 < s.length) return false;
  return true;
};

console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false

/*
split s into an array
loop through t and check if the s[0] === t[i]
if it does, shift and continue until length is 0
return true if length is 0 else false
*/
