let array = [1, 2, 3, 5, 6, 8, 9];

//solution 1 - using sort
function sortedSquaredArray(array) {
  let result = array.map((cv) => {
    return Math.pow(cv, 2);
  });
  return result.sort((a, b) => a - b);
}

//solution 2 - w/o sort
function sortedSquaredArray(array) {
  // Write your code here.
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}
