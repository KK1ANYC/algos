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

//sortedFrequency
//unfinished
function sortedFrequency(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let left;
  let right;
  while (true) {
    if (arr[mid] > target) {
      end = mid;
      mid = Math.floor((start + end) / 2);
    } else if (arr[mid] < target) {
      start = mid;
      mid = Math.floor((start + end) / 2);
    } else {
      let lp = mid - 1;
      let rp = mid + 1;
      while (!left) {
        if (arr[lp] === target) lp--;
        else {
          left = lp + 1;
          break;
        }
      }
      while (!right) {
        if (arr[rp] === target) rp++;
        else {
          right = rp - 1;
          break;
        }
      }
      return right - left + 1;
    }
  }
}

// console.log(count([1, 1, 2, 2, 2, 2, 3], 2)); // 4
// console.log(count([1, 1, 2, 2, 2, 2, 3], 3)); // 1
// console.log(count([1, 1, 2, 2, 2, 2, 3], 1)); // 2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
// console.log(sortedFrequency([1,1,1,1,1,1,1,1,1,1,1 2, 2, 2, 2, 3], 4)); // -1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3,3,3,3,3,3,3,3,3,3], 4)); // -1

//findRotatedIndex
//unfinished
function findRotatedIndex(arr, target){
  // add whatever parameters you deem necessary - good luck!
  let start = 0
  let end = arr.length
  let mid = Math.floor((start + end) / 2)
  while (true) {
    if (arr[mid] === target) return mid
    if (arr[start] === target) return start
    if (arr[end] === target) return end
    if (end - start <= 1) break;
    if (arr[mid] < target && arr[end] > target) {
      start = mid
      mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] > target && arr[start] < target) {
      end = mid
      mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] < target && arr[start] < target) {
      end = mid
      mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] > target && arr[start] > target) {
      start = mid
      mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] < target) {
      start = mid
      mid = Math.floor((start + end) / 2)
    }
    if (arr[mid] > target) {
      end = mid
      mid = Math.floor((start + end) / 2)
    }
  }
  return -1
}


console.log(findRotatedIndex([3,4,1,2],4)) // 1
console.log(findRotatedIndex([6,7,8,9,1,2,3,4],8)) // 2
console.log(findRotatedIndex([6,7,8,9,1,2,3,4],3)) // 6
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 12)) // -1
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9],16)) // 5
console.log(findRotatedIndex([11,12,13,14,15,16,17,18,7,9],7)) // 8
