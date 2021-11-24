
//O(n)
function romanToInt(s) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let sum = 0;
  let count = 0;
  while (count < s.length) {
    if (s[count] + s[count + 1] in roman) {
      sum += roman[s[count] + s[count + 1]];
      count += 2;
    } else if (roman[s[count]] < roman[s[count + 1]]) {
      sum += roman[s[count + 1]] - roman[s[count]];
      count += 2;
    } else if (s[count] in roman) {
      sum += roman[s[count]];
      count++;
    }
  }
  return sum;
}


console.log(romanToInt("III")); //3
console.log(romanToInt("IV")); //4
console.log(romanToInt("IX")); //9
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("DCXXI")); // 621
console.log(romanToInt("MCDLXXVI")); // 1476
