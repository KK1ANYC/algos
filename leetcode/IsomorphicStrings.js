var isIsomorphic = function (str, test) {
  let memo = {};
  let track = {};
  let i = 0;
  let cv;
  let tv;
  while (i < str.length) {
    cv = str[i]; //current value
    tv = test[i]; //test value
    if (track[tv] && track[tv] !== cv) return false;
    if (memo[cv] && track[tv] !== cv) return false;
    if (!memo[cv]) {
      memo[cv] = 1;
      track[tv] = cv;
    }
    i++;
  }
  return true;
};
