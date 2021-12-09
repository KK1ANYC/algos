var diStringMatch = function (s) {
  let low = 0;
  let high = s.length;
  let i = 0;
  let perm = [];
  while (low <= high) {
    if (s[i] == "I") {
      perm.push(low);
      low++;
    } else {
      perm.push(high);
      high--;
    }
    i++;
  }
  return perm;
};
