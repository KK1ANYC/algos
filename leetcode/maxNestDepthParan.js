var maxDepth = function (s) {
  let max = 0;
  let count = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      arr.push(s[i]);
    } else if (s[i] === ")") {
      if (max < count) {
        max = count;
      }
      arr.pop();
      count--;
    }
  }
  return max;
};
