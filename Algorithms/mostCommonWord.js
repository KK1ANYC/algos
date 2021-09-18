var mostCommonWord = function (paragraph, banned) {
  let ban = {};
  for (let cv of banned) {
    ban[cv] ? (ban[cv] += 1) : (ban[cv] = 1);
  }
  let memo = {};
  let word = "";
  let biggest = 0;
  let biggestWord = "";
  for (let i = 0; i < paragraph.length; i++) {
    let code = paragraph.charCodeAt(i);
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      word += paragraph[i];
      if (i === paragraph.length - 1) {
        word = word.toLowerCase();
        if (!ban[word]) {
          memo[word] ? (memo[word] += 1) : (memo[word] = 1);
          if (memo[word] > biggest) {
            biggest = memo[word];
            biggestWord = word;
          }
        }
      }
    } else {
      if (word.length) {
        word = word.toLowerCase();
        if (!ban[word]) {
          memo[word] ? (memo[word] += 1) : (memo[word] = 1);
          if (memo[word] > biggest) {
            biggest = memo[word];
            biggestWord = word;
          }
        }
        word = "";
      }
    }
  }
  return biggestWord;
};

// var mostCommonWord = function(paragraph, banned) {
//   let ban = {}
//   for (let cv of banned) {
//     ban[cv] ? ban[cv] += 1 : ban[cv] = 1
//   }
//   let memo = {}
//   let word = ''
//   for (let i = 0; i < paragraph.length; i++) {
//     let code = paragraph.charCodeAt(i)
//     if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
//       word += paragraph[i]
//       if (i === paragraph.length-1) {
//         word = word.toLowerCase()
//         if (!ban[word]) {
//           memo[word] ? memo[word] += 1 : memo[word] = 1
//         }
//       }
//     } else {
//       if (word.length) {
//         word = word.toLowerCase()
//         if (!ban[word]) {
//           memo[word] ? memo[word] += 1 : memo[word] = 1
//         }
//         word = ''
//       }
//     }
//   }
//   let biggestKey = ''
//   let biggest = 0
//   for (let key in memo) {
//     if (memo[key] > biggest) {
//       biggest = memo[key]
//       biggestKey = key
//     }
//   }
//   return biggestKey
// };

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
); //2
console.log(mostCommonWord("a.", [])); //1
console.log(mostCommonWord("Bob", [])); //1
console.log(mostCommonWord([1,3,5,6], 7)) //4
