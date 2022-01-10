var longestPalindrome = function (s) {
  let hash = {};
  let single = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = 1;
    else hash[s[i]]++;
  }

  for (let key in hash) {
    if (hash[key] % 2 === 0) {
      result += hash[key];
    } else {
      if (single == 0) {
        result++;
        single++;
      }
      if (hash[key] >= 3) {
        if (single == 0) {
          result += hash[key];
          single++;
        } else {
          result += hash[key] - 1;
        }
      }
    }
  }
  return result;
};
