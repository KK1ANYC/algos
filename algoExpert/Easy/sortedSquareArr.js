let array = [1, 2, 3, 5, 6, 8, 9];

//solution 1
function sortedSquaredArray(array) {
  let result = array.map((cv) => {
    return Math.pow(cv, 2);
  });
  return result.sort((a, b) => a - b);
}
