//Easy

https://leetcode.com/problems/reverse-linked-list/

https://leetcode.com/problems/binary-tree-paths/

https://leetcode.com/problems/first-unique-character-in-a-string/
// O(n) time complexity
var firstUniqChar = function (s) {
  let hash = {};
  let result = -1;

  for (char of s) {
    if (!hash[char]) hash[char] = 1;
    else hash[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == 1) {
      result = i;
      break;
    }
  }
  return result;
};

https://leetcode.com/problems/valid-anagram/
//O(n) time complexity
var isAnagram = function(s, t) {
    let hash = {}
    let result = true

    if (s.length !== t.length) return false

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) hash[s[i]] = 1
        else hash[s[i]]++
    }

    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]]) hash[t[i]]--
        else {
            return false
        }
    }

    return result
};

https://leetcode.com/problems/palindrome-number/
// O(n) time complexity
function isPalindrome(x) {
    if (x < 0) return false

    x = x.toString()

    let left = 0
    let right = x.length - 1

    while (left <= right) {
        if (x[left] !== x[right]) return false
        left++
        right--
    }

    return true
}
