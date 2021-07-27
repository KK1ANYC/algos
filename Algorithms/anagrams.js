function groupAnagrams(words) {
  // Write your code here.

  let memo = {};
  for (let i = 0; i < words.length; i++) {
    let sortWord = words[i].split("").sort().join("");
    if (!memo[sortWord]) {
      memo[sortWord] = [words[i]];
    } else {
      memo[sortWord].push(words[i]);
    }
  }
  return Object.values(memo);
}
