var containsNearbyDuplicate = function (nums, k) {
  let result = false;
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      let diff = Math.abs(i - hash[nums[i]]);
      if (diff <= k) {
        result = true;
      }
      hash[nums[i]] = i;
    } else {
      hash[nums[i]] = i;
    }
  }
  return result;
};

/*
let result = false
create a hash
for loop over nums
input the key nums[i] and value i in the hash
check if the nums[i] is already in hash
if it is, check if abs(i - hash[nums[i]]) <= k
if it is result = true

return result
*/
