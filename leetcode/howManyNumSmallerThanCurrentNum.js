
//O(n^2)
var smallerNumbersThanCurrent = function (nums) {
  let arr = new Array();
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let k = 0; k < nums.length; k++) {
      if (nums[k] < nums[i]) {
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
};

/*
create an empty array
have nested for loops
the outer loop keep tracks of the count
the inner loop checks if the number is less and increments count
the outer loop then pushes count
*/
