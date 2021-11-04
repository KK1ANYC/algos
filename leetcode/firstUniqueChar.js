// time complex O(n)
//linear time linear space

var firstUniqChar = function (s) {
  const uniqSet = new Set(); //
  let firstKey = undefined;
  for (const char of s) {
    if (!uniqSet[char]) uniqSet[char] = 1;
    else uniqSet[char]++;
  }

  for (const key in uniqSet) {
    if (uniqSet[key] === 1) {
      firstKey = key;
      break;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === firstKey) return i;
  }

  return -1;
};

