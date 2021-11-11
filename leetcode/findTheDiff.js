function findTheDifference(string, test) {
  let memo = {};
  for (let i = 0; i < string.length; i++) {
    if (!memo[string[i]]) memo[string[i]] = 1;
    else {
      memo[string[i]] += 1;
    }
  }
  for (let j = 0; j < test.length; j++) {
    if (!memo[test[j]]) return test[j];
    else if (memo[test[j]] === 0) return test[j];
    else {
      memo[test[j]] -= 1;
    }
  }
}


var findTheDifference = function (s, t) {
  let hash = {};
  if (s.length === 0) return t;

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) hash[s[i]]++;
    else hash[s[i]] = 1;
  }

  for (let k = 0; k < t.length; k++) {
    if (hash[t[k]]) {
      hash[t[k]]--;
    } else {
      return t[k];
    }
  }
};

console.log(findTheDifference("abcd", "abcde")); //e
console.log(findTheDifference("", "y")); //y
console.log(findTheDifference("ae", "aea")); //a
