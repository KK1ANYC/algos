
var kidsWithCandies = function (candies, extraCandies) {
  let mostCandy = 0;
  for (let candy of candies) {
    if (candy > mostCandy) {
      mostCandy = candy;
    }
  }

  let result = [];

  for (let i = 0; i < candies.length; i++) {
    let sum = candies[i] + extraCandies;
    if (sum >= mostCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};
