var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let res = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[[i]]);
    res = Math.max(res, i - left + 1);
  }
  return res;
};
