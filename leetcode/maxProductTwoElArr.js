
//O(n log n)
var maxProduct = function (nums) {
  const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      let pivotIdx = pivot(arr, left, right);
      quickSort(arr, left, pivotIdx - 1);
      quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
  };

  const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, i, j) => {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
  };

  nums = quickSort(nums);

  let num1 = nums[nums.length - 1];
  let num2 = nums[nums.length - 2];

  return (num1 - 1) * (num2 - 1);
};
