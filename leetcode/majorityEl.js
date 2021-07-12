function majorityElement(nums) {
	let half = nums.length/2
	nums.sort((a,b) => a-b)
	let count = 1
	let num = nums[0]
	for (let i = 1; i < nums.length; i++) {
	  if (count > half) break
	  if (nums[i] === num) count++
	  else {
	    num = nums[i]
	    count = 1
	  }
	}
	return num
      };
      // function majorityElement(nums) {
      //   let memo = {}
      //   let half = nums.length/2
      //   for (let i of nums) {
      //     !memo[i] ? memo[i] = 1 : memo[i]++
      //   }
      //   for (let key in memo) {
      //     if (memo[key] > half) return key
      //   }
      // };

      // console.log(majorityElement([3,2,3])) //3
      // console.log(majorityElement([2,2,1,1,1,2,2])) //2
      console.log(majorityElement([32,41,21,29,7,53,97,76,71,53,53,53,72,53,53,14,22,53,67,53,53,53,54,98,53,46,53,53,62,53,76,20,60,53,31,53,53,53,95,27,53,53,53,53,36,59,40,53,53,64,53,53,53,21,53,51,53,53,2,53,53,53,53,53,50,53,53,53,23,88,3,53,61,19,53,68,53,35,42,53,53,48,34,54,53,75,53,53,50,44,92,41,71,53,53,82,53,53,14,53])) //53
