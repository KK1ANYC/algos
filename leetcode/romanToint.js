
//O(n)
var romanToInt = function (s) {
  let roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let sum = 0;
  let count = 0;
  while (count < s.length) {
    if (roman[s[count]] < roman[s[count + 1]]) {
      sum += roman[s[count + 1]] - roman[s[count]];
      count += 2;
    } else {
      sum += roman[s[count]];
      count += 1;
    }
  }
  return sum;
};


console.log(romanToInt("III")); //3
console.log(romanToInt("IV")); //4
console.log(romanToInt("IX")); //9
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("DCXXI")); // 621
console.log(romanToInt("MCDLXXVI")); // 1476
