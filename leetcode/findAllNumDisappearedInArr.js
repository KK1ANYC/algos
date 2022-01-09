var findDisappearedNumbers = function (nums) {
  let result = new Array();
  let hash = {};

  for (let i = 1; i <= nums.length; i++) {
    hash[i] = 0;
  }

  for (let num of nums) {
    if (num in hash) {
      hash[num] = 1;
    }
  }

  for (let key in hash) {
    if (!hash[key]) result.push(key);
  }

  return result;
};

/*
create result
create a hash table
loop over length of nums
input all number in hash table as 0
loop over nums and if in hash table, hash[num] = 1
loop over hash table and push all 0 values into result
*/
