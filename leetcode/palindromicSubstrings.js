var countSubstrings = function (s) {
  if (!s) return 0;

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = getPalindrome(s, i, i);
    const evenPalindrome = getPalindrome(s, i - 1, i);

    count += oddPalindrome;
    count += evenPalindrome;
  }

  return count;
};

var getPalindrome = function (s, l, r) {
  let i = 0;
  let count = 0;

  while (s[l - i] && s[l - i] === s[r + i]) {
    i++;
    count++;
  }

  i--;

  return count;
};
