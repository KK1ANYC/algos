
//example 1
//O(2^n) time | O(n) space
function getNthFib(n) {
  // Write your code here.
  if (n === 1) return 0;
  if (n <= 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

//example 2
function getNthFib(n) {
  let memo = { 1: 0, 2: 1 };
  function fib(n) {
    if (n in memo) return memo[n];
    else {
      memo[n] = getNthFib(n - 1) + getNthFib(n - 2);
      return memo[n];
    }
  }
  return fib(n);
}

