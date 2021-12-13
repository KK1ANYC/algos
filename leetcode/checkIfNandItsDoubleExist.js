var checkIfExist = function (arr) {
  const record = new Set();
  for (let i = 0; i < arr.length; i++) {
    let double = arr[i] * 2;
    let half = arr[i] / 2;
    if (record.has(double) || record.has(half)) {
      return true;
    }
    record.add(arr[i]);
  }
  return false;
};
