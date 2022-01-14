
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
