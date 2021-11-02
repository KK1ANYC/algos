function merge(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < m || p2 < n) {
    if (p1 >= m && p2 < n) {
      nums1.pop();
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
      p1++;
    } else if (nums2[p2] !== undefined && nums1[p1] > nums2[p2]) {
      nums1.pop();
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
      m++;
    } else if (
      nums2[p2] !== undefined &&
      nums1[p1] <= nums2[p2] &&
      nums1[p1 + 1] > nums2[p2]
    ) {
      nums1.pop();
      nums1.splice(p1 + 1, 0, nums2[p2]);
      p2++;
      p1++;
      m++;
    } else {
      p1++;
    }
  }
  console.log(nums1);
}


var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let nums1Copy = [];

  for (let i = 0; i < m; i++) {
    nums1Copy.push(nums1[i]);
  }

  for (let j = 0; j < m + n; j++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[j] = nums1Copy[p1++];
    } else {
      nums1[j] = nums2[p2++];
    }
  }
  return nums1;
};
