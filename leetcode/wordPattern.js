var wordPattern = function (pattern, s) {
  s = s.split(" ");
  let hash1 = {};
  let hash2 = {};

  if (pattern.length !== s.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!hash1[pattern[i]]) {
      hash1[pattern[i]] = s[i];
    }
    if (hash1[pattern[i]] !== s[i]) {
      return false;
    }
    if (!hash2[s[i]]) {
      hash2[s[i]] = pattern[i];
    }
    if (hash2[s[i]] !== pattern[i]) {
      return false;
    }
  }

  return true;
};

