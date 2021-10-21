function isMonotonic(array) {
  let downTrend = true;
  let upTrend = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) downTrend = false;
    if (array[i] > array[i - 1]) upTrend = false;
  }
  return upTrend || downTrend;
}


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
