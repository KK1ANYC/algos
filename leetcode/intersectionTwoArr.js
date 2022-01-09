var intersection = function (nums1, nums2) {
  let hash = {};
  let duplicateHash = {};
  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!hash[nums1[i]]) {
      hash[nums1[i]] = 1;
    } else {
      hash[nums1[i]]++;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] in hash) {
      if (hash[nums2[i]] == 0) {
        continue;
      } else {
        hash[nums2[i]]--;
        if (!duplicateHash[nums2[i]]) {
          duplicateHash[nums2[i]] = 1;
          arr.push(nums2[i]);
        }
      }
    }
  }
  return arr;
};
