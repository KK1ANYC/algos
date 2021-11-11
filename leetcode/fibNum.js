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

