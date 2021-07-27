function isMonotonic(array) {
  // Write your code here.
  let lastNum = array[0];
  let direction = "";

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[i - 1]) {
      direction = "increase";
    }
    if (array[i] <= array[i - 1]) {
      direction = "decrease";
    }
  }

  if (direction === "increase") {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= lastNum) {
        lastNum = array[i];
      } else {
        return false;
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] <= lastNum) {
        lastNum = array[i];
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])); //true

console.log(isMonotonic([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //true

console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11])); //true

console.log(isMonotonic([1, 2, 8, 3, 4, 9, 6, 7, 5])); //false
