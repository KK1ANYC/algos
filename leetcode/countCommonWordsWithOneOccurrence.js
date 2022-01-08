var countWords = function (words1, words2) {
  let hash1 = {};
  let hash2 = {};
  let result = 0;

  for (let i = 0; i < words1.length; i++) {
    if (!hash1[words1[i]]) {
      hash1[words1[i]] = 1;
    } else hash1[words1[i]]++;
  }

  for (let i = 0; i < words2.length; i++) {
    if (!hash2[words2[i]]) {
      hash2[words2[i]] = 1;
    } else hash2[words2[i]]++;
  }

  for (let i = 0; i < words1.length; i++) {
    if (hash1[words1[i]] == 1 && hash2[words1[i]] == 1) {
      result++;
    }
  }

  return result;
};
