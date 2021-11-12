var countConsistentStrings = function (allowed, words) {
  let allowedHash = {};
  for (let char of allowed) {
    if (!allowedHash[char]) allowedHash[char] = 1;
    else allowedHash[char]++;
  }

  let count = words.length;
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (allowedHash[word[i]]) continue;
      else {
        count--;
        break;
      }
    }
  }
  return count;
};
