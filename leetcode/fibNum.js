/*
caching the result of the fib
*/

var fib = function (n) {
  let result = 0;
  let hash = { 0: 0, 1: 1 };
  for (let i = 2; i <= n; i++) {
    hash[i] = hash[i - 2] + hash[i - 1];
  }
  return hash[n];
};


/*
O(2^n) Recurssive way
*/
var fib = function(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
};



/*
constraint n is less than 30
have base cases
n = 0, 0
n = 1, 1
else recursion
fib(n - 1) + fib(n - 2) these results will be added to call stack

n starts at 10
it will recursively call
fib(10 - 1) + fib(10 - 2)
10 is reduced to 1
fib( 2 - 1) n = 1, fib(2 - 2), n = 0
f
*/

