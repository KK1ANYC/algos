var isSubsequence = function (s, t) {
  s = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (s[0] === t[i]) {
      s.shift();
    }
  }
  if (s.length > 0) return false;
  return true;
};


