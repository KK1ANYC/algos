var uncommonFromSentences = function (s1, s2) {
  let s1Hash = {};
  let s2Hash = {};

  let result = new Array();

  s1 = s1.split(" ");
  s2 = s2.split(" ");

  for (let word of s1) {
    if (!s1Hash[word]) s1Hash[word] = 1;
    else s1Hash[word]++;
  }

  for (let word of s2) {
    if (!s2Hash[word]) s2Hash[word] = 1;
    else s2Hash[word]++;
  }

  for (let word of s1) {
    if (!s2Hash[word] && s1Hash[word] == 1) result.push(word);
  }

  for (let word of s2) {
    if (!s1Hash[word] && s2Hash[word] == 1) result.push(word);
  }

  return result;
};
