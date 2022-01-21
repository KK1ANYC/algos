//O(n) time complexity
var characterReplacement = function (s, k) {
  let res = 0;
  let left = 0;
  let right = 0;
  let hash = {};
  let maxVal = 0;
  while (right < s.length) {
    if (!hash[s[right]]) {
      hash[s[right]] = 1;
    } else {
      hash[s[right]]++;
    }
    maxVal = Math.max(maxVal, hash[s[right]]);
    let length = right - left + 1;
    let replace = length - maxVal;
    if (replace > k) {
      hash[s[left]]--;
      left++;
    }
    length = right - left + 1;
    res = Math.max(res, length);
    right++;
  }
  return res;
};

