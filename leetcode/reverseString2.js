var reverseStr = function (s, k) {
  s = s.split("");
  let result = [];
  while (s.length) {
    if (s.length < k) {
      result.push(s.pop());
    }
    if (s.length < 2 * k && s.length >= k) {
      for (let h = k - 1; h >= 0; h--) {
        result.push(s[h]);
      }
      s.splice(0, k);
      while (s.length) {
        result.push(s.shift());
      }
    }
    if (s.length >= 2 * k) {
      for (let i = k - 1; i >= 0; i--) {
        result.push(s[i]);
      }
      s.splice(0, k);
      for (let j = 0; j < k; j++) {
        result.push(s[j]);
      }
      s.splice(0, k);
    }
  }
  return result.join("");
};
