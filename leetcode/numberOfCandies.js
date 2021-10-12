var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    let cv = candies[i] + extraCandies;
    if (cv >= max) candies[i] = true;
    else candies[i] = false;
  }
  return candies;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //[true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); //[true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); //[true,false,true]
