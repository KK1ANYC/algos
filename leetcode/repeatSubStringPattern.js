var repeatedSubstringPattern = function (s) {
  const newString = s + s;
  return newString.slice(1, newString.length - 1).includes(s);
};
