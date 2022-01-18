//O(n) time complexity
var maxProfit = function (prices) {
  let profit = 0;
  let bp = 0;
  let sp = 1;

  while (sp < prices.length) {
    let diff = prices[sp] - prices[bp];
    if (prices[sp] < prices[bp]) {
      bp = sp;
    }
    if (profit < diff) profit = diff;
    sp++;
  }

  return profit;
};
