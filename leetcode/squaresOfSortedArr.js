function sortedSquares(nums) {
let left = 0
let right = 0
let result = [];
if (nums.length === 1) return [Math.pow(nums[0], 2)]
for (let i = 0; i < nums.length; i++) {
if (nums[i] >= 0) {
if (nums[i - 1] === undefined) {
left = i
right = i + 1
break;
} else if (nums[i + 1] === undefined) {
left = i - 1
right = i
break;
} else {
left = i - 1
right = i
break;
}
} else if (i === nums.length - 1) {
left = i
right = i + 1
}
}
while (true) {
if (left < 0 && right >= nums.length) break;
if ((left >= 0 && Math.abs(nums[left]) < Math.abs(nums[right])) || nums[right] === undefined) {
result.push(Math.pow(Math.abs(nums[left]), 2))
left--
}
else {
result.push(Math.pow(Math.abs(nums[right]), 2))
right++
}
}
return result
};
