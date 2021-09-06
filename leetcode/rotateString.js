//Example 1
var rotateString = function (s, goal) {
  if (goal.length < s.length) return false;
  for (let i = 0; i < goal.length; i++) {
    let center = 0;
    let leftS = 0;
    let rightS = 0;
    let leftG = i !== 0 ? i - 1 : goal.length - 1;
    let rightG = i !== goal.length - 1 ? i + 1 : 0;
    for (let j = 0; j < s.length; j++) {
      leftS = j !== 0 ? j - 1 : s.length - 1;
      rightS = j !== s.length - 1 ? j + 1 : 0;
      if (s[j] === goal[i]) {
        if (s[leftS] === goal[leftG] && s[rightS] === goal[rightG]) {
          center = j;
        }
      }
    }
    leftS = center - 1 >= 0 ? center - 1 : s.length - 1;
    rightS = center + 1 < s.length ? center + 1 : 0;

    if (s[center] === goal[i]) {
      if (s[leftS] !== goal[leftG]) return false;
      if (s[rightS] !== goal[rightG]) return false;
    } else {
      return false;
    }
  }
  return true;
};

// Example 2
var rotateString = function (str, goal) {
  let rotatedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === goal[0] && str.slice(i) === goal.slice(0, str.length - i)) {
      rotatedStr += str.slice(i);
      rotatedStr += str.slice(0, i);
      break;
    }
  }
  if (rotatedStr === goal) return true;
  else return false;
};

var rotateString = function (str, goal) {
  let count = str.length;
  while (count) {
    let temp = str[0];
    str = str.slice(1);
    str += temp;
    count--;
    if (str === goal) return true;
  }
  return false;
};
