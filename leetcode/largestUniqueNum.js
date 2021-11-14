//O(n) time and space

var largestUniqueNumber = function (nums) {
  let hash = {};
  for (let num of nums) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  let maxNum = -1;

  for (let key in hash) {
    if (hash[key] === 1 && +key > maxNum) {
      maxNum = +key;
    }
  }

  return maxNum;
};



/*
return largest num that occurs once
if none return -1

length max is 2000
only positive numbers up to 1000

loop through the array
and put all nums into a hash

create a maxNum variable equal to -1
loop through the hash
if hash[key] value is 1 and +key is greater than maxNum
maxNum = +key

return maxNum
*/
