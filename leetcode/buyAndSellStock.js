//O(n^2) time limit exceeded
var maxProfit = function (prices) {
  let buy = -Infinity;
  let sell = 0;
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    let buyPrice = prices[i];
    for (let k = i; k < prices.length; k++) {
      let sellPrice = prices[k];
      let profit = sellPrice - buyPrice;
      if (profit > result) {
        result = profit;
      }
    }
  }
  return result;
};

//O(n) final solution
var maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    result = Math.max(result, prices[i] - min);
  }
  return result;
};

console.log(maxProfit([2, 4, 1], 2));
