//O(n)
var lengthOfLastWord = function (s) {
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (word.length >= 1 && s[i] === " ") {
      break;
    }
    if (s[i] !== " ") {
      word += s[i];
    }
  }
  return word.length;
};


console.log("Hello World");
console.log("   fly me   to   the moon  ");
console.log("luffy is still joyboy");
