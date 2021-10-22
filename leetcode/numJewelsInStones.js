var numJewelsInStones = function (jewels, stones) {
  let memo = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (!memo[jewels]) memo[jewels[i]] = 1;
  }
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] in memo) {
      count++;
    }
  }
  return count;
};

console.log("3", numJewelsInStones("aA", "aAAbbbb"));

console.log("0", numJewelsInStones("z", "ZZ"));
