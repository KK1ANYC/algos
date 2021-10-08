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
