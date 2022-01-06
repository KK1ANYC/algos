var kthDistinct = function (arr, k) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === 1) {
      k--;
    }
    if (k == 0) {
      return arr[i];
    }
  }
  return "";
};
