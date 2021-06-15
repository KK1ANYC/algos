//bubble sort
//example 1
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

console.log(insertionSort([15, 10, 3, 1, 4, 7, 5]));

//Merge sort
//example 1
function merge(arr1, arr2) {
  let short;
  let long;
  arr1.length > arr2.length ? (short = arr2) : (short = arr1);
  arr1.length > arr2.length ? (long = arr1) : (long = arr2);
  let p = 0;
  let result = [];
  while (p < short.length) {
    if (arr1[p] < arr2[p]) {
      result.push(arr1[p]);
      result.push(arr2[p]);
      p++;
    } else {
      result.push(arr2[p]);
      result.push(arr1[p]);
      p++;
    }
  }
  let remainder = long.slice(p);
  return [...result, ...remainder];
}

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
  if (wholeArr.length % 2 === 0) {
    first = wholeArr.slice(0, wholeArr.length / 2);
    second = wholeArr.slice(wholeArr.length / 2);
  } else {
    first = wholeArr.slice(0, Math.ceil(wholeArr.length / 2));
    second = wholeArr.slice(Math.ceil(wholeArr.length / 2));
  }
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
