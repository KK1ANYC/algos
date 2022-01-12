var countCharacters = function (words, chars) {
  let totalResult = 0;

  const makeHash = (word) => {
    let hash = {};
    for (let char of word) {
      if (!hash[char]) hash[char] = 1;
      else hash[char]++;
    }
    return hash;
  };

  let hash = makeHash(chars);

  for (let i = 0; i < words.length; i++) {
    let bool = true;
    let temp = makeHash(words[i]);

    for (let key in temp) {
      if (!hash[key] || hash[key] < temp[key]) {
        bool = false;
        break;
      }
    }
    bool && (totalResult += words[i].length);
  }
  return totalResult;
};
