function isValidParans(string) {
  let memo = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let result = [];
  if (string.length === 1) return false;
  if (string.length === 2 && memo[string[0]] === string[0]) return true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] in memo) result.push(string[i]);
    else if (string[i] === memo[result[result.length - 1]]) result.pop();
    else return false;
  }
  if (result.length) return false;
  else return true;
}
