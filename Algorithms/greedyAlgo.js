//greedy Algo
//min waiting time
function minimumWaitingTime(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let runningSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += runningSum;
    runningSum += arr[i];
  }
  return sum;
}

//class photo
//O(nlog(n)) time | O(1) space - where n is the number of students
function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  let backRow = [];
  let frontRow = [];
  if (blueShirtHeights[0] > redShirtHeights[0]) {
    backRow = blueShirtHeights;
    frontRow = redShirtHeights;
  } else {
    backRow = redShirtHeights;
    frontRow = blueShirtHeights;
  }
  for (let i = 0; i < backRow.length; i++) {
    if (backRow[i] <= frontRow[i]) {
      return false;
    }
  }
  return true;
}

//tandem bicycle

//O(nlog(n)) time | O(1) space - where n is the number of tandem bicycles

function tandemBicycle(red, blue, fastest) {
  if (fastest) {
    red.sort((a, b) => b - a);
    blue.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while (i < red.length) {
      if (red[i] > blue[i]) sum += red[i];
      else sum += blue[i];
      i++;
    }
    return sum;
  } else {
    red.sort((a, b) => a - b);
    blue.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while (i < red.length) {
      if (red[i] > blue[i]) sum += red[i];
      else sum += blue[i];
      i++;
    }
    return sum;
  }
}
