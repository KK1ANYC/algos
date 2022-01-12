/*
given an array on integers, return the sum of unique int values
neg int value
length of arr 10^4

steps
explain approach
Reiteerate problem
Examples
Approach
Code
Test
Optimize

worst case scenario we would have to loop throught the entire array
*/

function uniqueSum(arr) {
  const hash = {};
  let sum = 0;

  if (!arr.length) {
    return sum;
  }

  for (let num of arr) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }

  for (let key in hash) {
    if (hash[key] == 1) {
      sum += Number(key);
    }
  }

  return sum;
}

console.log(uniqueSum([1, 2, 3, 4, 4, 4, 2]));
console.log(uniqueSum([1, 2, 3, 4]));
console.log(uniqueSum([1, 1, 2, 2, 3, 3]));

// [1,2,3,4,4,4,2] 1 + 3 = 4
// [1,2,3,4] 1 + 2 + 3 + 4 = 10
// [1,1,2,2,3,3] 0
// [2,5,1,2,3,7,8,5,8,7] 4
//[1,1,1,2,2,2,3] 3


/*
given n, job is to return an arr w/ size of n with all unique int value, whose sum is 0

steps
explain approach
Reiteerate problem
Examples
Approach
Code
Test
Optimize

n = 5
[1,2,3,4,-10]
n = 4
[1, -1, 2, -2]
n = 2
[1, -1, 0]
n = 3
[1, -3, 2]
*/

function zeroSumArr (n) {

  let result = new Array()
  let N = Math.floor(n/2)
  for (let i = 1; i <= N; i++) {
    result.push(i)
    result.push(-i)
  }
  if (n % 2 !== 0) {
    result.push(0)
  }

  return result
}

console.log(zeroSumArr(4))
console.log(zeroSumArr(5))
console.log(zeroSumArr(2))


// n = 5 [-50,-25,-24, 1 , 98]

// n=4 [-40, 10, 5, 25]

// n=3 [-1000, 499, 501]


/*
Explain approach concisely
reiterate the approach
Explain the Big O

Have to call the function
*/


/*
know about attentive
*/
