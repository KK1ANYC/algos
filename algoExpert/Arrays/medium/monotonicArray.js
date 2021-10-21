function isMonotonic(array) {
  let downTrend = true;
  let upTrend = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) downTrend = false;
    if (array[i] > array[i - 1]) upTrend = false;
  }
  return upTrend || downTrend;
}
