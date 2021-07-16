var maxNumberOfBalloons = function (text) {
  let count = 0;
  let memo = {
    b: 1,
    a: 1,
    l: 1,
    o: 1,
    n: 1,
  };
  for (let i = 0; i < text.length; i++) {
    if (memo[text[i]]) memo[text[i]]++;
  }
  while (memo.b > 1 && memo.a > 1 && memo.l > 1 && memo.o > 1 && memo.n > 1) {
    if (memo.b > 1) {
      memo.b--;
      if (memo.a > 1) {
        memo.a--;
        if (memo.l >= 3) {
          memo.l -= 2;
          if (memo.o >= 3) {
            memo.o -= 2;
            if (memo.n > 1) {
              memo.n--;
              count++;
            }
          }
        }
      }
    }
  }
  return count;
};
