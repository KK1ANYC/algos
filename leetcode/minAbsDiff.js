var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i + 1];
    let secondNum = arr[i];
    let diff = firstNum - secondNum;
    if (diff < min) {
      min = diff;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i + 1];
    let secondNum = arr[i];
    let diff = firstNum - secondNum;
    if (diff === min) {
      result.push([secondNum, firstNum]);
    }
  }
  return result;
};

console.log(minimumAbsDifference([4, 2, 1, 3])); //[[1,2],[2,3],[3,4]]
// console.log(minimumAbsDifference([1,3,6,10,15])) //[[1,3]]
// console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27])) //[[-14,-10],[19,23],[23,27]]
