//O(n) linear time
var isPalindrome = function (x) {
  if (x < 0) return false;
  let str = String(x);
  let p1 = 0;
  let p2 = str.length - 1;
  while (p1 < p2) {
    if (str[p1] === str[p2]) {
      p1++;
      p2--;
    } else {
      return false;
    }
  }
  return true;
};

