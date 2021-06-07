//Tournament Winner

//Solution 1
function tournamentWinner(competitions, results) {
  // Write your code here.
	// 0 means right won
	//1 means left won
	let home = 1
	let away = 0
	let memo = {};
	for (let i = 0; i < results.length; i++) {
		if (results[i] === home) {
			if (memo[competitions[i][home - 1]]) {
				memo[competitions[i][home - 1]] += 3
			} else {
				memo[competitions[i][home - 1]] = 3
			}
		} else {
			if (memo[competitions[i][away + 1]]) {
				memo[competitions[i][away + 1]] += 3
			} else {
				memo[competitions[i][away + 1]] = 3
			}
		}
	}
  return Object.keys(memo).reduce(function(a, b){ return memo[a] > memo[b] ? a : b }); ;
}

