//binary search

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((end + start) / 2);
  while (end - start > 1) {
    if (nums[mid] === target) {
      return mid;
    } else if (nums[start] === target) {
      return start;
    } else if (nums[end] === target) {
      return end;
    }
    if (target > nums[mid]) {
      start = mid;
      mid = Math.floor((end + start) / 2);
    }
    if (target < nums[mid]) {
      end = mid;
      mid = Math.floor((end + start) / 2);
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));

//naive search 1
function stringSearch(string, target) {
  let totalCount = 0;
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < target.length; j++) {
      let cj = target[j];
      if (cj !== string[i + j]) {
        count = 0;
        break;
      }
      if (cj === string[i + j]) {
        count++;
      }
      if (count === target.length) {
        totalCount++;
        count = 0;
      }
    }
  }
  return totalCount;
}

// naive search 2
function stringSearch(string, target) {
	let totalCount = 0;
	for (let i = 0; i < string.length; i++) {
	  for (let j = 0; j < target.length; j++) {
	    let cj = target[j];
	    if (cj !== string[i + j]) break;
	    if (j === target.length - 1) totalCount++;
	  }
	}
	return totalCount;
      }
