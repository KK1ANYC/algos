function isAnagram(s, t) {
  let memo = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!memo[s[i]]) {
      memo[s[i]] = 1;
    } else {
      memo[s[i]] += 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!memo[t[j]]) {
      return false;
    } else if (memo[t[j]] === 0) {
      return false;
    } else {
      memo[t[j]] -= 1;
    }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
