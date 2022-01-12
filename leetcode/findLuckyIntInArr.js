var findLucky = function (arr) {
  let hash = {};
  for (let num of arr) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  let luckyNum = -1;
  for (let key in hash) {
    if (hash[key] == key && luckyNum < hash[key]) {
      luckyNum = hash[key];
    }
  }

  return luckyNum;
};

/*
create a hash table with freq
loop over arr and input freq in hash table
create a max variable set to -1
loop through hash table
find the int where key === value and check if grater than max
*/
