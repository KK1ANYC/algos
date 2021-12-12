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


