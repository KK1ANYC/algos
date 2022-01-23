var longestPalindrome = function (s) {
  if (!s) return "";

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = getPalindrome(s, i, i);
    const evenPalindrome = getPalindrome(s, i - 1, i);

    longest = longest.length < oddPalindrome.length ? oddPalindrome : longest;
    longest = longest.length < evenPalindrome.length ? evenPalindrome : longest;
  }

  return longest;
};

var getPalindrome = function (s, l, r) {
  let i = 0;

  while (s[l - i] && s[l - i] === s[r + i]) {
    i++;
  }

  i--;

  return s.slice(l - i, r + i + 1);
};
