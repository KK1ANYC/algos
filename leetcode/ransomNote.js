var canConstruct = function(ransomNote, magazine) {
	let memo = {};
    if (magazine.length < ransomNote.length) return false
    for (let i = 0; i < ransomNote.length; i++) {
      if (memo[ransomNote[i]]) memo[ransomNote[i]]++
      else memo[ransomNote[i]] = 1
    }
    for (let j = 0; j < magazine.length; j++) {
      if (memo[magazine[j]]) memo[magazine[j]]--
    }
    for (let key in memo) {
      if (memo[key] > 0) {
	return false
      }
    }
    return true
  };
