var groupAnagrams = function (strs) {
  let hash = {};
  for (let i = 0; i < strs.length; i++) {
    let s = [...strs[i]].sort();
    if (!hash[s]) {
      hash[s] = [strs[i]];
    } else {
      hash[s].push(strs[i]);
    }
  }
  return Object.values(hash);
};
