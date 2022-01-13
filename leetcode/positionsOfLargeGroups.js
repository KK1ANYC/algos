var largeGroupPositions = function (s) {
  let arr = new Array();

  let left = 0;
  let right = 0;

  while (right <= s.length) {
    if (s[left] !== s[right]) {
      let diff = right - left;
      if (diff >= 3) {
        arr.push([left, right - 1]);
      }
      left = right;
    }
    right++;
  }
  console.log("arr", arr);

  arr.sort((a, b) => {
    a[0] - b[0];
  });

  return arr;
};
