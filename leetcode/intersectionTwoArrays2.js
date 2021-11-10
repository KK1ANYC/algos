var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  let i, j, k;
  i = j = k = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) i++;
    else if (nums1[i] > nums2[j]) j++;
    else {
      nums1[k++] = nums1[i++];
      j++;
    }
  }
  return nums1.slice(0, k);
};
