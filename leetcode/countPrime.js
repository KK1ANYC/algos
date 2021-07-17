var countPrimes = function (n) {
  if (n <= 2) return 0;

  function isPrime(num) {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 1;

  for (var i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};
