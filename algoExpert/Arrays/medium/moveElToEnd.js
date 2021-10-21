function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[right] === toMove) {
      right--;
    }
    if (array[left] !== toMove) {
      left++;
    } else {
      let temp = array[right];
      array[right] = array[left];
      array[left] = temp;
    }
  }
  return array;
}
