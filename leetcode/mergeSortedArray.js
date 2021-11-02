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


//doesn't work but have to fix
var merge = function (nums1, m, nums2, n) {
    let p1 = 0
    let p2 = 0
    while (p2 < n) {
      nums2.sort((a,b) => a-b)
      if (nums1[p1] > nums2[p2]) {
        let temp = nums2[p2]
        nums2[p2] = nums1[p1]
        nums1[p1] = temp
        p1++
        console.log("hit nums1 > nums2")
      }
      if (nums1[p1] === 0) {
        let temp = nums2[p2]
        nums2[p2] = nums1[p1]
        nums1[p1] = temp
        p2++
        console.log("hit nums1 == 0")
      }
      if (nums1[p1] < nums2[p2]) {
        p1++
        console.log("hit nums1 < nums2")
      }
      if (nums1[p1] === nums2[p2]) {
        p1++
        console.log("hit equal")
      }
      console.log("nums1", nums1, "p1", p1)
      console.log("nums2", nums2, "p2", p2)
    }
    return nums1
};
