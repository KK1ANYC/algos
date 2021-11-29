var mySqrt = function (x) {
  let l = 0;
  let r = x;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return r;
};
