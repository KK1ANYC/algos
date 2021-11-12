//O(n^2) time and O(n) space
var countConsistentStrings = function (allowed, words) {
  let allowedHash = {};
  for (let char of allowed) {
    if (!allowedHash[char]) allowedHash[char] = 1;
    else allowedHash[char]++;
  }

  let count = words.length;
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (allowedHash[word[i]]) continue;
      else {
        count--;
        break;
      }
    }
  }
  return count;
};


/*
allowed char are alphabet - lowercase letters
less than 10 words in array
char in allowed are distinct - no duplicates

build hash table
loop through allowed and input chars in hash

set variable count to words.length
nested loop
Outer loop through words array
inner loop through each el in array
check if each char in el are "in" the hash
if not "in" hash count--

return count

*/
