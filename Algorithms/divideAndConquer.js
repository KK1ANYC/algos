//divide and conquer

function countZeroes(arr) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  if (arr[0] === 0 && arr[arr.length - 1] === 0) return arr.length;
  if (arr[0] !== 0 && arr[arr.length - 1] !== 0) return 0;
  else {
    while (true) {
      if (arr[mid] === 0 && arr[mid - 1] === 1) {
        return arr.length - mid;
      }
      if (arr[mid] === 1 && arr[mid + 1] === 0) {
        return arr.length - (mid + 1);
      }
      if (arr[mid] === 0) {
        end = mid;
        mid = Math.floor((start + end) / 2);
      } else {
        start = mid;
        mid = Math.floor((start + end) / 2);
      }
    }
  }
}

//1 comes before 0
//all 0 or no 0

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
