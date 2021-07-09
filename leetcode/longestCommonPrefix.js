function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
    let firstWordCurLetter = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      let curWordCurLetter = strs[j][i];
      if (firstWordCurLetter !== curWordCurLetter) return result;
    }
    result += firstWordCurLetter;
  }
  return result;
}
