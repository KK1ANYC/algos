//O(n) time and O(n) space
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


/*
return boolean array
true if candies[i] + extra is greater than the kid with most candies
false otherwise
multiple kids can be true

find the greatest candy by looping through candies

then loop through it again to see if each kid with x candies + extra candies has greater than the most candy
push true if they do and false if they dont into a result array

return result
*/
