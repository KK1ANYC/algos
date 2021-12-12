var shortestToChar = function (s, c) {
  let result = [];
  let indexC = [];
  let indexCount = 0;
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === c) {
      indexC.push(i);
    }
  }

  while (count < s.length) {
    let diff1 = Math.abs(count - indexC[indexCount]);
    let diff2 = Math.abs(count - indexC[indexCount + 1]);
    if (diff1 < diff2) {
      result.push(diff1);
    } else if (diff1 > diff2) {
      result.push(diff2);
      indexCount++;
    } else if (diff1 === diff2) {
      result.push(diff2);
    } else {
      result.push(diff1);
    }
    count++;
  }
  return result;
};


//Altus
var shortestToChar = function (str, c) {
  let charIdx = [];
  let variable = -Infinity;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) variable = i;
    charIdx.push(Math.abs(variable - i));
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === c) variable = i;
    charIdx[i] = Math.min(Math.abs(variable - i), charIdx[i]);
  }
  return charIdx;
};
