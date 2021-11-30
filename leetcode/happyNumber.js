var isHappy = function (n) {
  const hash = {};
  let numStr = n.toString();
  let i = 0;
  let sum = n;

  while (true) {
    if (hash[numStr] !== undefined) return false;
    else if (hash[numStr] === undefined) hash[numStr] = Number(numStr);
    if (sum === 1) return true;
    sum = 0;

    for (let i = 0; i < numStr.length; i++) {
      sum += Number(numStr[i]) * Number(numStr[i]);
    }
    numStr = sum.toString();
  }
};
