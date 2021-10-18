function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > sum + 1) {
      return sum + 1;
    }
    sum += coins[i];
  }
  return sum + 1;
}
