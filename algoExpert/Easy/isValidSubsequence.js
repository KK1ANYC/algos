let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

//solution 1 - for loop
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[seqIdx]) {
      seqIdx++;
    }
  }
  return seqIdx === sequence.length;
}
