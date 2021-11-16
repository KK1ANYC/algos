var stringMatching = function (words) {
  const wordsHash = {};
  const ansSet = new Set();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = i + 1; j <= words.length; j++) {
      let otherWord = words[j];
      if (word.includes(otherWord)) {
        if (word === otherWord) continue;
        ansSet.add(otherWord);
      }

      if (otherWord !== undefined)
        if (otherWord.includes(word)) {
          if (otherWord === word) continue;
          else ansSet.add(word);
        }
    }
  }
  const ansArr = [];
  for (const key of ansSet) {
    ansArr.push(key);
  }
  return ansArr;
};
