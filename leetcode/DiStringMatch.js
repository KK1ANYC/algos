var diStringMatch = function (s) {
  let low = 0;
  let high = s.length;
  let i = 0;
  let perm = [];
  while (low <= high) {
    if (s[i] == "I") {
      perm.push(low);
      low++;
    } else {
      perm.push(high);
      high--;
    }
    i++;
  }
  return perm;
};

/*
create a variable of low and high that increments and decrements based on the string at index i
Low and High will also keep track of numbers that are added to the array
variable i will be a pointer
have a perm array as empty for the result
while loop that will run until low is greater than high
if s[i] is I, push low to the array, and increment low
else push high to the array, and decrement high
incremenet i regardless
return the array
*/
