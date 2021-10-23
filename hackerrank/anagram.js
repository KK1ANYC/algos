function anagram(s) {
  let count = 0;
  let memo = {};
  if (s.length % 2 !== 0) {
    return -1;
  }
  let first = s.slice(0, s.length / 2);
  let second = s.slice(s.length / 2);

  for (let i = 0; i < first.length; i++) {
    let el = first[i];
    if (!memo[el]) memo[el] = 1;
    else memo[el]++;
  }

  for (let i = 0; i < second.length; i++) {
    let el = second[i];
    if (memo[el]) memo[el]--;
    else count++;
  }

  return count;
}


function anagram(s) {
  let count = 0;
  let memo = {};
  if (s.length % 2 !== 0) {
    return -1;
  }

  let mid = s.length / 2;

  for (let i = 0; i < mid; i++) {
    let el = s[i];
    if (!memo[el]) memo[el] = 1;
    else memo[el]++;
  }

  for (let i = mid; i < s.length; i++) {
    let el = s[i];
    if (memo[el]) memo[el]--;
    else count++;
  }
  return count;
}


function anagram(s) {
  if (s.length % 2 === 1) return -1;
  const mid = s.length / 2;
  const memo = {};
  for (let i = mid; i < s.length; i++) {
    const cv = s[i];
    if (memo[cv]) memo[cv]++;
    else memo[cv] = 1;
  }
  let count = 0;
  for (let i = 0; i < mid; i++) {
    const cv = s[i];
    if (memo[cv]) memo[cv]--;
    else count++;
  }
  return count;
}

console.log("3", anagram("aaabbb"));
console.log("1", anagram("ab"));
console.log("-1", anagram("abc"));
console.log("0", anagram("xyyx"));
console.log("1", anagram("xaxbbbxx"));
