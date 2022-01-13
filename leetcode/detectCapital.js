var detectCapitalUse = function (word) {
  let case1 = word.toUpperCase();
  let case2 = word.toLowerCase();
  let case3 = "";
  for (let i = 0; i < word.length; i++) {
    if (i == 0) {
      case3 += word[i].toUpperCase();
    } else {
      case3 += word[i].toLowerCase();
    }
  }

  if (case1 == word || case2 == word || case3 == word) {
    return true;
  } else {
    return false;
  }
};
