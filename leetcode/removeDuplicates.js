

function removeDuplicates(nums) {
  let count = 0
    while(count < nums.length - 1) {
      // console.log("running")
      // console.log(nums.length)
      // console.log(count)
      if (nums[count] === nums[count+1]) {
        nums.splice(count, 1)
        count--
      }
      count++
    }
    return nums
}

console.log(removeDuplicates([1,1,2])) // [1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // [0,1,2,3,4,_,_,_,_,_]
