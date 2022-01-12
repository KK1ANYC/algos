var validMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length < 3) {
    return false;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      start = i;
    } else if (arr[i] == arr[i - 1]) {
      return false;
    } else {
      break;
    }
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      end = i;
    } else if (arr[i] == arr[i + 1]) {
      return false;
    } else {
      break;
    }
  }

  if (start !== end || start == arr.length - 1 || end == 0) {
    return false;
  } else {
    return true;
  }
};
