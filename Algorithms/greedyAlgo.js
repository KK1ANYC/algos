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
