var countSegments = function (s) {
  let arr = new Array();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      count++;
    } else if (s[i] == " " && count > 0) {
      arr.push(count);
      count = 0;
    }
  }
  if (count > 0) arr.push(count);
  return arr.length;
};
