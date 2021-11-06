//O(n^2) nested for loop

var reverseWords = function (s) {
  let sentence = s.split(" ");
  let result = [];
  let words = "";
  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    for (let k = word.length - 1; k >= 0; k--) {
      words += word[k];
    }
    result.push(words);
    words = "";
  }
  return result.join(" ");
};
