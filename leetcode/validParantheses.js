var isValid = function (s) {
  let hash = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let arr = new Array();

  for (let char of s) {
    let lastEl = arr[arr.length - 1];
    if (hash[char] == lastEl && lastEl !== undefined) {
      arr.pop();
    } else {
      arr.push(char);
    }
  }

  return arr.length == 0 ? true : false;
};
