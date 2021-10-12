function tournamentWinner(competitions, results) {
  // Write your code here.
  // 1 means home team (left) and 0 means away team (right)
  let memo = {};
  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 1) {
      if (memo[competitions[i][0]]) {
        memo[competitions[i][0]] += 1;
      } else {
        memo[competitions[i][0]] = 1;
      }
    } else {
      if (memo[competitions[i][1]]) {
        memo[competitions[i][1]] += 1;
      } else {
        memo[competitions[i][1]] = 1;
      }
    }
  }
  let max = 0;
  let result = "";
  for (key in memo) {
    if (memo[key] > max) {
      max = memo[key];
      result = key;
    }
  }

  return result;
}
