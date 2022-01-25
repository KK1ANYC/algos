//O(n) time complexity
var maxProfit = function (prices) {
  let profit = 0;
  let bp = 0;
  let sp = 1;

  while (sp < prices.length) {
    if (prices[sp] < prices[bp]) {
      bp = sp;
    }
    profit = Math.max(profit, prices[sp] - prices[bp]);
    sp++;
  }
  return profit;
};
