function mergeOverlappingIntervals(arr) {
  arr = arr.sort((a, b) => a[0] - b[0]);
  console.log(arr);
  let result = [];
  let running = [];
  let i = 0;
  let j;
  while (i < arr.length) {
    if (result.length && arr[i][1] < result[result.length - 1][1]) break;
    if (arr[i + 1] === undefined) {
      result.push(arr[i]);
      break;
    }
    j = i;
    running.push(arr[j][0]);
    while (arr[j + 1] && arr[j + 1][0] <= arr[j][1]) {
      j++;
    }
    if (arr[j][1] > arr[i][1]) {
      running.push(arr[j][1]);
    } else {
      running.push(arr[i][1]);
    }
    result.push(running);
    running = [];
    i = j + 1;
  }
  return result;
}

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
); //[[1,2],[3,8],[9,10]]
console.log(
  mergeOverlappingIntervals([
    [1, 22],
    [-20, 30],
  ])
); //[ [-20, 30] ]
console.log(
  mergeOverlappingIntervals([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
); //[ [1, 10] ]
