
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let nums1Copy = [];

  for (let i = 0; i < m; i++) {
    nums1Copy.push(nums1[i]);
  }
  let j = 0;

  for (let j = 0; j < m + n; j++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      // to ensure you dont step out of bounds
      // if p2 is greater than or = to end we'll continue to replace our vals in nums1
      // we also want to make sure that p1 is still less than m and that the number vals we are comparing are less
      nums1[j] = nums1Copy[p1++];
    } else {
      nums1[j] = nums2[p2++];
    }
  }
  return nums1;
};

//O(n) time and O(m + n) space
var merge = function (nums1, m, nums2, n) {
  let write = 0;
  let read1 = 0;
  let read2 = 0;
  let nums1Copy = [];
  for (let i = 0; i < m; i++) {
    nums1Copy.push(nums1[i]);
  }

  while (write < m + n) {
    if ((read1 < m && nums1Copy[read1] < nums2[read2]) || read2 >= n) {
      nums1[write] = nums1Copy[read1];
      read1++;
    } else {
      nums1[write] = nums2[read2];
      read2++;
    }

    write++;
  }
  return nums1;
};


