
var maxLengthBetweenEqualCharacters = function (s) {
  let hash = {};
  let maxResult = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hash) {
      continue;
    } else {
      hash[s[i]] = i;
    }
  }

  console.log("hash", hash);

  for (let i = s.length - 1; i >= 0; i--) {
    if (hash[s[i]] >= 0) {
      let diff = i - hash[s[i]] - 1;
      if (diff > maxResult) {
        maxResult = diff;
      }
    }
  }
  return maxResult;
};
