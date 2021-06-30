//bubble sort
//example 1
//Best: O(n) time | O(1) space
//Average: O(n^2) time | O(1) space
//Worst: O(n^2) time | O(1) space

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//example 2
function bubbleSort(array) {
  for (let i = array.length; i > 0; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//example 3
function bubbleSort(array) {
  var noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

console.log(bubbleSort([15, 10, 3, 1, 4, 7, 5]));

//selection sort

//example 1
function selectionSort(arr) {
  let smallest;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    smallest = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < smallest) {
        index = j;
        smallest = arr[j];
      }
    }
    if (smallest < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}

//example 2
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([15, 10, 3, 1, 4, 7, 5]));

//example 3
//Best: O(n^2) time | O(1) space
//Average: O(n^2) time | O(1) space
//Worst: O(n^2) time | O(1) space
function selectionSort(array) {
  // Write your code here.
  let smallest = Infinity;
  let smallestIdx = 0;
  let swap = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        smallestIdx = j;
        swap = true;
      }
    }
    if (swap) {
      let temp = array[smallestIdx];
      array[smallestIdx] = array[i];
      array[i] = temp;
      smallest = Infinity;
      swap = false;
    } else {
      break;
    }
  }
  return array;
}

//Insertion Sort
//example 1
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

//example 2
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          arr.splice(j, 0, arr[i]);
          arr.splice(i + 1, 1);
        }
      }
    }
  }
  return arr;
}

//example 3
//Best: O(n) time | O(1) space
//Average: O(n^2) time | O(1) space
//Worst: O(n^2) time | O(1) space

function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

console.log(insertionSort([15, 10, 3, 1, 4, 7, 5]));

//Merge sort
//example 1
const merge = (arr1, arr2) => {
  // YOUR CODE HERE
  let finalArr = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length || p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      finalArr.push(arr1[p1]);
      p1++;
    } else {
      finalArr.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 > p2) {
    finalArr = [...finalArr, ...arr1.slice(p1)];
  }
  if (p2 > p1) {
    finalArr = [...finalArr, ...arr2.slice(p2)];
  }
  return finalArr;
};

//example 2
const merge = ([arr1, arr2]) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      result.push(arr2[i], arr1[i]);
    } else {
      result.push(arr1[i], arr2[i]);
    }
  }
  console.log(result); //returns [1, 8, 4, 6, 3, 5, 2, 7]
  return result;
};

//example 3
const split = (wholeArr) => {
  // YOUR CODE HERE
  let first = [];
  let second = [];
  first = wholeArr.slice(0, Math.ceil(wholeArr.length / 2));
  second = wholeArr.slice(Math.ceil(wholeArr.length / 2));
  return [first, second];
};

const merge = (arr1, arr2) => {
  // YOUR CODE HERE
  let finalArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      finalArr.push(arr1[0]);
      arr1.shift();
    } else {
      finalArr.push(arr2[0]);
      arr2.shift();
    }
  }
  if (arr1.length > 0 && arr2.length === 0) {
    finalArr = [...finalArr, ...arr1];
  }
  if (arr2.length > 0 && arr1.length === 0) {
    finalArr = [...finalArr, ...arr2];
  }
  return finalArr;
};

const mergeSort = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  let splitArr = split(arr);
  let leftArr = mergeSort(splitArr[0]);
  let rightArr = mergeSort(splitArr[1]);
  return merge(leftArr, rightArr);
};

console.log(merge([1, 3, 6, 8], [2, 4, 5, 7, 9]));

//quickSort
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIndex = 0;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

console.log(pivot([5, 7, 4, 6, 8, 2, 1, 3])); // 4
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//radix sort
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num, i) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(num) {
  let maxDigits = 0;
  for (let i = 0; i < num.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(num[i]));
  }
  return maxDigits;
}

const radixSort = (arr) => {
  let maxD = 0;
  maxD = mostDigits(arr);
  let radixArr = [[], [], [], [], [], [], [], [], [], []];
  for (let i = 0; i < maxD; i++) {
    for (let j = 0; j < arr.length; j++) {
      let curr = arr[j];
      if (getDigit(curr, i)) radixArr[getDigit(curr, i)].push(curr);
      else {
        radixArr[0].push(curr);
      }
    }
    arr = [].concat(...radixArr);
  }
  return arr;
};

console.log(radixSort([56, 345, 43, 6, 8, 200])); // 4
