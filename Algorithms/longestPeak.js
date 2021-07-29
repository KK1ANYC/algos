//solution 1
function longestPeak(array) {
  // Write your code here.
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }
  return longestPeakLength;
}

//solution 2
function longestPeak(arr) {
  let big = 0;
  let up = 1;
  let down = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && down === 0) up++; //count going up
    if (arr[i] === arr[i - 1] && down === 0) up = 1; //broke, but there was no decreasing values
    if (arr[i] < arr[i - 1] && up > 1) down++; //count going down
    if (arr[i + 1] === undefined && down > 0) {
      //the break was end of array
      if (up + down > big) big = up + down;
    }
    if (arr[i] <= arr[i + 1] && down > 0) {
      //the break happened now need to set big and reset values
      if (up + down > big) big = up + down;
      up = 1;
      down = 0;
    }
  }
  return big;
}
