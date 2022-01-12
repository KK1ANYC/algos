var peakIndexInMountainArray = function (arr) {
  let maxPeak = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      maxPeak = i;
    }
  }
  return maxPeak;
};
