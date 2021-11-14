//O(n) time and space
var missingNumber = function (nums) {
  let hash = {};
  for (let num of nums) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  let totalNums = nums.length;

  while (totalNums >= 0) {
    if (hash[totalNums]) {
      totalNums--;
    } else {
      return totalNums;
    }
  }
};



/*
return the only number missing from range
n = nums.length
ranges from 0 to n, no negatives

let totalNums = nums.length

create a hash
loop through nums and input nums[i] in hash

while totalNums >= 0
check if hash[totalNums] is true
else return totalNums

*/
